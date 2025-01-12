figma.showUI(__html__, { themeColors: true, width: 240, height: 384 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-cover') {
    const { title, description, jiraId, includeYYQQ, status, theme } = msg;

    // Calculate YYQQ
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const quarter = Math.floor((currentDate.getMonth() + 3) / 3);
    const YYQQ = `${year}Q${quarter}`;

    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    const frame = figma.createFrame();
    frame.resize(480, 270);

    const pluginFrames = figma.currentPage.children.filter(
      (node) => node.type === "FRAME" && node.name.includes(", Cover")
    );
    const frameNumber = pluginFrames.length + 1;
    frame.name = `${title} ${frameNumber.toString().padStart(2, "0")}, Cover`;

    frame.fills = [
      {
        type: 'SOLID',
        color: theme === 'light' ? { r: 1, g: 1, b: 1 } : { r: 0.086, g: 0.086, b: 0.086 },
      },
    ];

    const statusText = figma.createText();
    statusText.characters = status ? (
      includeYYQQ
        ? `[${status}] ${YYQQ}${jiraId ? `, ${jiraId}` : ''}`
        : `[${status}]${jiraId ? `, ${jiraId}` : ''}`
    ) : (
      includeYYQQ
        ? `${YYQQ}${jiraId ? `, ${jiraId}` : ''}`
        : jiraId || ''
    );
    statusText.fontSize = 14;
    statusText.fontName = { family: "Inter", style: "Bold" };
    statusText.fills = [
      {
        type: 'SOLID',
        color: theme === 'light' ? { r: 0.086, g: 0.086, b: 0.086 } : { r: 0.957, g: 0.957, b: 0.957 },
      },
    ];
    statusText.lineHeight = { unit: 'PIXELS', value: 20 };
    statusText.letterSpacing = { unit: 'PIXELS', value: 0.6 };
    statusText.resize(400, statusText.height);
    statusText.x = 32;
    statusText.y = 32;
    frame.appendChild(statusText);

    const titleText = figma.createText();
    titleText.characters = title;
    titleText.fontSize = 28;
    titleText.fontName = { family: "Inter", style: "Bold" };
    titleText.fills = [
      {
        type: 'SOLID',
        color: theme === 'light' ? { r: 0.086, g: 0.086, b: 0.086 } : { r: 0.957, g: 0.957, b: 0.957 },
      },
    ];
    titleText.lineHeight = { unit: 'PIXELS', value: 36 };
    titleText.resize(400, titleText.height);
    titleText.x = 32;
    titleText.y = 116;
    frame.appendChild(titleText);

    const descriptionText = figma.createText();
    descriptionText.characters = description || "Describe your project and its key objectives. This helps stakeholders understand what you aim to achieve and the overall scope.";
    descriptionText.fontSize = 18;
    descriptionText.fontName = { family: "Inter", style: "Regular" };
    descriptionText.fills = [
      {
        type: 'SOLID',
        color: theme === 'light' ? { r: 0.435, g: 0.435, b: 0.435 } : { r: 0.659, g: 0.659, b: 0.659 },
      },
    ];
    descriptionText.lineHeight = { unit: 'PIXELS', value: 26 };
    descriptionText.resize(400, descriptionText.height);
    descriptionText.x = 32;
    descriptionText.y = 160;
    frame.appendChild(descriptionText);

    const lastFrame = pluginFrames[pluginFrames.length - 1];
    if (lastFrame && lastFrame.type === "FRAME") {
      frame.x = lastFrame.x + lastFrame.width + 32;
      frame.y = lastFrame.y;
    }

    figma.currentPage.appendChild(frame);
    figma.viewport.scrollAndZoomIntoView([frame]);

    figma.ui.postMessage({ type: 'cover-generated' });
  }
};