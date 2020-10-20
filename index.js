const chalk = require('chalk');

const row = '----------------------------------------------------------------------'

class Putout {
    constructor(app = '', options = {}) {
        const {timestamp = false, verbosity = 3, icon = ''} = options;
        this.app = app;
        this.timestamp = timestamp;
        this.verbosity = verbosity;
        this.icon = icon ? icon + '' : '';
    }

    stamp(prefix=null) {
        return `${this.timestamp ? `[${new Date().toISOString()}] ` : ''}${this.icon + (prefix ? '' : '  ')}${prefix ? prefix+' ': ''}${this.app ? `${this.app}` : ''}`;
    }

    banner(msg) {
        if (this.verbosity > 0) console.log(chalk.green(`${row}\n\n\t${this.stamp()} ${msg}\n\n${row}`))
    }

    error(msg, ...other) {
        if (this.verbosity > 0) console.error(chalk.bgRed(`${this.stamp('❌')} [error] ${msg}`), ...other);
    }

    warn(msg, ...other) {
        if (this.verbosity > 0) console.error(chalk.yellow(`${this.stamp('🔺')} [warning] ${msg}`), ...other);
    }

    log(msg, ...other) {
        if (this.verbosity > 1) console.log(chalk.white(`${this.stamp()} ${msg}`), ...other);
    }

    debug(msg, ...other) {
        if (this.verbosity > 2) console.log(chalk.white(`${this.stamp()} ${msg}`), ...other);
    }
}

module.exports = Putout