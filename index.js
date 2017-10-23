const consoleMessageTypes = [
    '\x1b[30m',
    '\x1b[31m',
    '\x1b[32m',
    '\x1b[33m',
    '\x1b[34m',
    '\x1b[35m',
    '\x1b[36m',
    '\x1b[37m'
];
const log = type => {
    return (...args) => {
        let outputArg = '';
        const len = args.length;
        for (let i in args) {
            if (i == 0) {
                outputArg += args[i];
            } else {
                outputArg += ' ' + args[i];
            }
        }
        outputArg = consoleMessageTypes[type] + outputArg + consoleMessageTypes[7];
        console.log(outputArg);
    };
};
module.exports = {
    warn: log(3), // 黄色
    error: log(1), // 红色
    log: log(7), // 白色
    debug: log(6), // 青色
    success: log(2), // 绿色
    stress: log(5) // 洋红色,
};
