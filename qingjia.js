let obj = JSON.parse($response.body)
let datas = obj.datas;
let detail = datas.detail;
datas.recordStatus = "6";
datas.studentInfo.userName = "李文卓";
detail.approvers[0].approver.userName = datas.studentInfo.userName;
detail.approvers[1].approver.userName = "余欢";
detail.approvers[1].approveNode[0].approvers[0].userName = detail.approvers[1].approver.userName;
detail.leaveReason = "陪同王博恒去医院看病";
detail.logInfos[0].createTime = "03-11 12:12";
detail.logInfos[1].createTime = "03-11 19:13";
detail.startTime = "03-11 12:12";
detail.startDate = detail.startTime;
detail.endTime = "03-11 19:13";
detail.actEndTime = detail.endTime;
detail.actEndTimeDesc = "7小时1分钟";
detail.totalDays = detail.actEndTimeDesc;
if(detail.applyAttach.length>0){
    detail.applyAttach = [];
}
detail.leaveName = "病假";
detail.dormitoryInfo = "北校区-观湖苑5-613-1",
detail.leaveType = datas.leaveType.name;
detail.nowTime = "2025-03-11 18:01:03";
detail.approvers[0].createTime = detail.logInfos[0].createTime;
detail.approvers[1].createTime = detail.logInfos[1].createTime;

$done({body:JSON.stringify(obj)})
