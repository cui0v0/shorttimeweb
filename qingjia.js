let obj = JSON.parse($response.body)
let datas = obj.datas;
let detail = datas.detail;
datas.recordStatus = "6";
datas.studentInfo.userName = "李文卓";
detail.approvers[0].approver.userName = datas.studentInfo.userName;
detail.approvers[1].approver.userName = "余欢";
detail.approvers[1].approveNode[0].approvers[0].userName = detail.approvers[1].approver.userName;
detail.leaveReason = "身体不适，请假去医院打针拿药";
detail.logInfos[0].createTime = "09-23 10:33";
detail.logInfos[1].createTime = "09-23 12:08";
detail.startTime = "09-23 16:30";
detail.startDate = detail.startTime;
detail.endTime = "09-23 20:30";
detail.actEndTime = detail.endTime;
detail.actEndTimeDesc = "4小时";
detail.totalDays = detail.actEndTimeDesc;
if(detail.applyAttach.length>0){
    detail.applyAttach = [];
}
detail.leaveName = "病假";
detail.leaveType = datas.leaveType.name;
detail.nowTime = "2024-09-23 18:01:03";
detail.approvers[0].createTime = detail.logInfos[0].createTime;
detail.approvers[1].createTime = detail.logInfos[1].createTime;

$done({body:JSON.stringify(obj)})
