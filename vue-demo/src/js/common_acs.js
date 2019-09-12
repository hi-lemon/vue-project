/**
 * 说明：此文件用于公共信号机js方法
 * author:lijie
 */
/* eslint-disable */
// 相位字典
var phaseMap = new Map();
phaseMap.set(1, "A");
phaseMap.set(2, "B");
phaseMap.set(3, "C");
phaseMap.set(4, "D");
phaseMap.set(5, "E");
phaseMap.set(6, "F");
phaseMap.set(7, "G");
phaseMap.set(8, "H");
phaseMap.set(9, "I");
phaseMap.set(10, "J");
phaseMap.set(11, "K");
phaseMap.set(12, "L");
phaseMap.set(13, "M");
phaseMap.set(14, "N");
phaseMap.set(15, "O");
phaseMap.set(16, "P");
// 信号机版本字典
var dev_type_map = new Map();
dev_type_map.set(1010500, "国标版本");
dev_type_map.set(1010800, "莱斯版本");
dev_type_map.set(1010200, "私有版本");
dev_type_map.set(1010600, "海信版本");
dev_type_map.set(1010801, "SCATS");
export {
  phaseMap,
  dev_type_map
};
/** EF_LightCustomControl,//指定流向的关灯、黄闪、全红；及临时控制
    EF_Disconnectinadvance, //早断
    EF_LineUpLength,		//特征参数中配置进车道排队长度、出车道排队长度检测器
    EF_LockCustomControl,	//步进、跳相、自定义定灯临时控制
    EF_AlterableLaneControl,//可变车道临时控制
    EF_CustomJump,			//自定义跳相
    EF_AcsSchemeControl,    //单点方案控制
    EF_AcsPhaseStop,    //单点相位驻留
     EF_AcsPendingScreen,    //信号机待转屏
    EF_AreaSchemeMovement,//子区流向黄闪，关灯等
    EF_AcsOpt,			//信号机操作记录
    var ret = queryqxbyVersion('ACS300-3_V1.0.3_rel', 'EF_LightCustomControl');
*/
export function queryqxbyVersion(Versions, controltype) {
  var m_eVersion = "";
  var versionnum = 0;
  if (Versions == null || Versions == "") {
    return 0;
  }
  if (Versions.indexOf("ACS300-3_V1") != -1) {
    m_eVersion = "EV_LINUX_300";
  } else if (Versions.indexOf("ACS500_V1") != -1) {
    m_eVersion = "EV_LINUX_500";
  } else if (Versions.indexOf("ACS300-3_V2") != -1) {
    m_eVersion = "EV_WINCE_300";
  } else if (Versions.indexOf("CCS1000_V1") != -1) {
    m_eVersion = "EV_LINUX_1000";
  } else if (Versions.indexOf("ACS500A_V1") != -1) {
    m_eVersion = "EV_LINUX_500A";
  } else if (Versions.indexOf("P1") != -1) {
    m_eVersion = "EV_LINUX_COMMON";
  } else {
    m_eVersion = "EV_UNKNOW";
    return 0;
  }
  var splitver = Versions.split(".");
  if (splitver != null) {
    if (splitver.length > 2) {
      // 版本号
      versionnum = parseInt(splitver[1]) * 10 + parseInt(splitver[2].charAt(0));
    }
  }
  if (controltype == "EF_LightCustomControl" || controltype == "EF_Disconnectinadvance" || controltype == "EF_LineUpLength" || controltype == "EF_LockCustomControl" || controltype == "EF_AlterableLaneControl" || controltype == "EF_CustomJump") {
    // 指定流向的关灯、黄闪、全红；及临时控制
    if (m_eVersion == "EV_LINUX_300") {
      if (versionnum >= 4) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500") {
      if (versionnum >= 4) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_WINCE_300") {
      return 0;
    } else if (m_eVersion == "EV_LINUX_1000") {
      if (versionnum >= 4) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500A") {
      if (versionnum >= 4) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_COMMON") {
      if (versionnum >= 6) {
        return 1;
      } else {
        return 0;
      }
    }
  } else if (controltype == "EF_AcsSchemeControl" || controltype == "EF_AcsPhaseStop" || controltype == "EF_AreaSchemeMovement") {
    // 单点方案控制
    if (m_eVersion == "EV_LINUX_300") {
      if (versionnum >= 5) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500") {
      if (versionnum >= 5) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_WINCE_300") {
      return 0;
    } else if (m_eVersion == "EV_LINUX_1000") {
      if (versionnum >= 5) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500A") {
      if (versionnum >= 5) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_COMMON") {
      if (versionnum >= 6) {
        return 1;
      } else {
        return 0;
      }
    }
  } else if (controltype == "EF_AcsOpt") {
    // 信号机操作记录
    if (m_eVersion == "EV_LINUX_300") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_WINCE_300") {
      return 0;
    } else if (m_eVersion == "EV_LINUX_1000") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_500A") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    } else if (m_eVersion == "EV_LINUX_COMMON") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    }
  } else if (controltype == "EF_AcsPendingScreen") {
    if (m_eVersion == "EV_LINUX_COMMON") {
      if (versionnum >= 7) {
        return 1;
      } else {
        return 0;
      }
    }
  }
}
// 是否有互斥功能在锁定  1、校验项   2、  状态
export function huchijiaoyan(type1, type2) {
  // 4, "临时调时"
  if (type1 == 4) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 401, 方案调时
  if (type1 == 401) {
    if (type2 == 4) {
      return 0;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 1;
    } else if (type2 == 18) {
      return 1;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 0;
    } else {
      return 1;
    }
  }
  // 1, "步进"
  if (type1 == 1) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 1;
    } else if (type2 == 2) {
      return 1;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 1;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 2, "跳相"
  if (type1 == 2) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 1;
    } else if (type2 == 2) {
      return 1;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 1;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 3, "自定义相位(步进)
  if (type1 == 3) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 1;
    } else if (type2 == 5) {
      return 1;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 5, "自定义相位(跳相)"
  if (type1 == 5) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 1;
    } else if (type2 == 5) {
      return 1;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 7, "关灯"
  if (type1 == 7) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 1;
    } else if (type2 == 8) {
      return 1;
    } else if (type2 == 9) {
      return 1;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 8, "黄闪"
  if (type1 == 8) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 1;
    } else if (type2 == 8) {
      return 1;
    } else if (type2 == 9) {
      return 1;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 9, "全红"
  if (type1 == 9) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 1;
    } else if (type2 == 8) {
      return 1;
    } else if (type2 == 9) {
      return 1;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 16, "流向关灯"
  if (type1 == 16) {
    if (type2 == 4) {
      return 0;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 1;
    } else if (type2 == 18) {
      return 1;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 18, "流向全红"
  if (type1 == 18) {
    if (type2 == 4) {
      return 0;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 1;
    } else if (type2 == 18) {
      return 1;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 501, 早断
  if (type1 == 501) {
    if (type2 == 4) {
      return 0;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 1;
    } else if (type2 == 18) {
      return 1;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 6, "相位驻留"
  if (type1 == 6) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 0;
    } else if (type2 == 8) {
      return 0;
    } else if (type2 == 9) {
      return 0;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 1;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
  // 52, "单点方案控制"
  if (type1 == 52) {
    if (type2 == 4) {
      return 1;
    } else if (type2 == 401) {
      return 1;
    } else if (type2 == 1) {
      return 0;
    } else if (type2 == 2) {
      return 0;
    } else if (type2 == 3) {
      return 0;
    } else if (type2 == 5) {
      return 0;
    } else if (type2 == 7) {
      return 1;
    } else if (type2 == 8) {
      return 1;
    } else if (type2 == 9) {
      return 1;
    } else if (type2 == 16) {
      return 0;
    } else if (type2 == 18) {
      return 0;
    } else if (type2 == 501) {
      return 1;
    } else if (type2 == 6) {
      return 0;
    } else if (type2 == 52) {
      return 1;
    } else {
      return 1;
    }
  }
}
/**
 * 用户所属部门，获取路口列表用到
 * @param userDepartments
 * @returns {{ver: string, user: *, ar: {degree: number, primary_unit: number, unit_two: Array, unit_three: Array}, index: number, count: number}}
 */
export function initReqJson(userDepartments, current_user) {
  var reqJson = {
    "ver": "1.0",
    "user": current_user,
    "ar": {
      "degree": 2, // 行政单位代表
      "primary_unit": 10, // 一级行政单位支队
      "unit_two": [], // 大队
      "unit_three": [] // 中队
    },
    "index": 1,
    "count": 1000
  };
  var userDepartment = userDepartments[0];
  for (var i = 1; i < userDepartments.length; i++) {
    if (userDepartments[i].lft < userDepartment.lft) {
      userDepartment = userDepartments[i];
    }
  }
  reqJson.ar.degree = parseInt(userDepartment.lft);
  if (userDepartment.lft == 1) {
    reqJson.ar.primary_unit = parseInt(userDepartment.code);
  } else if (userDepartment.lft == 2) {
    reqJson.ar.unit_two.push(parseInt(userDepartment.code));
  } else if (userDepartment.lft == 3) {
    reqJson.ar.unit_two.push(parseInt(userDepartment.code.toString().substring(0, 2)));
    reqJson.ar.unit_three.push(parseInt(userDepartment.code));
  }
  return reqJson;
}
/**
 * 根据信号机状态获取图标
 * 对于非中控信号机使用了统一的三角图标，中控信号信号机都使用圆形图标
 * @param state
 */
export function getIconSkinByState(state, dev_type) {
  // 中控国标版本
  var acs_dev_type_supcon1 = 1010500;
  // 中控私有版本
  var acs_dev_type_supcon2 = 1010200;
  var icon = "icon02";
  switch (state) {
    case 1:
      // 1 - 在线
      if (dev_type != acs_dev_type_supcon1 && dev_type != acs_dev_type_supcon2) {
        icon = "icon01ls";
      } else {
        icon = "icon01";
      }
      break;
    case 2:
      // 2 - 离线
      if (dev_type != acs_dev_type_supcon1 && dev_type != acs_dev_type_supcon2) {
        icon = "icon02ls";
      } else {
        icon = "icon02";
      }
      break;
    case 3:
      // 3 - 故障 红
      if (dev_type != acs_dev_type_supcon1 && dev_type != acs_dev_type_supcon2) {
        icon = "icon03ls";
      } else {
        icon = "icon03";
      }
      break;
    case 4:
      // 4 - 降级 黄
      if (dev_type != acs_dev_type_supcon1 && dev_type != acs_dev_type_supcon2) {
        icon = "icon04ls";
      } else {
        icon = "icon04";
      }
      break;
    default:
      // 离线
      if (dev_type != acs_dev_type_supcon1 && dev_type != acs_dev_type_supcon2) {
        icon = "icon02ls";
      } else {
        icon = "icon02";
      }
      break;
  }
  return icon;
}

/**
 * 收集统计信号机状态分布信息
 * @param countState
 * @param state
 */
export function getAcsCountStates(countState, state) {
  switch (state) {
    case 1:
      // 1 - 在线
      countState.xhjzx++;
      break;
    case 2:
      // 2 - 离线
      countState.xhjlx++;
      break;
    case 3:
      // 3 - 故障 红
      countState.xhjgz++;
      break;
    case 4:
      // 4 - 降级 黄
      countState.xhjjj++;
      break;
    default:
      // 离线
      countState.xhjlx++;
      break;
  }
}
/**
 * 返回信号机状态文字信息
 * @param state
 */
export function getAcsStateText(state) {
  var text = "";
  switch (state) {
    case 1:
      // 1 - 在线
      text = "在线";
      break;
    case 2:
      // 2 - 离线
      text = "离线";
      break;
    case 3:
      // 3 - 故障 红
      text = "故障";
      break;
    case 4:
      // 4 - 降级 黄
      text = "降级";
      break;
    default:
      // 离线
      text = "离线";
      break;
  }
  return text;
}
// P1.0.7以上的软件版本判断
export function isVersionP(curr_acs_version) {
  if (curr_acs_version.indexOf("P1") != -1) {
    var splitver = curr_acs_version.split(".");
    if (splitver != null) {
      if (splitver.length > 2) {
        // 版本号
        const versionnum = parseInt(splitver[1]) * 10 + parseInt(splitver[2].charAt(0));
        if (versionnum >= 7) {
          return 1;
        }
      }
    }
  }
  return 0;
}

// ------------------------------------信号机故障信息开始------------------------------
/**
 * 信号机故障 获取全部故障类型的类型和描述
 * errObj 故障实体
 * isTitle 是否用来显示title的，是的话，将不添加一些页面元素
 * return obj obj.type：故障类型；obj.desc：故障描述
 * */
export function getErrTypeAndDescAll(errObj, isTitle) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  var data = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  // 回路故障
  data = circuitFault(errObj);
  if (data) {
    if (data.desc != "正常") {
      obj.type += data.type;
      obj.desc += data.desc;
    }
  }
  // 检测器故障前32位
  data = detectorFailure(errObj);
  if (data) {
    if (data.desc != "正常") {
      obj.type += data.type;
      obj.desc += data.desc;
    }
  }
  // 方案故障
  data = projectFailure(errObj);
  if (data) {
    if (data.desc != "正常") {
      obj.type += data.type;
      obj.desc += data.desc;
    }
  }
  // 开关门故障
  data = openCloseFault(errObj, isTitle);
  if (data) {
    if (data.desc != "正常") {
      obj.type += data.type;
      obj.desc += data.desc;
    }
  }
  // 流量数据故障
  data = trafficDataFault(errObj);
  if (data) {
    if (data.desc != "正常") {
      obj.type += data.type;
      obj.desc += data.desc;
    }
  }
  // 智能灯故障
  var data2 = intelligentLampFault(errObj);
  if (data2.desc != "正常") {
    obj.type += data2.type;
    obj.desc += data2.desc;
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
/**
 * 智能灯故障 获取单个故障类型的类型和描述
 * errObj 故障实体
 * return obj obj.type：故障类型；obj.desc：故障描述
 * */
function intelligentLampFault(errObj) {
  var sectionTag = [
    "红灯区域状态故障",
    "黄灯区域状态故障",
    "绿灯区域状态故障",
    "红灯倒计时区域状态故障",
    "绿灯倒计时区域状态故障"
  ];
  var LightType = [
    "",
    "机动车信号灯(圆盘灯)",
    "方向指示信号灯(箭头灯)",
    "机动车左转掉头",
    "非机动车信号灯",
    "左转非机动车信号灯",
    "人行横道信号灯",
    "倒计时灯",
    "车道信号灯",
    "道口信号灯",
    "闪光警告信号灯",
    "",
    "带倒计时的机动车信号灯",
    "带倒计时的方向指示信号灯",
    "",
    ""
  ];
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.light_infos) && errObj.light_infos.length > 0) {
    for (var i = 0; i < errObj.light_infos.length; i++) {
      obj.type = "信号灯故障 ";
      var lightObj = errObj.light_infos[i];
      var entranceId = (lightObj.light_position & 224) >> 5;
      var position = lightObj.light_position & 31;

      var strDetail = "进口" + entranceId + "，位置" + position + "，";

      var lightType = (lightObj.light_type & 240) >> 4;
      var lightDesc = LightType[lightType];
      if (lightDesc) {
        strDetail += lightDesc;
        strDetail += "；";
      }
      if (lightObj.light_err_flags & 1 === 1) {
        strDetail += "黄绿同亮";
        strDetail += "；";
      }
      if (lightObj.light_err_flags & 2 === 1) {
        strDetail += "红黄同亮";
        strDetail += "；";
      }
      if (lightObj.light_err_flags & 4 === 1) {
        strDetail += "红绿同亮";
        strDetail += "；";
      }
      if (lightObj.light_err_flags & 8 === 1) {
        strDetail += "电源故障";
        strDetail += "；";
      }
      for (var j = 0; j < lightObj.light_detections.length && j < 5; j++) {
        if (lightObj.light_detections[j] > 0) {
          strDetail += sectionTag[j];
          strDetail += "；";
        }
      }
      obj.desc += strDetail;
    }
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 回路故障
function circuitFault(errObj) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.error_info) && errObj.error_info.length > 0) {
    for (var i = 0; i < errObj.error_info.length; i++) {
      if (errObj.error_info[i] != 0) {
        switch (i) {
          case 0:
            obj.desc += getStrErrorBefore32(errObj.error_info[i]) + "通道红灯故障! ";
            break;
          case 1:
            obj.desc += getStrErrorBefore32(errObj.error_info[i]) + "通道黄灯故障! ";
            break;
          case 2:
            obj.desc += getStrErrorBefore32(errObj.error_info[i]) + "通道绿灯故障! ";
            break;
          case 3:
            obj.desc += getStrErrorBefore32(errObj.error_info[i]) + "号灯组绿冲突! ";
            break;
          case 4:
            obj.desc += getStrErrorBefore32(errObj.error_info[i]) + "号灯组红绿同亮! ";
            break;
        }
      }
    }
  }
  if (obj.desc) {
    obj.type = "灯组故障 ";
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 检测器故障
function detectorFailure(errObj) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.error_info) && errObj.error_info.length > 0) {
    for (var i = 0; i < errObj.error_info.length; i++) {
      if (errObj.error_info[i] != 0) {
        var value = errObj.error_info[i];
        switch (i) {
          case 5:
            // 检测器故障前32位
            obj.desc += getStrErrorBefore32(value) + "号检测器故障! ";
            break;
          case 6:
            // 检测器故障后32位
            obj.desc += getStrErroraFter32(value) + "号检测器故障! ";
            break;
        }
      }
    }
  }
  if (obj.desc) {
    obj.type = "检测器故障 ";
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 方案故障
function projectFailure(errObj) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.error_info) && errObj.error_info.length > 0) {
    if (errObj.error_info[7] != 0) {
      switch (errObj.error_info[7]) {
        case 1:
          obj.desc = "方案表出错! ";
          break;
        case 2:
          obj.desc = "时基表不存在! ";
          break;
        case 3:
          obj.desc = "相位配时号不在正常区间内! ";
          break;
        case 5:
          obj.desc = "流向冲突! ";
          break;
        case 6:
          obj.desc = "绿闪时间大于绿灯时间! ";
          break;
        case 7:
          obj.desc = "最小运行时间大于相位总时间! ";
          break;
        case 9:
          obj.desc = "相位迟起时间大于相位绿灯时间! ";
          break;
        case 10:
          obj.desc = "时段表号不在正常区间内/时段事件数不在合法区间内! ";
          break;
        case 11:
          obj.desc = "无机动车流向，且所有运行相位均为行人请求相位! ";
          break;
        case 12:
          obj.desc = "运行相位（非行人请求相位）中，黄灯、红灯之和不允许为0! ";
          break;
        case 13:
          obj.desc = "迟起流向中存在相位流向中不存在的流向! ";
          break;
        case 33:
          obj.desc = "步进跳相自定义定灯关灯黄闪全红控制失败! ";
          break;
        case 34:
          obj.desc = "手动控制方案失败! ";
          break;
        case 65:
          obj.desc = "控制模式获取错误! ";
          break;
        case 66:
          obj.desc = "方案号获取错误! ";
          break;
        case 67:
          obj.desc = "联网下发非法信息! ";
          break;
        case 68:
          obj.desc = "运行方案信息错误! ";
          break;
        case 69:
          obj.desc = "联网信息超时! ";
          break;
        case 70:
          obj.desc = "配时方案中控制模式获取失败! ";
          break;
        case 71:
          obj.desc = "配时方案中控制方式获取失败! ";
          break;
      }
    }
  }
  if (obj.desc) {
    obj.type = "方案故障 ";
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 开关门故障
function openCloseFault(errObj, isTitle) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.error_info) && errObj.error_info.length > 0) {
    if (errObj.error_info[8] != 0) {
      // 开关门故障
      if (isTitle == true) {
        obj.desc += "<a herf='#' style='cursor: pointer' onclick='window.parent.ticcFn.openCabinetErrorPage(" + errObj.acs_id + ",\"" + errObj.record_time + "\")'>";
      }
      for (var j = 0; j < 3; j++) {
        var bRet = (errObj.error_info[8] >> j) & 0x01;
        if (bRet) // 故障
        {
          if (j == 0) // 正门
          {
            obj.desc += "正门、后门打开!";
          } else if (j == 1) // 侧门
          {
            obj.desc += "侧门打开! ";
          }
        }
      }
      if (isTitle == true) {
        obj.desc += "</a> ";
      }
    }
  }
  if (obj.desc) {
    obj.type = "开关门故障 ";
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 流量数据故障
function trafficDataFault(errObj) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  if (errObj && (!!errObj.error_info) && errObj.error_info.length > 0) {
    for (var i = 0; i < errObj.error_info.length; i++) {
      if (errObj.error_info[i] != 0) {
        switch (i) {
          case 9:
            // 流量数据故障前32位
            obj.desc = getStrErrorBefore32(errObj.error_info[i]) + "号检测器流量数据故障! ";
            break;
          case 10:
            // 流量数据故障后32位
            obj.desc = getStrErroraFter32(errObj.error_info[i]) + "号检测器流量数据故障! ";
            break;
          case 11:
            // 流量数据自激前32位
            obj.desc = getStrErrorBefore32(errObj.error_info[i]) + "号检测器流量数据自激! ";
            break;
          case 12:
            // 流量数据自激后32位
            obj.desc = getStrErroraFter32(errObj.error_info[i]) + "号检测器流量数据自激! ";
            break;
        }
      }
    }
  }
  if (obj.desc) {
    obj.type = "流量数据故障 ";
  }
  if (!obj.desc) {
    obj.desc = "正常";
  }
  return obj;
}
// 获得前32位故障信息
function getStrErrorBefore32(value) {
  var strError = "";
  for (var j = 0; j < 32; j++) {
    var bRet = (value >> j) & 0x01;
    if (bRet) // 故障
    {
      strError += (j + 1) + ",";
    }
  }
  return strError;
}
// 获得后32位故障信息
function getStrErroraFter32(value) {
  var strError = "";
  for (var j = 0; j < 32; j++) {
    var bRet = (value >> j) & 0x01;
    if (bRet) // 故障
    {
      strError += (j + 1 + 32) + ",";
    }
  }
  return strError;
}
// -------------------------------信号机故障信息结束----------------------------------------

// 灯视频检测故障
function getSignalDetectorLampError(data) {
  var obj = {
    type: "", // 故障类型
    desc: "" // 故障描述
  };
  var lamps = data.lamp_set_infos;
  for (var i = 0; i < lamps.length; i++) {
    if (lamps[i].error_code != 0) {
      switch (lamps[i].lamp_set_type) {
        case 1:
          obj.desc += "左转";
          break;
        case 2:
          obj.desc += "直行";
          break;
        case 3:
          obj.desc += "右转";
          break;
      }
      switch (lamps[i].error_code) {
        case 1:
          obj.desc += "全灭!";
          break;
        case 2:
          obj.desc += "红绿同亮!";
          break;
        case 3:
          obj.desc += "红黄同亮!";
          break;
        case 4:
          obj.desc += "黄绿同亮!";
          break;
        case 5:
          obj.desc += "红黄绿同亮!";
          break;
        default:
          break;
      }
    }
  }
  if (obj.desc) {
    obj.desc = "进口" + data.detectorRelationship.entrance_id + ":" + obj.desc;
  }
  return obj;
}

// ----------------------------------关键控制信息(子区、信号机)------------------------------
/**
 * 子区人工干预信息格式化
 * 子区 101 102
 * 临时子区 111 112
 */
function initAreaKeyCtrl(sigObj) {
  var desc = "";
  switch (sigObj.ctrl_way) {
    case 101:
      desc += "锁定" + getRegionCtrl(sigObj.current_phase);
      break;
    case 102:
      desc += "切换" + getRegionCtrl(sigObj.current_phase);
      break;
    case 111:
      desc += "锁定" + getRegionCtrl(sigObj.current_phase);
      break;
    case 112:
      desc += "切换" + getRegionCtrl(sigObj.current_phase);
      break;
    default:
      desc += "未知子区控制";
  }
  return desc;
}
/**
 * 子区控制方案信息
 * @param ctrl_type
 * @returns {string}
 */
function getRegionCtrl(ctrl_type) {
  var desc = "";
  switch (ctrl_type) {
    case 1:
      desc = "单点方案";
      break;
    case 2:
      desc = "定时方案";
      break;
    case 3:
      desc = "联网优化";
      break;
    default:
      desc = "未知控制方案";
      break;
  }
  return desc;
}
/** 人工干预返回信息格式化
 *
 * @param acs_ctrl_data 信号机控制数据
 * @returns {string}
 */
function initKeyCtrl(acs_ctrl_data) {
  var des = "";
  var type = acs_ctrl_data.ctrl_way;
  switch (type) {
    case 1:
      des = "步进";
      break;
    case 2:
      des = "跳相";
      break;
    case 3:
      des = "自定义相位(步进)";
      break;
    case 4:
      des = "临时调时";
      break;
    case 5:
      des = "自定义相位（跳相）";
      break;
    case 6:
      des = "相位驻留";
      break;
    case 7:
      des = "关灯";
      break;
    case 8:
      des = "闪光";
      break;
    case 9:
      des = "全红";
      break;
    case 10:
      des = "固定配时";
      break;
    case 11:
      des = "行人请求";
      break;
    case 12:
      des = "全感应";
      break;
    case 13:
      des = "半感应";
      break;
    case 14:
      des = "单点自适应";
      break;
    case 15:
      des = "公交优先";
      break;
    case 16:
      des = "流向关灯";
      break;
    case 17:
      des = "流向黄闪";
      break;
    case 18:
      des = "流向全红";
      break;
    case 19:
      des = "单点排队";
      break;
    case 20:
      des = "生成式多目标协调";
      break;
    case 21:
      des = "生成式子区绿波协调";
      break;
    case 22:
      des = "生成式干线绿波协调";
      break;
    case 24:
      des = "方案选择式子区协调";
      break;
    case 25:
      des = "方案选择式干线协调";
      break;
    case 52:
      des = "单点方案控制";
      break;
    default:
      des = "未知错误类型";
  }
  // //如果是联网定时，显示为空
  if (acs_ctrl_data.ctrl_mode && acs_ctrl_data.ctrl_mode == 3) {
    des = "";
  }
  // 如果该是联网优化，显示联网自适应
  if (acs_ctrl_data.ctrl_mode && acs_ctrl_data.ctrl_mode == 4) {
    des = "联网自适应";
  }
  return des;
}
// ----------------------------关键控制信息结束-----------------------------------------------
// ------------------------------------画方案相位时间比例柱状图------------------------------
/**
 * 格式化方案时间
 * @param timeArr 时间数组
 */
function timeArrFormat(timeArr, phaseMap) {
  var timeSeries = new Array();
  for (var j = 0; j < timeArr.length; j++) {
    var colors = "";
    var xwz = timeArr[j];
    var xwname = "";
    // 相位名称
    if (phaseMap) {
      xwname = phaseMap.get(parseInt(j / 3) + 1);
    } else {
      xwname = xwzdmap.get(parseInt(j / 3));
    }
    // 颜色
    if (j % 3 === 0) {
      colors = "green";
    } else if (j % 3 === 1) {
      colors = "yellow";
    } else if (j % 3 === 2) {
      colors = "red";
    }
    var tmpdata = {
      name: xwname,
      type: "bar",
      stack: "相位值",
      itemStyle: {
        normal: {
          color: colors,
          label: {
            show: false,
            position: "insideLeft"
          }
        }
      },
      data: [xwz]
    };
    timeSeries.push(tmpdata);
  }
  return timeSeries;
}

/**
 * 画时间比例柱状图
 */
function drawPhaseTimeRatioByEchart(phaseTimeArr, timeSeries, echartid) {
  var myChart = echarts.init(document.getElementById(echartid));
  var showdata = "";
  for (var i = 0; i < phaseTimeArr.length; i++) {
    if (i % 3 === 0) {
      showdata = showdata + "{a" + i + "}:" + "{c" + i + "}:";
    } else if (i % 3 === 1) {
      showdata = showdata + "{c" + i + "}:";
    } else if (i % 3 === 2) {
      if (i == phaseTimeArr.length - 1) {
        showdata = showdata + "{c" + i + "}";
      } else {
        showdata = showdata + "{c" + i + "}:";
      }
    }
  }
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: showdata
    },
    animation: false,
    calculable: false,
    grid: {
      borderWidth: 0,
      x: 20,
      y: 3,
      x2: 0,
      y2: 3
    },
    xAxis: [{
      type: "value",
      show: false,
      splitLine: false,
      axisTick: false,
      axisLine: false,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#FBFBFF"
        }
      }
    }],
    yAxis: [{
      type: "category",
      splitLine: false,
      axisTick: false,
      axisLine: false,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#FBFBFF",
          fontSize: 20
        }
      },
      data: [""]
    }],
    series: timeSeries
  };
  // 为echarts对象加载数据
  myChart.setOption(option);
}
