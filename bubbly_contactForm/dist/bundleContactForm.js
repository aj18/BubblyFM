(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var store = new JSData.DS();
var firebaseAdapter = new DSFirebaseAdapter({
  basePath: "https://js-data-firebase.firebaseio.com"
});

store.registerAdapter("firebase", firebaseAdapter, { "default": true });

// Flux pattern
var UserStore = store.defineResource({
  name: "user",
  afterInject: function () {
    UserStore.emit("change");
  },
  afterEject: function () {
    UserStore.emit("change");
  }
});

// Activate a mostly auto-sync with Firebase
// The only thing missing is auto-sync TO Firebase
// This will be easier with js-data 2.x, but right
// now you still have to do store.update('user', 1, { foo: 'bar' }), etc.
for (var resourceName in store.definitions) {
  var Resource = store.definitions[resourceName];
  var ref = firebaseAdapter.ref.child(Resource.endpoint);
  // Inject items into the store when they're added to Firebase
  // Update items in the store when they're modified in Firebase
  ref.on("child_changed", function (dataSnapshot) {
    var data = dataSnapshot.val();
    if (data[Resource.idAttribute]) {
      Resource.inject(data);
    }
  });
  // Eject items from the store when they're removed from Firebase
  ref.on("child_removed", function (dataSnapshot) {
    var data = dataSnapshot.val();
    if (data[Resource.idAttribute]) {
      Resource.eject(data[Resource.idAttribute]);
    }
  });
}

var UserItem = React.createClass({
  displayName: "UserItem",
  remove: function () {
    UserStore.destroy(this.props.user.id);
  },
  render: function () {
    var user = this.props.user;
    return React.createElement(
      "div",
      { className: "list-group-item", key: user.id },
      React.createElement(
        "div",
        { className: "pull-right" },
        React.createElement(
          "button",
          { className: "btn btn-xs btn-danger", onClick: this.remove },
          "Delete"
        )
      ),
      user.name
    );
  }
});

var UserApp = React.createClass({
  displayName: "UserApp",
  getInitialState: function () {
    // Pull the initial list of users
    // from Firebase
    UserStore.findAll();

    return { users: UserStore.getAll(), name: "" };
  },
  onChange: function () {
    this.setState({ users: UserStore.getAll(), name: this.props.name || "" });
  },
  onInput: function (event) {
    this.setState({ users: this.state.users, name: event.target.value });
  },
  componentDidMount: function () {
    UserStore.on("change", this.onChange);
  },
  componentWillUnmount: function () {
    UserStore.off("change", this.onChange);
  },
  createUser: function (e) {
    var _this = this;
    e.preventDefault();
    UserStore.create({
      name: _this.state.name
    }).then(function () {
      _this.setState({ name: "" });
    });
  },
  render: function () {
    var users = this.state.users;
    var _userItems = [];

    users.forEach(function (user, i) {
      _userItems.push(React.createElement(UserItem, { key: i, user: users[i] }));
    });

    return React.createElement(
      "div",
      { className: "panel panel-primary" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        React.createElement(
          "h3",
          { className: "panel-title" },
          "Users"
        )
      ),
      React.createElement(
        "div",
        { className: "list-group" },
        _userItems,
        React.createElement(
          "div",
          { className: "list-group-item" },
          React.createElement(
            "form",
            { id: "user-form", name: "user-form", className: "list-group-item", onSubmit: this.createUser },
            React.createElement("input", { className: "form-control", type: "text", id: "name", name: "name", value: this.state.name, onChange: this.onInput, placeholder: "Enter a name and press enter" }),
            React.createElement("input", { type: "submit", className: "hidden" })
          )
        )
      )
    );
  }
});

React.render(React.createElement(UserApp, null), document.getElementById("example"));

},{}]},{},[1]);
