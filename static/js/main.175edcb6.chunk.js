(this["webpackJsonpartistify.ai"]=this["webpackJsonpartistify.ai"]||[]).push([[0],{110:function(e,t,a){e.exports=a(137)},115:function(e,t,a){},120:function(e,t,a){},127:function(e,t){},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},132:function(e,t){},133:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),l=a.n(o),i=(a(115),a(55)),s=a(15),c=a(95),m=a(184),u=a(185),h=a(69),d=a(170),g=a(173),p=a(174),f=a(176),v=a(190),E=a(178),b=a(191),y=a(179),w=a(66),x=a.n(w),S=a(90),k=a.n(S),C=a(91),N=a.n(C),j=a(85),O=a.n(j),M=Object(d.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,textAlign:"left",verticalAlign:"bottom"}}})),P=r.a.forwardRef((function(e,t){return r.a.createElement(g.a,Object.assign({direction:"up",ref:t},e))})),R=function(e){var t=M(),a=r.a.useState(!1),n=Object(h.a)(a,2),o=n[0],l=n[1],i=function(){l(!1)};return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement("div",{className:t.title},r.a.createElement("img",{src:O.a,height:"38px",alt:"logo with text",className:t.title})),r.a.createElement(v.a,{title:"Github Repo Link"},r.a.createElement(E.a,{"aria-label":"github repo","aria-controls":"menu-appbar",color:"inherit"},r.a.createElement("a",{href:"https://github.com/rahul-jha98/Artistify.ai",rel:"noopener noreferrer",target:"_blank",style:{color:"inherit",textDecoration:"none",height:24}},r.a.createElement(x.a,null)))),r.a.createElement(v.a,{title:"About"},r.a.createElement(E.a,{"aria-label":"about","aria-controls":"menu-appbar",color:"inherit",onClick:function(){l(!0)}},r.a.createElement(k.a,null))))),r.a.createElement(b.a,{fullScreen:!0,open:o,onClose:i,TransitionComponent:P},r.a.createElement(f.a,null,r.a.createElement(y.a,{variant:"h5",style:{textAlign:"center"},className:t.title},r.a.createElement("b",null,"About Artistify.ai")),r.a.createElement(E.a,{edge:"end",color:"inherit",onClick:i,"aria-label":"close"},r.a.createElement(N.a,null))),r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{variant:"h5"},"How is this sorcery happening?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"Neural Style Transfer is an algorithm that aims at recreating the given content image drawn in the style of another image known as the style image. Now, with a photograph as content and a painting as style image we can see some wonderful art being generated.",r.a.createElement("br",null),r.a.createElement("br",null),"Yet, the original implementation of Neural Style Transfer was slow taking many iterations over the image which took anywhere around a few minutes to hours. But recently algorithms have been proposed to make this process much faster. We have reached a level where we can apply it in real time between any two images. This arbitrary style transfer algorithm is what is running in the browser to make the magic happens."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"What's going on inside the model?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"The complete model is divided in two parts : Style Extractor and Transformer Model.",r.a.createElement("br",null),r.a.createElement("b",null,"The Style Extractor")," is responsible for extracting the style representation from the given image. Passing the content and style images through this gives us their respective style feature representation. Then their weighted average is taken to incorporate varying degree of stylization strength in the model.",r.a.createElement("br",null),r.a.createElement("b",null,"The Transformer")," is responsible for generating the target image for a given style features. It is trained to generate images that have similar content structure as content image but since it uses the syle image features when the model creates the image it is forced to use the style features giving us the styled image as the output.",r.a.createElement("br",null),"I have tried creating a basic implementation of arbitrary style transfer using AdaIN in a jupyter-notebook for understanding. It gives a rough idea of the working so that you can get a clear idea.",r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"primary"},r.a.createElement("a",{href:"https://github.com/rahul-jha98/StyleTransfer_using_AdaIN",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none",color:"inherit"}},"The repo can be found here."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"Is my data safe?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"If you have used the application you might have noticed the slight lag in UI when the actual stylization is going on. Well, it happens because the whole model is running right in your browser using your CPU for the task. Thus there is no need to send any image to any server for processing and hence your data never leaves your system."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"What is the difference between lite and normal mode?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"While lite mode requires download of model of size around 10MB, normal mode downloads a model of size 45 MB. The ",r.a.createElement("b",null,"normal mode")," uses the original implementation from paper i.e. Inception-v3 model for style extraction and plain convolution layers based transformer model. The ",r.a.createElement("b",null,"lite mode")," on the other hand uses the light weight MobileNet-v2 for extracting styles and depthwise separable convolution layer for the transformer network."))))},z=a(31),T=a(32),D=a(47),A=a(46),B=a(5),_=a(183),I=a(45),H=a.n(I),F=a(180),L=a(182),W=a(189),G=a(193),U=a(194),V=a(181),J=a(188),q=a(192),K=Object(B.a)((function(e){return{root:{height:6,color:e.palette.secondary.light},thumb:{height:18,width:18,marginTop:-6,marginLeft:-9},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{color:"dark"===e.palette.type?"#3f3f3f":"#cfd8dc",height:6,borderRadius:4},rail:{color:"dark"===e.palette.type?"#3f3f3f":"#cfd8dc",height:6,borderRadius:4}}}))(q.a),Q=function(e){return r.a.createElement(K,Object.assign({onChange:e.sliderChangeHandler},e,{style:{marginTop:2},value:e.value}))},Y=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).handleMenu=function(e){"webcam"!==e.target.value&&"upload"!==e.target.value&&n.setState({image:e.target.value,imageSrc:"./content/"+e.target.value+".jpg"})},n.onSliderValueChange=function(e,t){n.setState({imgHeight:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.state={image:"stata",imageSrc:"./content/stata.jpg",imgHeight:250,menulist:[{value:"webcam",name:"Take a picture"},{value:"upload",name:"Upload a picture"},{value:"chicago",name:"Chicago"},{value:"diana",name:"Diana"},{value:"golden_gate",name:"Golden Gate"},{value:"stata",name:"Stata"},{value:"statue_of_liberty",name:"Statue of Liberty"}],anchorEl:null},n}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"selector-container"},r.a.createElement("img",{ref:this.props.refObject,className:"center",src:this.state.imageSrc,height:this.state.imgHeight,alt:"content_img"}),r.a.createElement("br",null),r.a.createElement("div",{className:e.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px"}},"Content Image size"),r.a.createElement(H.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(F.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"A large content image leads to a more detailed output at the cost of increased processing time."))),r.a.createElement(Q,{className:e.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.imgHeight,min:250,max:400,step:1,disabled:this.props.isDisabled}),r.a.createElement(V.a,{variant:"outlined",className:e.formControl,disabled:this.props.isDisabled},r.a.createElement(G.a,{id:"content-label",color:"secondary"},"Content Image"),r.a.createElement(J.a,{labelId:"content-label",id:"content-select",value:this.state.image,onChange:this.handleMenu,label:"Content Image",color:"secondary"},this.state.menulist.map((function(e){return r.a.createElement(U.a,{key:e.value,value:e.value},e.name)})))))}}]),a}(r.a.Component),X=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(Y),Z=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).handleMenu=function(e){"random"!==e.target.value&&"upload"!==e.target.value&&n.setState({image:e.target.value,imageSrc:"./style/"+e.target.value+".jpg"})},n.onSliderValueChange=function(e,t){n.setState({imgHeight:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.state={image:"seaport",imageSrc:"./style/seaport.jpg",imgHeight:250,menulist:[{value:"upload",name:"Upload a picture"},{value:"random",name:"Random image from wikiart.org"},{value:"clouds",name:"Clouds"},{value:"towers",name:"Towers"},{value:"sketch",name:"Sketch"},{value:"udnie",name:"Udnie"},{value:"seaport",name:"Seaport"}],anchorEl:null},n}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"selector-container"},r.a.createElement("img",{ref:this.props.refObject,className:"center",src:this.state.imageSrc,height:this.state.imgHeight,alt:"content_img"}),r.a.createElement("br",null),r.a.createElement("div",{className:e.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px"}},"Style Image size"),r.a.createElement(H.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(F.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"Changing the size of style image affects the texture seen by the network thus changing the pattern used in generated image."))),r.a.createElement(Q,{className:e.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.imgHeight,min:100,max:400,step:1,disabled:this.props.isDisabled}),r.a.createElement(V.a,{variant:"outlined",className:e.formControl,disabled:this.props.isDisabled},r.a.createElement(G.a,{id:"content-label",color:"secondary"},"Style Image"),r.a.createElement(J.a,{labelId:"content-label",id:"content-select",value:this.state.image,onChange:this.handleMenu,color:"secondary",label:"Style Image"},this.state.menulist.map((function(e){return r.a.createElement(U.a,{key:e.value,value:e.value},e.name)})))))}}]),a}(r.a.Component),$=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(Z),ee=(a(120),a(56)),te=a.n(ee),ae=a(73),ne=a(17);ne.a.set("WEBGL_PACK",!1);var re=function(){function e(t,a){Object(z.a)(this,e),this.path_style_network=t,this.path_transformer_network=a}return Object(T.a)(e,[{key:"donwloadModel",value:function(e,t){var a=this;Promise.all([this.loadModelFromPath(this.path_style_network),this.loadModelFromPath(this.path_transformer_network)]).then((function(t){var n=Object(h.a)(t,2),r=n[0],o=n[1];a.styleNetwork=r,a.transformerNetwork=o,e()})).catch((function(e){t()}))}},{key:"loadModelFromPath",value:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.c(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setValueAccessors",value:function(e,t,a){this.contentRef=e,this.styleRef=t,this.outputRef=a}},{key:"generateStyledImage",value:function(){var e=Object(ae.a)(te.a.mark((function e(t,a,n){var r,o,l,i,s=this;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.d();case 2:return e.next=4,ne.d();case 4:return e.next=6,ne.d();case 6:return e.prev=6,e.next=9,ne.f((function(){return s.styleNetwork.predict(ne.b.fromPixels(s.styleRef.current).toFloat().div(ne.e(255)).expandDims())}));case 9:if(r=e.sent,1===t){e.next=20;break}return e.next=13,ne.f((function(){return s.styleNetwork.predict(ne.b.fromPixels(s.contentRef.current).toFloat().div(ne.e(255)).expandDims())}));case 13:return o=e.sent,l=r,e.next=17,ne.f((function(){var e=l.mul(ne.e(t)),a=o.mul(ne.e(1-t));return e.addStrict(a)}));case 17:r=e.sent,o.dispose(),l.dispose();case 20:return e.next=22,ne.f((function(){return s.transformerNetwork.predict([ne.b.fromPixels(s.contentRef.current).toFloat().div(ne.e(255)).expandDims(),r]).squeeze()}));case 22:return i=e.sent,e.next=25,ne.d();case 25:return a(this.contentRef.current.src),e.next=28,ne.b.toPixels(i,this.outputRef.current);case 28:r.dispose(),i.dispose(),e.next=35;break;case 32:e.prev=32,e.t0=e.catch(6),n();case 35:case"end":return e.stop()}}),e,this,[[6,32]])})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),oe=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).onSliderValueChange=function(e,t){n.setState({strength:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.onBeginStylization=function(){n.setState({isDisabled:!0}),n.resetAndBegin()},n.refreshPage=function(){window.location.reload()},n.resetAndBegin=function(){n.setState({contentSrc:null,loading:0,stepper:0,height:n.contentRef.current.height,width:n.contentRef.current.width},(function(){n.styleTranferModel.generateStyledImage(n.state.strength,(function(e){n.setState({stepper:-1,contentSrc:e,loading:1,isDisabled:!1})}),(function(){n.setState({snackbarMessage:"Error while generating image",isDisabled:!1})}))}))},n.state={isDisabled:!1,strength:1,anchorEl:null,contentSrc:null,height:300,loading:-2},n.contentRef=r.a.createRef(),n.styleRef=r.a.createRef(),n.outputRef=r.a.createRef(),n.styleTranferModel=new re(n.props.styleNetPath,n.props.transferNetPath),n.styleTranferModel.donwloadModel((function(){n.setState({loading:-1})}),(function(){n.setState({snackbarMessage:"Couldn't Donwload Model"})})),n.styleTranferModel.setValueAccessors(n.contentRef,n.styleRef,n.outputRef),n}return Object(T.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:"container expanded-content"},r.a.createElement("div",{className:"inputs"},r.a.createElement(X,{isDisabled:this.state.isDisabled,refObject:this.contentRef}),r.a.createElement($,{isDisabled:this.state.isDisabled,refObject:this.styleRef})),r.a.createElement("br",null),r.a.createElement("div",{className:"outputs"},r.a.createElement("div",{className:"selector-container"},r.a.createElement("div",{className:t.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},this.state.loading>-1?0!==this.state.loading?r.a.createElement("canvas",{ref:this.outputRef,className:"center margin",height:this.state.height,alt:"content_img"}):r.a.createElement(L.a,{className:"center margin",variant:"rect",width:this.state.width,height:this.state.height}):null,r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px",marginLeft:5}},"Stylization Strength"),r.a.createElement(H.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(F.a,{id:"mouse-over-popover",className:t.popover,classes:{paper:t.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"Stylization strength is the degree of stylization that is applied. Going left inclines the output closer to the content image while going right deviates it more towards the style image.")),r.a.createElement("br",null),r.a.createElement(Q,{className:t.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.strength,min:0,max:1,step:.01,disabled:this.state.isDisabled}),r.a.createElement("br",null),r.a.createElement(_.a,{className:t.formControl,variant:"contained",size:"large",color:"secondary",onClick:this.onBeginStylization,disabled:this.state.isDisabled||-2===this.state.loading},-2===this.state.loading?"Downloading Model":"Begin Stylization"),r.a.createElement("br",null)))),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackbarMessage,autoHideDuration:3e3,onClose:function(){return e.setState({snackbarMessage:""})},message:this.state.snackbarMessage,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{color:"secondary",size:"small",onClick:this.refreshPage},"Reload"))}))}}]),a}(r.a.Component),le=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:0,marginRight:0,width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(oe),ie=(a(133),a(92)),se=a.n(ie),ce=a(93),me=a.n(ce),ue=Object(d.a)((function(e){return{root:{backgroundColor:"dark"===e.palette.type?"#424242":"#eeeeee",padding:"32px 8px"}}})),he=function(e){var t=ue();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{color:"textSecondary"},"Made with ",r.a.createElement(se.a,{fontSize:"small",style:{color:"#b71c1c",marginBottom:"-3px"}})," by ",r.a.createElement("b",null,"Rahul Jha")),r.a.createElement("a",{href:"https://github.com/rahul-jha98",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none"}},r.a.createElement(x.a,{className:"fa",color:"action",fontSize:"small"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/rahul-jha-84a204178/",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none"}},r.a.createElement(me.a,{className:"fa",color:"action",fontSize:"small"}))))},de=Object(c.a)({palette:{secondary:{main:"#0091ea"}}}),ge=function(e){return r.a.createElement(m.a,{theme:de},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(R,null),r.a.createElement("div",{className:"content-area"},r.a.createElement(le,{styleNetPath:"./models/lite/style/model.json",transferNetPath:"./models/lite/transformer/model.json"}),r.a.createElement(he,null))))},pe=Object(c.a)({palette:{type:"dark",primary:{main:"#5768c9"},secondary:{main:"#0091ea"}}}),fe=function(e){return r.a.createElement(m.a,{theme:pe},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(R,null),r.a.createElement("div",{className:"content-area"},r.a.createElement(le,{styleNetPath:"./models/pro/style/model.json",transferNetPath:"./models/lite/transformer/model.json"}),r.a.createElement(he,null))))},ve=a(186),Ee=a(187),be=a(94),ye=a.n(be),we=(a(134),Object(d.a)((function(e){return{root:{flexGrow:1,padding:"16px 0px",minHeight:"50vh",height:"100%",justifyContent:"middle"},paper:{padding:e.spacing(1),borderRadius:10},button:{margin:"20px 0"}}}))),xe=function(e){var t=we();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{className:"logoimg",src:ye.a,alt:"logo"})),r.a.createElement("div",{className:t.root},r.a.createElement(ve.a,{container:!0,spacing:2},r.a.createElement(ve.a,{item:!0,xs:12,md:6},r.a.createElement(i.b,{to:"/lite",replace:!0,style:{textDecoration:"none"}},r.a.createElement(Ee.a,{raised:!0,elvation:6,className:t.paper},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Lite Mode"),r.a.createElement(y.a,{variant:"body1",color:"textSecondary"},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Use lightweight model (downlaod size 10MB)"),r.a.createElement("li",null,"Slightly less detailed output compared to pro mode"),r.a.createElement("li",null,"Faster output generation time"),r.a.createElement("li",null,"Much less intensive compute heavy"))),r.a.createElement(_.a,{className:t.button,variant:"outlined",color:"primary"},"Go To Lite Mode")))),r.a.createElement(ve.a,{item:!0,xs:12,md:6},r.a.createElement(i.b,{to:"/pro",replace:!0,style:{textDecoration:"none"}},r.a.createElement(Ee.a,{raised:!0,elvation:6,className:t.paper},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Pro Mode"),r.a.createElement(y.a,{variant:"body1",color:"textSecondary"},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Use superior model (download size 40MB)"),r.a.createElement("li",null,"Much more refined output for given style image"),r.a.createElement("li",null,"Slower output generation"),r.a.createElement("li",null,"Quite intensive task for CPU"))),r.a.createElement(_.a,{className:t.button,variant:"outlined",color:"primary"},"Go To Pro Mode")))))),r.a.createElement(he,null)))};a(136);var Se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/Artistify.ai"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:xe}),r.a.createElement(s.a,{path:"/lite",component:ge}),r.a.createElement(s.a,{path:"/pro",component:fe}))))};l.a.render(r.a.createElement(Se,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a.p+"static/media/logotext.2fee81d4.svg"},94:function(e,t,a){e.exports=a.p+"static/media/Logo.1ba2315b.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.175edcb6.chunk.js.map