(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},107:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(12),i=n.n(s),l=(n(101),n(53)),o=n(45),c=n(13),u=n(16),p=n(14),m=n(8),h=n(15),f=(n(107),n(20)),v=n.n(f),d=function(e){function t(e){var n;Object(c.a)(this,t),console.log("<SoundMachineInstrument>constructor",e.key);var a={C3:e.samples[0],"C#3":e.samples[1],D3:e.samples[2]};return(n=Object(p.a)(this,Object(m.a)(t).call(this,a,{baseUrl:e.baseUrl||"./audio/"+e.key+"/"}))).key=e.key,n.label=e.label,n}return Object(h.a)(t,e),t}(f.Sampler),b={ACCENT_1:0,ACCENT_2:1,ACCENT_3:2},g={TABLA:"tabla",ELECTRO_KIT:"electrokit"},E=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this))).state={},n.lib={},n.currentInstrument=void 0;var a=new d({key:g.TABLA,label:"Tabla",samples:["dha-slide.wav","dhin-slide.wav","tin.wav"]}).toMaster();n.lib[a.key]=a;var r=new d({key:g.ELECTRO_KIT,label:"Electronic Kit",samples:["Kick.wav","HiHat.wav","Snare.wav"]}).toMaster();return n.lib[r.key]=r,n.setInstrument(e),console.log("<InstrumentLib>done constructor"),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setInstrument",value:function(e){if(void 0===this.lib[e])throw new Error("InstrumentLib has no such instrument with given key: "+e);this.currentInstrument=e}},{key:"getInstrument",value:function(){if(void 0===this.lib[this.currentInstrument])throw new Error("There is no such instrument in InstrumentLib: "+this.currentInstrument);return this.lib[this.currentInstrument]}}]),t}(a.Component),y=n(177),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={radius:50,height:150},n.myRef=r.a.createRef(),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setActive",value:function(e){if(this.lastEl&&this.lastEl.classList.remove("active"),e<this.props.beats){var t=this.refs["el"+e];t.classList.add("active"),this.lastEl=t}}},{key:"componentDidUpdate",value:function(e,t){for(var n=this.myRef.current.offsetWidth,a=2*Math.PI/this.props.beats,r=0;r<this.props.beats;r++){var s=this.state.radius*Math.sin(a*r),i=-this.state.radius*Math.cos(a*r);this.refs["el"+r].style.position="absolute",this.refs["el"+r].style.left=n/2-20+s+"px",this.refs["el"+r].style.top=50+i+"px"}}},{key:"renderCells",value:function(e){for(var t=[],n=0;n<this.props.beats;n++)t.push(r.a.createElement("div",{ref:"el"+n},n+1));return t}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement("div",{ref:this.myRef,className:"SimpleVis",style:{height:this.state.height}},this.renderCells()))}}]),t}(a.Component),C=k;k.defaultProps={beats:4};var S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).accentNotes=["C3","C#3","D3"],n.instrumentLib=void 0,n.currentBeat=0,n.beatsPerStep=4,n.score=["C3","C#3","C#3","C#3"],n.state={isPlaying:!1},n.accents=[b.ACCENT_1],n.samples={},n.instruments={},n.part=null,n.repeat=function(e){var t=n.currentBeat++%n.beatsPerStep,a=n.score[t];n.instrumentLib.getInstrument().triggerAttackRelease(a,"4n",e);var r=n.updateVis;v.a.Draw.schedule(function(){return r(t)},e)},n.setBpm=function(e){v.a.Transport.bpm.value=e},n.setBeatsPerStep=function(e){for(n.beatsPerStep=e;n.score.length>e;)n.score.pop();for(;n.score.length<e;)n.score.push(b.ACCENT_1);v.a.Transport.timeSignature=[e,4],n.setLoopEnd(n.loopEndEvent.barsAmount),n.setState({beatsPerStep:e})},n.updateVis=function(e){n.refs.vis.setActive(e)},n.playNote=function(e,t){n.instrumentLib.getInstrument().triggerAttackRelease(t,"4n",e)},n.getBpm=function(){return v.a.Transport.bpm.value},n.instrumentLib=new E(n.props.instrument),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onBufferError",value:function(){throw new Error("Some buffers weren't found")}},{key:"componentDidMount",value:function(){var e=this;(new v.a.Synth).toMaster().triggerAttackRelease("A2"),v.a.Buffer.on("error",function(){return e.onBufferError()}),v.a.context.latencyHint="playback";var t=this.repeat;v.a.Transport.scheduleRepeat(function(e){return t(e)},"4n",0),this.loopEndEvent=new v.a.Event(function(e,t){t()},this.props.onLoopEnd),this.loopEndEvent.loop=!0}},{key:"setInstrument",value:function(e){this.instrumentLib.setInstrument(e)}},{key:"getCurrentInstrumentLabel",value:function(){return this.instrumentLib.getInstrument().label}},{key:"setLoopEnd",value:function(e){this.loopEndEvent.cancel(),this.loopEndEvent.barsAmount=e,this.loopEndEvent.loopEnd=this.loopEndEvent.barsAmount+"m",this.loopEndEvent.loop=!0,this.loopEndEvent.start(this.loopEndEvent.barsAmount+"m")}},{key:"setAccents",value:function(e){this.accents=e;for(var t=0;t<this.score.length;t++){var n=this.accentNotes[b.ACCENT_2];void 0!==e[t]&&e[t]===b.ACCENT_1?n=this.accentNotes[b.ACCENT_1]:void 0!==e[t]&&e[t]===b.ACCENT_3&&(n=this.accentNotes[b.ACCENT_3]),this.score[t]=n}}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",null,"Sound is ",!0===this.state.isPlaying?"playing":"stopped"),r.a.createElement(C,{ref:"vis",beats:this.state.beatsPerStep}))}},{key:"stop",value:function(){this.setState({isPlaying:!1}),this.currentBeat=0,v.a.Transport.stop()}},{key:"start",value:function(){this.setState({isPlaying:!0}),v.a.Transport.start("+0.1")}}]),t}(a.Component),P=S;S.defaultProps={beatsPerStep:4,onLoopEnd:null};var B={BY_BAR:"by_bar",BY_TIME:"by_time"},O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{className:"SimpleProgress"},r.a.createElement("div",{className:"bar",style:{width:this.props.value+"%",display:"block"}}))}}]),t}(a.Component),A={padTime:function(e){return e<10?"0"+e:e},formatTime:function(e){var t=new Date(0,0,0,0,0,0,0);t.setSeconds(e);var n="";return 0!==t.getMinutes()?(n+=t.getMinutes(),n+=":",n+=""+A.padTime(t.getSeconds())):n+=t.getSeconds(),n}},j=A,T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={bars:[],stepProgress:0},n.timer={ref:null,startTime:null},n.stepsCounter=0,n.stepProgressUpdateInterval=50,n.planChanged=function(){console.log("<Planner>planChanged"),n.props.onChange&&n.props.onChange()},n.barRender=function(e){var t=n.state.currentStep===e.step?"current-step":"";return r.a.createElement("div",{onClick:function(){return n.onStepClick(e.step)},className:"step "+t,key:"key_"+e.bpm},void 0!==e.segmentDuration?j.formatTime(e.segmentDuration.toFixed(0))+" ":e.end+" bars ","at ",e.bpm.toFixed(0))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makePlan",value:function(e){var t=e.bpmRange[0],n=e.bpmRange[1],a=[],r=t;if(e.playMode===B.BY_BAR)for(;r<=n;){var s={bpm:r,end:e.interval};a.push(s),r+=e.bpmStep}else for(;r<=n;){var i={time:0*e.interval,start:0*e.interval,end:0*e.interval+e.interval,bpm:r};a.push(i),r+=e.bpmStep}return a}},{key:"setPlan",value:function(e){var t=this,n=this.makePlan(e),a=[],r=0,s=e.playMode;if(e.playMode===B.BY_BAR)for(var i=0;i<n.length;i++){var l={bpm:n[i].bpm,end:n[i].end,step:this.stepsCounter++};r+=60/n[i].bpm*e.beatsPerStep*n[i].end,a.push(l)}else for(i=0;i<n.length;i++){var o={time:n[i].time,timeEnd:n[i].end,segmentDuration:n[i].end-n[i].time,startTimeFormatted:j.formatTime(n[i].start),endTimeFormatted:j.formatTime(n[i].end),bpm:n[i].bpm,step:this.stepsCounter++};r+=n[i].end,a.push(o)}this.stepsCounter=0,this.setState(function(e){return{totalPlanTime:r,currentStep:0,bars:a,playMode:s}},function(){return t.planChanged()})}},{key:"stop",value:function(){this.timer&&(clearInterval(this.timer.ref),this.timer=void 0),this.stepProgressUpdateTimer&&(clearInterval(this.stepProgressUpdateTimer),this.stepProgressUpdateTimer=void 0),this.resetStep()}},{key:"onInterval",value:function(){if(!this.props.lockBpm){var e=this.state.currentStep;if(e+1>=this.state.bars.length)return this.timer&&(clearInterval(this.timer.ref),this.time=void 0),void this.props.onAdvance(null);this.setState({currentStep:e+1}),this.props.onAdvance(this.state.bars[this.state.currentStep])}}},{key:"start",value:function(){var e=this;if(this.timer&&(clearInterval(this.timer.ref),this.timer.ref=void 0,this.timer.startTime=null,this.resetStep()),this.state.playMode===B.BY_TIME){var t=1e3*(this.state.bars[this.state.currentStep].timeEnd-this.state.bars[this.state.currentStep].time),n=this.onInterval.bind(this);this.timer={ref:setInterval(n,t),startTime:new Date}}this.stepProgressUpdateTimer||(this.stepProgressUpdateTimer=setInterval(function(){return e.updateStepProgress()},this.stepProgressUpdateInterval))}},{key:"setProgressEvent",value:function(e){this.event=e}},{key:"updateStepProgress",value:function(){if(!this.props.lockBpm){var e=this.getCurrentBar(),t=0;if(this.state.playMode===B.BY_BAR)t=this.event.progress;else t=(Date.now()-this.timer.startTime.getTime()-e.segmentDuration*e.step*1e3)/e.segmentDuration/1e3;t>1&&(t=1),this.setState({stepProgress:t})}}},{key:"clear",value:function(){this.stepsCounter=0,this.setState({bars:[],currentStep:0}),this.planChanged()}},{key:"resetStep",value:function(){this.setState({currentStep:0}),this.props.onAdvance(this.state.bars[0])}},{key:"getCurrentBar",value:function(){if(this.state.currentStep>=this.state.bars.length)throw new Error("Trying to get step that doesn't exists");return this.state.bars[this.state.currentStep]}},{key:"onStepClick",value:function(e){var t=this;this.setState({currentStep:e},function(){return t.props.onAdvance(t.state.bars[t.state.currentStep])})}},{key:"render",value:function(){var e=this;return 0===this.state.bars.length?r.a.createElement("div",null,"No plan"):r.a.createElement(y.a,{className:"Planner"},r.a.createElement(O,{value:100*this.state.stepProgress}),r.a.createElement("div",{style:this.props.lockBpm?{opacity:.5}:{}},this.state.bars.map(function(t){return e.barRender(t)})),r.a.createElement("div",null,"Total time: ",j.formatTime(this.state.totalPlanTime)))}}]),t}(a.Component),M=T;T.defaultProps={playMode:B.BY_BAR,currentStep:0};n(111),n(113);var I=n(184),w=n(185),N=n(168),R=n(191),_=n(187),L=n(188),D=n(189),x=n(54),Y=n(33),V=n(178),U=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(V.a,{onClick:this.onBadgeClick,className:"d-i"},this.state.value)),r.a.createElement("div",{style:{height:"30px"}},r.a.createElement("div",null,Object(x.a)(Object(m.a)(t.prototype),"render",this).call(this))))}},{key:"onBadgeClick",value:function(){}}]),t}(Y.b),K=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,Object(x.a)(Object(m.a)(t.prototype),"render",this).call(this),r.a.createElement(V.a,{onClick:this.onBadgeClick,className:"d-i"},this.state.bounds[0]," - ",this.state.bounds[1]))}}]),t}(Y.a),F=n(95),J=n(179),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={bars:[]},n.accents=[b.ACCENT_1,b.ACCENT_2,b.ACCENT_3],n.renderCells=function(e){return e.map(function(e,t){return r.a.createElement(N.a,{size:"sm",color:n.getBtnColor(e),key:"barkey_"+t,onClick:function(){return n.handleCellClick(t)}},t+1)})},n.state.bars=e.defaultValue,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"prepareBars_O",value:function(e){for(var t=this.getValue(),n=[],a=0;a<e.length;a++)n.push(void 0!==t[a]?t[a]:e[a]);return n}},{key:"setBeatsAmount_O",value:function(e){var t=this.prepareBars(e);this.setState({bars:Object(F.a)(t)},this.props.onAfterChange)}},{key:"setAccents",value:function(e,t){this.setState({bars:e},this.props.onAfterChange)}},{key:"handleCellClick",value:function(e){var t=this.state.bars[e],n=this.accents[(t+1)%3];this.state.bars[e]=n,this.forceUpdate()}},{key:"getAccents",value:function(){return this.state.bars}},{key:"getValue_o",value:function(){return this.state.bars}},{key:"getBtnColor",value:function(e){var t;switch(e){case b.ACCENT_2:t="secondary";break;case b.ACCENT_3:t="warning";break;default:t="primary"}return t}},{key:"render",value:function(){var e=this.props.onAfterChange;return r.a.createElement(J.a,{onClick:e},this.renderCells(this.state.bars))}}]),t}(a.Component),H=n(44),W=n(190),G=n(180),$=n(181),q=n(182),Q=n(183),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},n.state={modal:!1},n.toggle=n.toggle.bind(Object(H.a)(Object(H.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"handleSave",value:function(){var e=this.state.title,t=this.props.preset;e&&e.length>0&&(this.props.onSave(e,t),this.toggle())}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{size:"sm",variant:"primary",onClick:this.toggle},"Save Preset"),r.a.createElement(W.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(G.a,{toggle:this.toggle},"Save Preset"),r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:function(t){return e.setState({title:t.target.value})}}),r.a.createElement("div",null,JSON.stringify(this.props.preset))),r.a.createElement(Q.a,null,r.a.createElement(N.a,{color:"primary",onClick:function(){return e.handleSave()}},"Save")," ",r.a.createElement(N.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={showDelete:[]},n.userPresets=n.props.cookies.get("userPresets"),n.state.showDelete=n.userPresets?Array(n.userPresets.length).fill(!1):[],n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onPresetClick",value:function(e){this.props.onSelect(e)}},{key:"onSavePreset",value:function(e,t){var n=Object(o.a)({title:e},t),a=this.props.cookies.get("userPresets");a||(a=[]);for(var r=-1,s=0;s<a.length;s++)a[s].title.toLowerCase()===e.toLowerCase()&&(r=s);r<0?a.push(n):a[r]=n,this.saveInCookie(a)}},{key:"saveInCookie",value:function(e){this.props.cookies.set("userPresets",JSON.stringify(e),{path:"/"}),this.userPresets=e}},{key:"showDeleteBtn",value:function(e,t){var n=Object(o.a)({},this.state);n[t]=!0,this.setState({showDelete:n})}},{key:"hideDeleteBtn",value:function(e){this.setState({showDelete:!1})}},{key:"onPresetDelete",value:function(e){this.userPresets.splice(e,1),this.saveInCookie(this.userPresets)}},{key:"render",value:function(){var e=this,t=this.props.cookies.cookies.userPresets?JSON.parse(this.props.cookies.cookies.userPresets):[];return r.a.createElement(y.a,{className:"PresetsManager"},r.a.createElement(I.a,null,this.props.presets.map(function(t,n){return r.a.createElement(w.a,{className:"preset",onClick:function(){return e.onPresetClick(t)},key:"preset_"+n},t.title)})),r.a.createElement(I.a,null,"my presets:"),r.a.createElement(I.a,null,t.map(function(t,n){return r.a.createElement(w.a,{className:"preset",onMouseEnter:function(t){return e.showDeleteBtn(t,n)},onMouseLeave:function(t){return e.hideDeleteBtn(t,n)},onClick:function(){return e.onPresetClick(t)},key:"preset_"+n},t.title,r.a.createElement("div",{class:"x",style:{visibility:e.state.showDelete[n]?"":"hidden"},onClick:function(){return e.onPresetDelete(n)}},"x"))})),r.a.createElement(I.a,null,r.a.createElement(X,{preset:this.props.preset,onSave:function(t,n){return e.onSavePreset(t,n)}})))}}]),t}(a.Component),ee=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{className:"pane "+this.props.className},r.a.createElement(I.a,{className:"pane-title"},this.props.title),r.a.createElement(I.a,{className:"pane-body"},this.props.children))}}]),t}(a.Component),te=ee;ee.defaultProps={title:"title",children:[],className:""};var ne=n(186),ae=n(94),re=n.n(ae),se=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={value:0,delta:1,regression:void 0};var a=[[1,n.props.min],[100,n.props.max]];n.state.regression=re.a.power(a,{precision:10}),n.marks={};for(var r=0;r<=100;r+=100/(n.props.marksNum-1))n.marks[r]=n.makeMark(r);return n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makeMark",value:function(e){return{label:this.props.formatter(Math.floor(this.state.regression.predict(e)[1])),style:this.props.marksStyle}}},{key:"onChange",value:function(e){var t=Math.floor(this.state.regression.predict(e)[1]);this.setState({value:t}),this.props.onChange(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(V.a,{onClick:this.onBadgeClick,className:"d-i"},this.props.formatter(this.state.value))),r.a.createElement(Y.b,{style:{height:"45px"},onChange:function(t){return e.onChange(t)},min:1,max:100,step:.2,marks:this.marks}))}}]),t}(a.Component),ie=se;se.defaultProps={marksNum:6,marksStyle:{color:"#ccc"},formatter:function(e){return e}};var le=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={playMode:B.BY_TIME,bpmStep:10,bpmStepDropdownOpen:!1,byTimeInterval:5,byBarInterval:2},n.state.playMode=e.playMode,e.playMode===B.BY_BAR?n.state.byBarInterval=e.interval:n.state.byTimeInterval=e.interval,n.state.bpmStep=e.bpmStep,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onModeChange",value:function(e){this.setState({playMode:e},this.props.onAfterChange)}},{key:"onBpmStepChange",value:function(){this.setState(function(e){return{bpmStepDropdownOpen:!e.bpmStepDropdownOpen}})}},{key:"onBpmStepSelect",value:function(e){this.setState({bpmStep:e},this.props.onAfterChange)}},{key:"getValue",value:function(){return{playMode:this.state.playMode,interval:this.state.playMode===B.BY_BAR?this.state.byBarInterval:this.state.byTimeInterval,bpmStep:this.state.bpmStep}}},{key:"setValue",value:function(e){this.setState({playMode:e.playMode,bpmStep:e.bpmStep,byBarInterval:e.playMode===B.BY_BAR?e.interval:this.state.byBarInterval,byTimeInterval:e.playMode===B.BY_TIME?e.interval:this.state.byTimeInterval},this.props.onAfterChange)}},{key:"onTimeIntervalChange",value:function(e){this.setState({byTimeInterval:e},this.props.onAfterChange)}},{key:"onBarIntervalChange",value:function(e){this.setState({byBarInterval:e},this.props.onAfterChange)}},{key:"render",value:function(){var e=this;return r.a.createElement(te,{title:"Mode"},r.a.createElement(J.a,null,r.a.createElement(N.a,{onClick:function(){return e.onModeChange(B.BY_BAR)},active:this.state.playMode===B.BY_BAR},"By bar"),r.a.createElement(N.a,{onClick:function(){return e.onModeChange(B.BY_TIME)},active:this.state.playMode===B.BY_TIME},"By time")),r.a.createElement(ne.a,{isOpen:this.state.playMode===B.BY_BAR},r.a.createElement("div",null,"Increase speed every",r.a.createElement(ie,{onChange:function(t){return e.onBarIntervalChange(t)},min:1,max:300}),"bars")),r.a.createElement(ne.a,{isOpen:this.state.playMode===B.BY_TIME},r.a.createElement("div",null,"Increase speed every",r.a.createElement(ie,{onChange:function(t){return e.onTimeIntervalChange(t)},min:1,max:600,formatter:j.formatTime}),"minutes")),"increase speed by",r.a.createElement(R.a,{bsSize:"sm",style:{margin:"0px 5px"},isOpen:this.state.bpmStepDropdownOpen,toggle:function(){return e.onBpmStepChange()}},r.a.createElement(_.a,{caret:!0,size:"sm"},this.state.bpmStep),r.a.createElement(L.a,null,r.a.createElement(D.a,{onClick:function(){e.onBpmStepSelect(5)}},"5"),r.a.createElement(D.a,{onClick:function(){e.onBpmStepSelect(10)}},"10"),r.a.createElement(D.a,{onClick:function(){e.onBpmStepSelect(20)}},"20"),r.a.createElement(D.a,{onClick:function(){e.onBpmStepSelect(30)}},"30"),r.a.createElement(D.a,{onClick:function(){e.onBpmStepSelect(50)}},"50"))),"bpm")}}]),t}(a.Component),oe=le;le.defaultProps={onAfterChange:null};var ce=[{title:"4 beats every 4 bars",beatsPerStep:4,playMode:B.BY_BAR,interval:4,bpmStep:20,bpmRange:[100,400],accents:[0,1,2,1]},{title:"5 beats, every 1min, electro",beatsPerStep:5,bpmRange:[200,400],accents:[0,1,0,0,2],playMode:B.BY_TIME,instrument:g.ELECTRO_KIT,interval:60,bpmStep:10},{title:"Jhaptal tabla",instrument:g.TABLA,beatsPerStep:10,bpmRange:[200,400],accents:[0,1,0,0,1,2,1,0,0,1],playMode:B.BY_TIME,interval:300,bpmStep:10}],ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).timer={timerRef:null,startTime:null},n.state={currentBpm:60,instrument:g.ELECTRO_KIT,instrumentDropdownOpen:!1,instrumentDropdownLabel:"Electro kit",cycleDropdownOpen:!1,lockBpm:!1},n.onBeatsPerStepChange=function(){var e=n.getUiState().beatsPerStep;if(e!==n.refs.sm.beatsPerStep){for(var t=n.refs.barManager.getAccents();t.length>e;)t.pop();for(;t.length<e;)t.push(b.ACCENT_2);n.refs.sm.setBeatsPerStep(e),n.refs.barManager.setAccents(t),n.setState({beatsPerStep:e})}},n.onPlanAdvanced=function(e){e?(console.log("<App>onPlanAdvanced() new step:",e),n.setBpm(e.bpm)):(n.refs.planner.stop(),n.refs.sm.stop())},n.setBpm=function(e){n.setState({currentBpm:e}),n.refs.sm.setBpm(e)},n.onPlanChanged=function(){console.log("<App>onPlanChanged");var e=n.refs.planner.getCurrentBar();n.refs.sm.setLoopEnd(e.end||!1),e&&n.setBpm(e.bpm),n.refs.sm.state.isPlaying&&n.refs.planner.start()},n.handleStartStop=function(){!0===n.refs.sm.state.isPlaying?(n.refs.planner.stop(),n.refs.sm.stop()):(n.refs.planner.start(),n.refs.sm.start())},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refs.planner.setPlan(this.getUiState()),this.refs.planner.setProgressEvent(this.refs.sm.loopEndEvent),this.refs.sm.setAccents(this.refs.barManager.getAccents())}},{key:"onInstrumentSelect",value:function(e){this.refs.sm.setInstrument(e);var t=this.refs.sm.getCurrentInstrumentLabel();console.log("setting new instrument. state.instrument",e),this.setState({instrument:e,instrumentDropdownLabel:t})}},{key:"renderCyclePane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"CYCLE"),r.a.createElement(I.a,null,r.a.createElement(w.a,{xs:3},"Beats per step"),r.a.createElement(w.a,null,r.a.createElement(U,{ref:"beatsPerStep",min:2,max:16,defaultValue:this.props.beatsPerStep,onAfterChange:function(){return e.onBeatsPerStepChange()}}))),r.a.createElement(I.a,null,r.a.createElement(w.a,{xs:3},"Accents"),r.a.createElement(w.a,null,r.a.createElement(z,{onAfterChange:function(){return e.onAccentsChange()},ref:"barManager",defaultValue:this.props.accents}))))}},{key:"renderTempoPane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"RANGE"),r.a.createElement(I.a,null,r.a.createElement(w.a,{xs:"3"},"BPM"),r.a.createElement(w.a,null,r.a.createElement(K,{ref:"bpmRange",min:30,max:600,defaultValue:[this.props.bpmRange[0],this.props.bpmRange[1]],pushable:!0,onAfterChange:function(){return e.onBpmRangeChange()}}))))}},{key:"renderPlaybackPane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"PLAYBACK"),r.a.createElement(I.a,null,r.a.createElement(w.a,{xs:"3"},"Instrument"),r.a.createElement(w.a,null,r.a.createElement(R.a,{isOpen:this.state.instrumentDropdownOpen,toggle:function(){return e.onInstrumentChange()}},r.a.createElement(_.a,{caret:!0},this.state.instrumentDropdownLabel),r.a.createElement(L.a,null,r.a.createElement(D.a,{onClick:function(){e.onInstrumentSelect(g.TABLA)}},"Tabla"),r.a.createElement(D.a,{onClick:function(){e.onInstrumentSelect(g.ELECTRO_KIT)}},"Electro Kit"))))))}},{key:"onModePanelChanged",value:function(){var e=this.getUiState();console.log("<App>onModePanelChanged",e),this.refs.planner.setPlan(e),e.playMode===B.BY_BAR&&this.refs.sm.setLoopEnd(e.bars)}},{key:"renderMidPane",value:function(){return r.a.createElement(y.a,null,r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderExamplesPane())),r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderVisPane())),r.a.createElement(I.a,null,r.a.createElement(w.a,null)))}},{key:"renderLeftPane",value:function(){var e=this;return r.a.createElement(y.a,null,r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderTempoPane())),r.a.createElement(I.a,null,r.a.createElement(w.a,null,r.a.createElement(oe,{ref:"modePanel",playMode:this.props.playMode,interval:this.props.interval,bpmStep:this.props.bpmStep,onAfterChange:function(){return e.onModePanelChanged()}}))),r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderPlaybackPane())),r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderCyclePane())))}},{key:"renderExamplesPane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"Presets"),r.a.createElement(Z,{ref:"presetsManager",preset:this.uiState,cookies:this.props.cookies,presets:ce,onSelect:function(t){return e.onPresetSelect(t)}}))}},{key:"renderVisPane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"Visualisation"),r.a.createElement(I.a,null,r.a.createElement(P,{ref:"sm",beatsPerStep:this.state.beatsPerStep,onLoopEnd:function(){return e.onLoopEnd()},instrument:this.state.instrument})))}},{key:"onPresetSelect",value:function(e){console.log("setting preset",e),this.refs.bpmRange.setState({bounds:[e.bpmRange[0],e.bpmRange[1]]}),this.refs.beatsPerStep.setState({value:e.beatsPerStep}),this.refs.sm.setBeatsPerStep(e.beatsPerStep),this.onInstrumentSelect(e.instrument||g.TABLA),this.refs.barManager.setAccents(e.accents,e.beatsPerStep),this.refs.modePanel.setValue(e)}},{key:"renderPlanPane",value:function(){var e=this;return r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"Plan"),r.a.createElement(I.a,null,r.a.createElement(M,{lockBpm:this.state.lockBpm,onChange:function(){return e.onPlanChanged()},onAdvance:function(t){return e.onPlanAdvanced(t)},ref:"planner"})))}},{key:"renderRightPane",value:function(){return r.a.createElement(y.a,null,r.a.createElement(I.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"pane"},r.a.createElement(I.a,{className:"pane-title"},"BPM"),r.a.createElement(I.a,{className:this.state.lockBpm?"locked":""},r.a.createElement(w.a,null," ",this.state.currentBpm.toFixed(0)))))),r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderPlanPane())))}},{key:"onLoopEnd",value:function(){this.getUiState().playMode===B.BY_BAR&&(console.log("onLoopEnd fetched"),this.refs.planner.onInterval())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{className:"app-container"},r.a.createElement(I.a,null,r.a.createElement(w.a,null,this.renderLeftPane()),r.a.createElement(w.a,null,this.renderMidPane()),r.a.createElement(w.a,null,this.renderRightPane())),r.a.createElement(I.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,{onClick:function(){return e.handleStartStop()},block:!0},"Start / Stop")),r.a.createElement(w.a,null,r.a.createElement(N.a,{onClick:function(){return e.onLockBpmBtn()}},"Lock BPM")))))}},{key:"onDebug",value:function(){this.refs.sm.onDebug()}},{key:"onLockBpmBtn",value:function(){this.setState({lockBpm:!this.state.lockBpm})}},{key:"onBpmRangeChange",value:function(){var e=this.getUiState();e.bpmRange[0]===this.props.bpmRange[0]&&e.bpmRange[1]===this.props.bpmRange[1]||(this.setState({bpmRange:e.bpmRange}),this.refs.planner.setPlan(e))}},{key:"onInstrumentChange",value:function(){this.setState(function(e){return{instrumentDropdownOpen:!e.instrumentDropdownOpen}})}},{key:"getUiState",value:function(){var e={bpmRange:this.refs.bpmRange.getValue(),beatsPerStep:this.refs.beatsPerStep.getValue(),accents:this.refs.barManager.getAccents(),instrument:this.state.instrument},t=this.refs.modePanel.getValue(),n=Object(o.a)({},e,t);return console.log("storing uiState",this.uiState),this.uiState=n,this.uiState.instrument=this.state.instrument,n}},{key:"onAccentsChange",value:function(){this.refs.sm.setAccents(this.refs.barManager.getAccents())}}]),t}(a.Component),pe=Object(l.b)(ue);ue.defaultProps={playMode:B.BY_BAR,interval:2,instrument:g.TABLA,bpmStep:50,bpmRange:[100,400],beatsPerStep:4,accents:[0,1,2,1]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null," ",r.a.createElement(pe,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,n){e.exports=n(176)}},[[96,2,1]]]);
//# sourceMappingURL=main.570d5ed0.chunk.js.map