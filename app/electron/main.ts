import { app, BrowserWindow } from "electron";

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
    	width: 800,
        height: 600,
        webPreferences: {
        	nodeIntegration: true
        }
    });

    mainWindow.loadFile('../app/src/index.html');
});