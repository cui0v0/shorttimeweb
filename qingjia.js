let obj = JSON.parse($response.body)
let datas = obj.datas;
let detail = datas.detail;
datas.recordStatus = "6";
datas.studentInfo.userName = "李文卓";
detail.approvers[0].approver.userName = datas.studentInfo.userName;
detail.approvers[1].approver.userName = "余欢";
detail.leaveReason = "陪同王博恒去医院看病";
detail.logInfos[0].createTime = "03-13 14:00";
detail.logInfos[1].createTime = "03-13 20:00";
detail.startTime = detail.logInfos[0].createTime;
detail.startDate = detail.startTime;
detail.endTime = detail.logInfos[1].createTime;
detail.actEndTime = detail.endTime;
detail.actEndTimeDesc = "6小时";
detail.totalDays = detail.actEndTimeDesc;
if(detail.applyAttach.length>0){
    detail.applyAttach = [];
}
detail.leaveName = "病假";
detail.dormitoryInfo = "北校区-观湖苑5-613-1",
detail.leaveType = datas.leaveType.name;
detail.nowTime = "2025-03-11 13:13:03";
detail.approvers[0].createTime = detail.logInfos[0].createTime;
detail.approvers[1].createTime = detail.logInfos[1].createTime;

$done({body:JSON.stringify(obj)})
