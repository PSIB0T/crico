/**
 * Created by chrisward on 5/03/2016.
 */

'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname + '/views/index.hbs');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
