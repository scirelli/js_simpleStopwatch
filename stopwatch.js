var StopWatch = {
    totalTimeMs:0,
    startTimeMs:NaN,

    start:function(){
        var totalTimeMs = 0;

        if( isNaN(this.startTimeMs) ){
            this.startTimeMs = (new Date()).getTime();    
        }else{
            this.totalTimeMs += (new Date()).getTime() - this.startTimeMs;
            this.startTimeMs = (new Date()).getTime();
            totalTimeMs = this.totalTimeMs;
        }
        
        return totalTimeMs;
    },
    
    stop:function(){
        this.totalTimeMs += (new Date()).getTime() - this.startTimeMs;
        this.startTimeMs = NaN;
        return this.totalTimeMs;
    },

    reset:function(){
        var totalTimeMs = this.totalTimeMs;
        this.totalTimeMs = 0;
        this.startTimeMs = NaN;
        return totalTimeMs;
    }
};
