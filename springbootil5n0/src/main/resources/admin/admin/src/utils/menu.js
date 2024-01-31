const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医师","menuJump":"列表","tableName":"yishi"}],"menu":"医师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"关于我们","menuJump":"列表","tableName":"guanyuwomen"}],"menu":"关于我们管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科室类型","menuJump":"列表","tableName":"keshileixing"}],"menu":"科室类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"门诊信息","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药库信息","menuJump":"列表","tableName":"yaokuxinxi"}],"menu":"药库信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"缴费清单","menuJump":"列表","tableName":"jiaofeiqingdan"}],"menu":"缴费清单管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药品类型","menuJump":"列表","tableName":"yaopinleixing"}],"menu":"药品类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"},{"child":[{"buttons":["查看","取药"],"menu":"药库信息列表","menuJump":"列表","tableName":"yaokuxinxi"}],"menu":"药库信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","支付","报告"],"menu":"预约挂号","menuJump":"列表","tableName":"yuyueguahao"}],"menu":"预约挂号管理"},{"child":[{"buttons":["查看","开药"],"menu":"体检报告","menuJump":"列表","tableName":"tijianbaogao"}],"menu":"体检报告管理"},{"child":[{"buttons":["查看"],"menu":"医师开药","menuJump":"列表","tableName":"yishikaiyao"}],"menu":"医师开药管理"},{"child":[{"buttons":["查看"],"menu":"用户取药","menuJump":"列表","tableName":"yonghuquyao"}],"menu":"用户取药管理"},{"child":[{"buttons":["查看","支付"],"menu":"缴费清单","menuJump":"列表","tableName":"jiaofeiqingdan"}],"menu":"缴费清单管理"}],"frontMenu":[{"child":[{"buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"},{"child":[{"buttons":["查看","取药"],"menu":"药库信息列表","menuJump":"列表","tableName":"yaokuxinxi"}],"menu":"药库信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看","报告结果","审核","查看结果"],"menu":"预约挂号","menuJump":"列表","tableName":"yuyueguahao"}],"menu":"预约挂号管理"},{"child":[{"buttons":["新增","查看","修改","删除","药方","药方信息"],"menu":"体检报告","menuJump":"列表","tableName":"tijianbaogao"}],"menu":"体检报告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医师开药","menuJump":"列表","tableName":"yishikaiyao"}],"menu":"医师开药管理"},{"child":[{"buttons":["查看","审核"],"menu":"用户取药","menuJump":"列表","tableName":"yonghuquyao"}],"menu":"用户取药管理"}],"frontMenu":[{"child":[{"buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"},{"child":[{"buttons":["查看","取药"],"menu":"药库信息列表","menuJump":"列表","tableName":"yaokuxinxi"}],"menu":"药库信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医师","tableName":"yishi"}]
    }
}
export default menu;
