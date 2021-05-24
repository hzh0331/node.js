const os = require('os')
const osInfo = {
    userInfo:os.userInfo(),
    uptime:os.uptime(),
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(osInfo)