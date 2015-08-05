var flowlyStyle = {
	'.tab-content': {
		mozborderbottomcolors: 'none',
		mozborderleftcolors: 'none',
		mozborderrightcolors: 'none',
		mozbordertopcolors: 'none',
		borderColor: '#dddddd #dddddd -moz-use-text-color',
		borderImage: 'none',
		borderStyle: 'solid solid none',
		borderWidth: '1px 1px 0px',
		padding: 0
	},
	'.nav-tabs': {
		borderBottom: '0px none',
		borderTop: '1px solid #dddddd'
	},
	'.nav-tabs > li': {
		marginBottom: 0,
		marginTop: -1
	},
	'.nav-tabs > li > a': {
		borderRadius: '0px 0px 5px 5px',
		border: '1px solid transparent',
		lineHeight: 20,
		paddingBottom: 8,
		paddingTop: 8
	},
	'.nav-tabs > .active > a, .nav-tabs > .active > a:hover, .nav-tabs > .active > a:focus': {
		mozborderbottomcolors: 'none',
		mozborderleftcolors: 'none',
		mozborderrightcolors: 'none',
		mozbordertopcolors: 'none',
		backgroundColor: '#ffffff',
		borderColor: 'rgba(0, 0, 0, 0) #dddddd #dddddd',
		borderImage: 'none',
		borderRight: '1px solid #dddddd',
		borderStyle: 'solid',
		borderWidth: 1,
		color: '#555555',
		cursor: 'default'
	},
	'.carousel-control.left': {
		backgroundImage: 'none',
		backgroundRepeat: 'no-repeat'
	},
	'.carousel-control.right': {
		backgroundImage: 'none',
		backgroundRepeat: 'no-repeat'
	},
	'.samplePage': {
		fontSize: 36,
		lineHeight: 96
	},
	'.DocumentList': {
		overflowX: 'scroll',
		overflowY: 'hidden',
		padding: 0,
		width: '100%'
	},
	'.listInline': {
		whiteSpace: 'nowrap'
	},
	'#gallery': {
		background: 'none repeat scroll 0% 0% #546e7a',
		boxShadow: '1px 2px 4px #263238',
		margin: '1em auto',
		maxWidth: '30em',
		padding: '1em'
	},
	'.hero-img': {
		textAlign: 'center'
	},
	'#demo': {
		lineHeight: 20
	},
	'.logo': {
		display: 'inline-block',
		marginRight: 20
	},
	'.logo img': {
		border: '0px none',
		verticalAlign: 'bottom'
	},
	'.title': {
		display: 'inline-block',
		fontSize: 32,
		lineHeight: 24,
		marginRight: 40,
		verticalAlign: 'middle',
		marginTop: 5
	},
	'nav ul, .callbacks ul, .disable-destroy ul, .show-hide ul, #sortable ul, .dialog ul, .all-themes-switch ul, .scrollTo ul': {
		listStyle: 'outside none none',
		margin: 0,
		overflow: 'hidden',
		padding: 0
	},
	h1: {
		color: 'inherit',
		margin: '20px 0px'
	},
	img: {
		height: 'auto',
		maxWidth: '100%'
	},
	'#info p': {
		color: '#bbbbbb',
		fontSize: 12,
		padding: '6px 15px'
	},
	'.callbacks, .callbacks + p, #examples, .content, .disable-destroy, .show-hide, .dialog, .all-themes-switch, .scrollTo': {
		borderRadius: 5
	},
	'nav, .callbacks, .disable-destroy, .show-hide, .dialog, .all-themes-switch, .scrollTo': {
		background: 'none repeat scroll 0% 0% #111111'
	},
	'nav ul li, .callbacks ul li, .disable-destroy ul li, .show-hide ul li, .dialog ul li, .all-themes-switch ul li, .scrollTo ul li': {
		float: 'left',
		margin: '3px 6px 3px 0px'
	},
	'.callbacks ul li.off': {
		opacity: 0.4
	},
	'.callbacks ul li a, .disable-destroy ul li a, .show-hide ul li a, .dialog ul li a, .all-themes-switch ul li a, .scrollTo ul li a': {
		color: '#cccccc',
		display: 'block',
		padding: '3px 15px',
		textDecoration: 'none'
	},
	'.callbacks + p': {
		color: '#bbbbbb',
		fontSize: 12
	},
	'.callbacks + p span': {
		display: 'inline-block'
	},
	'.callbacks + p span span': {
		color: '#eeeeee',
		minWidth: 40
	},
	'.callbacks a span': {
		background: 'none repeat scroll 0% 0% #333333',
		borderRadius: 15,
		display: 'inline-block',
		height: 14,
		marginRight: 3,
		verticalAlign: 'middle',
		width: 14
	},
	'.callbacks a span.on': {
		background: 'none repeat scroll 0% 0% #eb3755'
	},
	'.callback-offset, .callback-offset-back': {
		position: 'absolute',
		width: '100%'
	},
	'.callback-offset-back': {
		borderBottom: '1px dashed #ffed0d',
		height: 50,
		top: 0
	},
	'.callback-offset': {
		borderTop: '1px dashed #ffed0d',
		bottom: 0,
		height: 60
	},
	code: {
		color: '#caaee1',
		fontFamily: 'monospace'
	},
	'#examples': {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		margin: '10px 0px',
		overflow: 'hidden',
		padding: 5
	},
	'#examples > hr': {
		margin: '20px 10px'
	},
	'.content': {
		background: 'none repeat scroll 0% 0% ',
		boxSizing: 'border-box',
		height: 1000,
		margin: 0,
		maxWidth: '100%',
		overflow: 'hidden',
		padding: 0,
		position: 'relative',
		width: '100%'
	},
	'.content.hidden': {
		display: 'none'
	},
	'.content.light': {
		backgroundColor: '#dddddd',
		color: '#333333'
	},
	'.content hr': {
		borderTop: '1px solid rgba(0, 0, 0, 0.7)',
		marginBottom: -10
	},
	'.content.light hr': {
		borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
		borderTop: '1px solid rgba(0, 0, 0, 0.1)'
	},
	'.content p': {
		margin: '30px 0px'
	},
	'.content p:last-child': {
		marginBottom: 5
	},
	'.content p:nth-child(2n+1), .content.light p:nth-child(2n+1)': {
		background: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.1)',
		borderRadius: 3,
		padding: '5px 10px'
	},
	'.content p:nth-child(3n+3)': {
		background: 'none repeat scroll 0% 0% transparent',
		color: '#bbbbbb',
		padding: 0
	},
	'.content.light p:nth-child(2n+1)': {
		background: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.8)'
	},
	'.content.light p:nth-child(3n+3)': {
		color: '#666666'
	},
	'.content p.full:nth-child(2n+1), .content p.half:nth-child(2n+1), .content p.full:nth-child(3n+3), .content p.half:nth-child(3n+3)': {
		background: 'none repeat scroll 0% 0% transparent',
		padding: 0
	},
	'.content h2': {
		fontSize: '200%',
		lineHeight: '130%'
	},
	'.content h2:first-child': {
		marginTop: 5
	},
	'.content:nth-child(2n+1) h2': {
		fontFamily: '"Oswald",sans-serif',
		fontStyle: 'normal',
		fontWeight: 300
	},
	'hr + .content:nth-child(2n+1) h2': {
		fontFamily: '"Lobster Two","Georgia",serif',
		fontStyle: 'italic',
		fontWeight: 700
	},
	'.content.light h2': {
		color: 'inherit'
	},
	'.content img': {
		background: 'none repeat scroll 0% 0% rgba(0, 0, 0, 0.2)',
		boxSizing: 'border-box',
		margin: 0,
		padding: 3
	},
	'.content.light img': {
		background: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.4)'
	},
	'.content input[type="text"], .content textarea': {
		background: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.6)',
		borderRadius: 3,
		border: 'medium none',
		boxShadow: '-1px -1px 1px rgba(255, 255, 255, 0.6) inset, 3px 3px 20px rgba(0, 0, 0, 0.5) inset',
		color: '#222222',
		fontFamily: 'inherit',
		fontSize: 'inherit',
		minHeight: 20,
		padding: 5,
		width: '50%'
	},
	'.content textarea': {
		minHeight: 80,
		width: '70%'
	},
	'.content .half img': {
		margin: '0px 0px 2% 2%',
		maxWidth: '48%'
	},
	'.content .half img:nth-child(2n+1)': {
		margin: '0px 2% 2% 0px'
	},
	'#demo.showcase': {
		minWidth: 740
	},
	'.showcase .content': {
		float: 'left',
		height: 300,
		width: 340
	},
	'.showcase .horizontal-images.content': {
		height: 140,
		maxWidth: '97%',
		padding: '5px 5px 0px',
		width: 700
	},
	'.showcase .horizontal-images.content h2, .showcase .horizontal-images.content li img': {
		height: 119
	},
	'.showcase .horizontal-images.content h2': {
		backgroundColor: '#eb3755',
		boxSizing: 'border-box',
		color: '#ffffff',
		fontSize: '165%',
		margin: 0,
		padding: '10px 20px'
	},
	'.horizontal-images.content ul, .vertical-images.content ul': {
		listStyle: 'outside none none',
		margin: 0,
		overflow: 'hidden',
		padding: 0
	},
	'.horizontal-images.content li': {
		float: 'left',
		margin: '0px 3px'
	},
	'.vertical-images.content li': {
		margin: '3px 0px'
	},
	'.horizontal-images.content li:first-child': {
		marginLeft: 0
	},
	'.vertical-images.content li:first-child': {
		marginBottom: 3,
		marginTop: 0
	},
	'.horizontal-images.content li:last-child': {
		marginRight: 0
	},
	'.vertical-images.content li:last-child': {
		marginBottom: 0
	},
	'.horizontal-images.content li img': {
		padding: 0,
		width: 'auto'
	},
	'.showcase #content-1.content': {
		height: 620
	},
	'.showcase #content-2.content': {
		height: 620
	},
	'.showcase #content-2.content h2': {
		color: '#333333'
	},
	'.showcase #content-3.content': {
		backgroundColor: '#412626',
		backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAJ0lEQVQIW2NkwA7+M2IR/w8UY0SXAAuCFCNLwAWRJVAEYRIYgiAJALsgBgYbCawOAAAAAElFTkSuQmCC")',
		marginRight: 40,
		width: 310
	},
	'.showcase #content-3.content h2': {
		color: '#eb3755'
	},
	'.showcase #content-4.content': {
		backgroundColor: '#1c383f'
	},
	'.showcase #content-4.content h2': {
		color: '#dddddd'
	},
	'.showcase #content-6.horizontal-images.content': {
		backgroundColor: '#444444',
		backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkYGA4A8QmQAwGjDAGNgGwSgwVAFVOAgV/1mwxAAAAAElFTkSuQmCC")',
		padding: '10px 0px 5px'
	},
	'.showcase #content-6.horizontal-images.content .mCSB_scrollTools': {
		marginLeft: 10,
		marginRight: 10
	},
	'.showcase #content-6.horizontal-images.content ul': {
		marginLeft: 10,
		marginRight: 10
	},
	'.showcase #content-6.horizontal-images.content h2': {
		backgroundColor: '#c2beb2',
		color: '#222222'
	},
	'.showcase #content-6.horizontal-images.content h2, .showcase #content-6.horizontal-images.content li img': {
		height: 105
	},
	'.showcase #content-7.content': {
		height: 620
	},
	'.showcase #content-8.content': {
		backgroundColor: '#151515',
		backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAK0lEQVQIW2NkwAL+//9vzIguDhZkZDyLIgETBCmGSyALwiXQBcES2ARBEgCUVxc3f8oLcQAAAABJRU5ErkJggg==")',
		border: '5px solid rgba(0, 0, 0, 0.5)',
		height: 580,
		marginBottom: 50,
		marginRight: 40,
		padding: 0,
		width: 670
	},
	'.showcase #content-8.content h2': {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20
	},
	'.showcase #content-8.content p': {
		float: 'left',
		margin: '15px 20px',
		width: 710
	},
	'.showcase #content-8.content hr + p': {
		marginTop: 30
	},
	'.showcase #content-8.content p:nth-child(3n+1)': {
		clear: 'both',
		width: 1460
	},
	'.showcase #content-9.content': {
		backgroundColor: '#c2beb2',
		height: 620,
		padding: 5
	},
	'.showcase #content-9.content .mCSB_container': {
		marginRight: 21
	},
	'.showcase #content-9.content h2': {
		color: '#333333',
		fontSize: '180%',
		height: 85,
		marginBottom: 0,
		marginTop: 15,
		padding: 10
	},
	'.showcase #content-9.content img': {
		padding: 0,
		verticalAlign: 'bottom'
	},
	'#iframe-container': {
		background: 'none repeat scroll 0% 0% #000000',
		maxWidth: 1110,
		overflow: 'hidden',
		width: '90%'
	},
	'#iframe-container iframe': {
		verticalAlign: 'bottom'
	},
	'#infinite-scroll .offset': {
		borderRadius: 3,
		color: '#ffed0d',
		display: 'block',
		height: 'auto',
		width: '100%'
	},
	'#infinite-scroll .offset p': {
		marginBottom: 60
	},
	'#infinite-scroll .offset .indicator': {
		background: 'none repeat scroll 0% 0% #ffed0d',
		borderRadius: 3,
		display: 'block',
		height: 100,
		width: '100%'
	},
	'#examples.resizable': {
		background: 'none repeat scroll 0% 0% #444444',
		paddingBottom: 30
	},
	'#resizable.content': {
		boxSizing: 'content-box',
		maxWidth: '80%',
		overflow: 'hidden',
		width: 640
	},
	'#resizable.content h2': {
		color: '#444444'
	},
	'#resizable.content p': {
		width: 1000
	},
	'.content.fluid': {
		maxWidth: 1680,
		width: '90%'
	},
	'.content.fluid h2': {
		color: '#eb3755',
		fontFamily: '"Lobster Two","Georgia",serif',
		fontStyle: 'italic',
		fontWeight: 700
	},
	'.content.nested': {
		height: 600
	},
	'.content.nested .nested': {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		height: 400,
		margin: '0px auto'
	},
	'#content-1.content.nested': {
		marginBottom: 40
	},
	'#content-1.content.nested p': {
		width: 1000
	},
	'#content-1.content.nested .nested': {
		height: 300,
		margin: 20,
		width: 600
	},
	'.content.zero-height': {
		height: 0
	},
	'.content.zero-width': {
		width: 0
	},
	'.init-hidden #examples': {
		minHeight: 420
	},
	'.full-page .content': {
		height: 800
	},
	'.full-page-alt #mCSB_1_container': {
		minWidth: 480,
		width: '97%'
	},
	'.full-page-alt #mCSB_1_scrollbar_vertical': {
		marginBottom: 16,
		marginRight: 30,
		marginTop: 16,
		position: 'fixed'
	},
	'.full-page-alt #mCSB_1_scrollbar_horizontal': {
		marginBottom: 30,
		marginLeft: 16,
		marginRight: 16,
		position: 'fixed'
	},
	'.full-page-alt .outer.content': {
		width: 960
	},
	'.full-page-alt .horizontal-images.content': {
		height: 275,
		margin: '20px auto 10px',
		width: '100%'
	},
	'.full-page-alt .horizontal-images.content img': {
		height: 200
	},
	'.content table': {
		background: 'none repeat scroll 0% 0% rgba(0, 0, 0, 0.1)',
		borderCollapse: 'collapse',
		borderLeft: '1px dashed #666666',
		borderRight: '1px dashed #666666',
		borderTop: '1px dashed #666666',
		width: '100%'
	},
	'.content table tr': {
		borderBottom: '1px dashed #666666'
	},
	'.content table td': {
		padding: '10px 20px 9px'
	},
	'.sortable': {
		minWidth: 800
	},
	'#sortable ul': {
		marginBottom: 10,
		marginTop: 20
	},
	'#sortable li': {
		background: 'none repeat scroll 0% 0% #444444',
		borderRadius: 3,
		color: '#ffffff',
		margin: '10px 40px',
		padding: '5px 10px'
	},
	'#sortable li:active, #sortable .ui-sortable-helper': {
		background: 'none repeat scroll 0% 0% #eb3755'
	},
	'#examples.tabs, #examples.accordion, #examples.autocomplete': {
		backgroundColor: '#333333',
		padding: '5px 20px 20px'
	},
	'#examples.tabs h3, #examples.accordion h3': {
		color: '#222222',
		fontFamily: 'inherit',
		fontStyle: 'inherit'
	},
	'#tabs': {
		marginBottom: 20
	},
	'#tabs, #tabs-2, #accordion': {
		maxWidth: '95%',
		width: 600
	},
	'#examples.tabs .ui-widget-content': {
		backgroundImage: 'none'
	},
	'#autocomplete': {
		background: 'none repeat scroll 0% 0% #ffffff',
		border: 'medium none',
		color: '#222222',
		fontFamily: 'inherit',
		fontSize: 'inherit',
		marginTop: 15,
		minHeight: 20,
		padding: '5px 8px'
	},
	'#autocomplete:focus': {
		outline: 'medium none'
	},
	'.ui-menu a': {
		transition: 'none 0s ease 0s '
	},
	'.ui-menu .mCSB_container': {
		padding: 2
	},
	'.ui-menu .mCSB_scrollTools': {
		marginBottom: 5,
		marginTop: 5,
		right: 5
	},
	'.bootstrap #examples': {
		background: 'none repeat scroll 0% 0% transparent'
	},
	'.bootstrap #myModal-2 .modal-body': {
		boxSizing: 'content-box',
		marginBottom: -15,
		maxHeight: 340
	},
	'.bootstrap #myTab': {
		maxWidth: 600
	},
	'.bootstrap #myTab .tab-pane': {
		padding: '15px 5px 15px 15px'
	},
	'body.colorbox-demo #cboxContent, body.colorbox-demo #cboxContent p, body.colorbox-demo #cboxContent a:hover': {
		color: '#333333'
	},
	'.all-themes #examples': {
		padding: '15px 0px 0px 15px'
	},
	'.all-themes .content': {
		float: 'left',
		height: 500,
		margin: '0px 20px 20px 0px',
		width: 310
	},
	'.all-themes .content h2, .all-themes .content p, .all-themes .content hr': {
		boxSizing: 'border-box',
		width: 240
	},
	'.all-themes #content-m h2, .all-themes #content-m p, .all-themes #content-m hr, .all-themes #content-md h2, .all-themes #content-md p, .all-themes #content-md hr': {
		width: 270
	},
	'.all-themes .content.expanded-content h2, .all-themes .content.expanded-content p, .all-themes .content.expanded-content hr, .all-themes #content-m.expanded-content h2, .all-themes #content-m.expanded-content p, .all-themes #content-m.expanded-content hr, .all-themes #content-md.expanded-content h2, .all-themes #content-md.expanded-content p, .all-themes #content-md.expanded-content hr': {
		width: 540
	},
	'.max-height-example .content': {
		height: 'auto',
		maxHeight: 400
	},
	'.max-width-example': {
		minWidth: 620
	},
	'.max-width-example .content': {
		display: 'inline-block',
		height: 'auto',
		maxWidth: '50%',
		minWidth: 600,
		verticalAlign: 'bottom',
		width: 'auto'
	},
	'.max-width-example .content ul': {
		maxHeight: 135,
		overflowY: 'hidden'
	},
	'.max-width-example .content img, .max-width-example .content ul li > a': {
		border: '3px solid #444444',
		height: 130
	},
	'.max-width-example .content ul li > a': {
		background: 'none repeat scroll 0% 0% rgba(0, 0, 0, 0.3)',
		boxSizing: 'border-box',
		display: 'block',
		padding: 20
	},
	'.snap-scrolling-example .content': {
		height: 'auto',
		width: 853
	},
	'.snap-scrolling-example .content img': {
		height: 160
	},
	'.textarea-example .content': {
		width: 360
	},
	'.textarea-example .content form': {
		margin: '25px 0px 15px'
	},
	'.textarea-example .content textarea, .textarea-example .textarea-clone': {
		boxSizing: 'border-box',
		lineHeight: 25,
		padding: '0px 10px',
		width: 300
	},
	'.textarea-example .content textarea': {
		background: 'none repeat scroll 0% 0% transparent',
		border: 'medium none',
		boxShadow: 'none',
		height: 160,
		margin: 0,
		outline: 'medium none',
		overflow: 'hidden',
		resize: 'none'
	},
	'.textarea-example .content .textarea-wrapper': {
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
		borderRadius: 3,
		boxShadow: '-1px -1px 1px rgba(255, 255, 255, 0.6) inset, 3px 3px 20px rgba(0, 0, 0, 0.5) inset',
		height: 182,
		overflow: 'hidden'
	},
	'.textarea-example .textarea-clone': {
		left: -9999,
		minHeight: 160,
		position: 'absolute',
		top: -9999,
		visibility: 'hidden',
		whiteSpace: 'pre-wrap',
		wordWrap: 'break-word'
	},
	'.textarea-example .content .textarea-wrapper .mCSB_scrollTools': {
		margin: '10px 5px'
	},
	'.scrollTo-demo .content': {
		height: 290
	},
	'.scrollTo-demo .demo-y': {
		height: 600
	},
	'.scrollTo-demo .demo-x': {
		backgroundColor: '#252525',
		width: 660
	},
	'.scrollTo-demo .demo-x p': {
		backgroundColor: '#333333',
		borderRadius: 3,
		float: 'left',
		height: 'auto',
		marginLeft: 30,
		padding: '5px 10px',
		width: 300
	},
	'.scrollTo-demo .demo-x hr + p': {
		marginLeft: 0
	},
	'.scrollTo-demo .demo-yx': {
		backgroundColor: '#424242'
	},
	'.scrollTo-demo .demo-yx p': {
		width: 1000
	},
	'.scrollTo': {
		fontSize: 12
	},
	'.scrollTo + .scrollTo': {
		marginTop: 20
	},
	'.scrollTo ul li:first-child span': {
		display: 'block',
		padding: '3px 15px'
	},
	'#test-id': {
		backgroundColor: '#eb3755',
		color: '#ffffff'
	},
	'.rtl-demo #content-1': {
		width: 500
	},
	'.rtl-demo #content-1 p': {
		width: 1000
	},
	'.transitions #examples': {},
	'.transitions .content': {
		transition: 'all 0.6s ease-out 0s'
	},
	mediaQueries: {
		'only screen and (min-width: 1229px)': {
			'.showcase .horizontal-images.content': {
				width: 1060
			}
		},
		'only screen and (min-width: 1629px)': {
			'.showcase .horizontal-images.content': {
				width: 700
			}
		}
	}
}

module.exports = flowlyStyle ;