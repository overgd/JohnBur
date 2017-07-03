const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
require('electron-debug')({ showDevTools: true });

let win

function createWindow() {
    // ���ο� ������ â�� �����մϴ�.
    win = new BrowserWindow({ width: 800, height: 600 })

    // �׸��� ���� ���͸��� index.html�� �ε��մϴ�.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // ������ ������ ���ϴ�.
    win.webContents.openDevTools()

    // â�� ������ ȣ��˴ϴ�.
    win.on('closed', () => {
        // ������ ��ü�� ������ �����մϴ�. ���� ��Ƽ ������ ������ ����
        // ������ ��ü�� �迭�� �����ϴ� ��찡 �ִµ� �� ���
        // �ش��ϴ� ��� ������ ��ü�� ������ ������ �־�� �մϴ�.
        win = null
    })
}

// �� �޼���� Electron�� �ʱ�ȭ�� ������ ����Ǹ� ������
// �����츦 ������ �� �ֽ��ϴ�. ��� API�� �� �̺�Ʈ ���Ŀ���
// ����� �� �ֽ��ϴ�.
app.on('ready', createWindow)

// ��� â�� ������ ���ø����̼� ����.
app.on('window-all-closed', () => {
    // macOS�� ��κ��� ���ø����̼��� ������ Cmd + Q Ŀ�ǵ�� Ȯ���ϰ�
    // �����ϱ� ������ �޴��ٿ� ���� ��� ����˴ϴ�.
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // macOS���� ���� �� �������� Ŭ���ǰ� ������
    // ���� �����찡 ������, ���ο� �����츦 �ٽ� ����ϴ�.
    if (win === null) {
        createWindow()
    }
})

// �� ���Ͽ� ������ ���ø����̼ǿ� Ưȭ�� ���� ���μ��� �ڵ带
// ������ �� �ֽ��ϴ�. ���� ������ �и��Ͽ� require�ϴ� �������
// �ڵ带 �ۼ��� ���� �ֽ��ϴ�.