var term = new Terminal();
term.open(document.getElementById('terminal'));

var shellprompt = '$ ';

term.prompt = function () {
    term.write('\r\n' + shellprompt);
};

term.writeln('Welcome to xterm.js');
term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
term.writeln('Type some keys and commands to play around.');
term.writeln('');
term.prompt();

term.on('key', function (key, ev) {
var printable = (
    !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
);

if (ev.keyCode == 13) {
    term.prompt();
} else if (ev.keyCode == 8) {
    // Do not delete the prompt
    if (term.x > 2) {
    term.write('\b \b');
    }
} else if (printable) {
    term.write(key);
}
});

term.on('paste', function (data, ev) {
    term.write(data);
});
