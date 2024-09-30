let obj = JSON.parse($response.body)
let datas = obj.datas;
let detail = datas.detail;
datas.recordStatus = "6";
datas.studentInfo.userName = "崔鲡沣";
detail.approvers[0].approver.userName = datas.studentInfo.userName;
detail.approvers[1].approver.userName = "余欢";
detail.approvers[1].approveNode[0].approvers[0].userName = detail.approvers[1].approver.userName;
detail.leaveReason = "身体不适身体不适身体不适";
detail.logInfos[0].createTime = "09-30 14:03";
detail.logInfos[1].createTime = "09-30 16:08";
detail.startTime = "09-30 16:00";
detail.startDate = detail.startTime;
detail.endTime = "09-30 20:00";
detail.actEndTime = detail.endTime;
detail.actEndTimeDesc = "4小时";
detail.totalDays = detail.actEndTimeDesc;
if(detail.applyAttach.length>0){
    detail.applyAttach = [];
}
detail.leaveName = "病假";
detail.dormitoryInfo = "北校区-观湖苑5-609-4",
detail.leaveType = datas.leaveType.name;
detail.nowTime = "2024-09-30 18:01:03";
detail.approvers[0].createTime = detail.logInfos[0].createTime;
detail.approvers[1].createTime = detail.logInfos[1].createTime;

$done({body:JSON.stringify(obj)})
