module.exports = {
    getCurrentTime() { //获取当前系统时间戳
        var timestamp = (new Date()).getTime();
        return timestamp;
    },
    isNeedClearStorage(setRange, setCurrentTime) { //是否需要清除缓存
        let currentTime = this.getCurrentTime();
        console.log('存下来的时间戳：' + setCurrentTime);
        console.log("实时时间戳：" + currentTime);
        if ((parseInt(setRange) + parseInt(setCurrentTime)) < currentTime) {
            console.log('如果 setDate + storageTime 小于当前时间的时间戳，说明已经超过设置时间范围（3600秒）的时效时间，则需要清除缓存');
            return true;
        } else {
            return false;
        }
    }
}

