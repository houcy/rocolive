function populateComp(t) {
    // input: tab object.
    // TODO: fill out this function so that the div t.div contains the mechanical interface.
    t.outputStubs = {};
    t.compDB = {};
    t.allowDuplicates = false;
    t.rootBlock;
    t.sessionName = "untitled";
    t.newSession = true;

    t.startBlocks = document.createElement("xml");
    t.startBlocks.innerHTML = '<block type="comp_component_create"></block>';
    t.startBlocks.style.display = "none";

    getToolbox(t, getActiveTabNum());
    makeAllPrevComps(getActiveTabNum(), 0);
    makeAllPrevCompOutputs(getActiveTabNum(), 0);
    t.workspace = Blockly.inject(t.id, {
        toolbox: t.toolbox
    });
    createPrevToolbox(t);
    createPrevEvents(t);
    addPrevEvents(t);

    // An href with #key trigers an AJAX call to retrieve saved blocks.
    // if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    //     BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    // }

    Blockly.Xml.domToWorkspace(t.startBlocks, t.workspace);
}
