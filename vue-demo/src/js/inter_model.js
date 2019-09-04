/* eslint-disable */
// 左侧相位信息canvas覆盖新的div
var cavAdd = null;// 覆盖div内部canvas参数
var realHeight = null;// 左侧相位边框高度总和
var addDivId = null;// 覆盖div的id
var addDivCavId = null;// 覆盖div内部canvas的id
// 相位号标识
const phaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
// 所有画布ID
var qcanvasid = [];
// 所有信号机ID
var qxhjid = [];
// 所有路口ID
var qcrossid = [];
// 所有路口模型初始化数据
var qinitdata = [];
// 所有相邻初始化数据
var qnearlkdata = [];
// 所有特征参数初始化数据
var qtzcsdata = [];
// 所有可变车道初始化数据
var qinitkbcddatas = [];
// 所有路口模型type
var qtype = [];
// 所有路口类型  0为正常路口  1为父子路口  2 匝道路口
var qlkmxtype = [];
// 路口相连进口数组，如为普通路口则为空
var qfzlkjkid = [];

// 所有路口模型预设相位,如果是父子路口的话包含子路口相位值
var qprexw = [];
// 所有路口流量数据
var qvoldata = [];
// 所有路口排队长度数据
var qpdcddata = [];
// 所有路口待转区提示信息（实时数据）
var qdzwmsg = [];
// 可变车道数据信息//存储的是;分割开的可变车道信息字符串数组
var qkbcddata = [];
// 待转屏数据
var qdzpdata = [];
var all_qkbcddata_arr = [];// 当前路口模型可变车道信息
// 可变车道预设数据信息
var qkbcdsetvalues = [];

// 所有路口流量数据
var Cqvoldata = [];
// 所有路口排队长度数据
var Cqpdcddata = [];
// 所有路口待转区提示信息（实时数据）
var Cqdzwmsg = [];
// 待转屏数据信息
var Cqdzpdata = [];
// 可变车道数据信息
var Cqkbcddata = [];
// 可变车道预设数据信息
var Cqkbcdsetvalues = [];
// 路口特征参数流向
var current_movements_paras = [];

// 全局变量 上线--------------------------------------------
// 画布高度和宽度
var scrollHeight = 0;
var scrollWidth = 0;
// 左边相位模块宽度占比
var leftproportion = 0;
// 路口模型中心点坐标
var centerPointX = 0;
var centerPointY = 0;
// 路口模型中心点坐标
var CcenterPointX = 0;
var CcenterPointY = 0;
// 展示类型1 为实时信息显示含左边相位信息  2为实时信息显示含配置相位信息 3 为配置相位信息
var showtype = 0;
// 路口类型  0为正常路口  1为父子路口
var lkmxtype = 0;
// 父子路口相连的路口ＩＤ，比如1,3代表父路口的进口1和子路口的进口3连通
var fzlkjkid = "";

// 路口模型左边线X坐标
var lkmxleftx = 0;
// 画布ID
var myCanvas = "";
// 道路背景颜色
var loadcolor = "#222e3e";
// 道路周边背景颜色
var loadbgcolor = "#395a83";
// 白色
var whiteColor = "#ffffff";
// 灰色
var grayColor = "#999999";
// var imgurl = contextPath+"/ticc_common/images/lkmx/nearlk.png";
var nearimg = new Image();

// 路口静态信息画布四点坐标值 顺时针方向数
var lk1x = 0;
var lk1y = 0;
var lk2x = 0;
var lk2y = 0;
var lk3x = 0;
var lk3y = 0;
var lk4x = 0;
var lk4y = 0;
// 车道角度数组！！！！！！！！！！！！
var pzjd = [];

// 进口ID！！！！！！！！！！！！
var jkid = [];
// 进口方向
var jkfx = [];
// 进口相邻信号机ＩＤ！！！！！！！！！！！！
var nearxhjid = [];

// 各进口人行线是否存在二次过街  1表示存在二次过街  0表示不存在二次过街
var secondfoot = [];
// 路口名称  <必须参数>
var lkname = [];

// 特征参数 最大长度32
var maxLiuxiangNum = 32;
// 流向号
var liuxianghao = [];
// 是否参加控制
var iscontrl = [];
// 进口ID
var jinkouid = [];
// 进口方向
var jinkoufx = [];
// 流向
// 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2
var liuxiangpz = [];
// 每个进口除去人行流向的其他流向数量
var jkliuxiangcount = [];
// 是否参加控制
var isclick = [];
// 预设相位
var advanceset = [];

// 当前相位号
var nowsetnum = 1;
// 当前相位剩余时间
var sytime = 0;
// 实时流向
var byMovementsState = [];

// 子路口参数
// 车道角度数组！！！！！！！！！！！！
var Cpzjd = [];

// 进口ID！！！！！！！！！！！！
var Cjkid = [];
// 进口方向
var Cjkfx = [];
// 进口相邻信号机ＩＤ！！！！！！！！！！！！
var Cnearxhjid = [];

// 各进口人行线是否存在二次过街  1表示存在二次过街  0表示不存在二次过街
var Csecondfoot = [];
// 路口名称  <必须参数>
var Clkname = [];

// 特征参数 最大长度32
// 流向号
var Cliuxianghao = [];
// 是否参加控制
var Ciscontrl = [];
// 进口ID
var Cjinkouid = [];
// 进口方向
var Cjinkoufx = [];
// 流向
// 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2
var Cliuxiangpz = [];
// 每个进口出去人行流向的其他流向数量
var Cjkliuxiangcount = [];
// 是否参加控制
var Cisclick = [];
// 预设相位
var Cadvanceset = [];

// 当前相位号
var Cnowsetnum = 1;
// 当前相位剩余时间
var Csytime = 0;
// 实时流向
var CbyMovementsState = [];
// 普通流向配置，去掉了人行，人行1，人行2和非机动车道的流向配置
var liuxiangshunxu = [1, 2, 3, 5, 6, 7, 8, 9];

// 流向箭头矩形四个点坐标
var jxpoint1x = [];
var jxpoint1y = [];

var jxpoint2x = [];
var jxpoint2y = [];

var jxpoint3x = [];
var jxpoint3y = [];

var jxpoint4x = [];
var jxpoint4y = [];
// 流向配置白底四个点坐标
var lxbdpoint1x = [];
var lxbdpoint1y = [];

var lxbdpoint2x = [];
var lxbdpoint2y = [];

var lxbdpoint3x = [];
var lxbdpoint3y = [];

var lxbdpoint4x = [];
var lxbdpoint4y = [];

// 流向箭头矩形四个点坐标
var Cjxpoint1x = [];
var Cjxpoint1y = [];

var Cjxpoint2x = [];
var Cjxpoint2y = [];

var Cjxpoint3x = [];
var Cjxpoint3y = [];

var Cjxpoint4x = [];
var Cjxpoint4y = [];
// 流向配置白底四个点坐标
var Clxbdpoint1x = [];
var Clxbdpoint1y = [];

var Clxbdpoint2x = [];
var Clxbdpoint2y = [];

var Clxbdpoint3x = [];
var Clxbdpoint3y = [];

var Clxbdpoint4x = [];
var Clxbdpoint4y = [];

// 每个车道宽度
var tdkd = 0;
// 通道进口数  <必须参数>！！！！
var tdj = [];
// 通道出口数  <必须参数>！！！！！！！！！！
var tdc = [];
// 通道进口数  <必须参数>！！！！
var Ctdj = [];
// 通道出口数  <必须参数>！！！！！！！！！！
var Ctdc = [];
// 路口名称字体大小(px)
var namesize = 0;
// 中心线长度
var zxcd = 0;

// 每条道路进口X坐标画线点
var jjcdx = [];
// 每条道路进口Y坐标画线点
var jjcdy = [];
// 每条道路出口X坐标画线点
var cjcdx = [];
// 每条道路出口Y坐标画线点
var cjcdy = [];
// 道路进口弧线点
var jkhxdx = [];
var jkhxdy = [];
// 道路出口弧线点
var ckhxdx = [];
var ckhxdy = [];
// 车道中心点坐标数组
var zcxtx = [];
var zcxty = [];
// 车道进口边缘坐标数组
var jcxtx = [];
var jcxty = [];
// 车道出口边缘坐标
var ccxtx = [];
var ccxty = [];
// 道路边线焦点坐标x
var jdzbx = [];
// 道路边线焦点坐标y
var jdzby = [];
// 进口边线与画布焦点坐标
var jkvshbx = [];
var jkvshby = [];
// 出口边线与画布焦点坐标
var ckvshbx = [];
var ckvshby = [];
// 道路中心线与画布焦点坐标
var zxxvshbx = [];
var zxxvshby = [];
// 相邻路口画图片点坐标--父
var nearimgpointx = [];
var nearimgpointy = [];
// 相邻路口画图片点坐标--子
var Cnearimgpointx = [];
var Cnearimgpointy = [];
// 道路中心线与人行线焦点坐标
var zxxvsfootx = [];
var zxxvsfooty = [];
// 第一个进口车道线-人行线交点
var jkxvsrxx1x = [];
var jkxvsrxx1y = [];
// 第一个进口车道线-画布边缘交点
var jkxvsbyx1x = [];
var jkxvsbyx1y = [];
// 第一个出口车道线-人行线交点
var ckxvsrxx1x = [];
var ckxvsrxx1y = [];
// 第一个出口车道线-画布边缘交点
var ckxvsbyx1x = [];
var ckxvsbyx1y = [];
// 第一个进口实线坐标
var jksxpoint1x = [];
var jksxpoint1y = [];
// 第一进口 相邻路口第一点坐标
var jknearpoint1x = [];
var jknearpoint1y = [];

// 第一进口 相邻路口第二点坐标
var jknearsecond1x = [];
var jknearsecond1y = [];

// 第一出口 相邻路口第三点坐标
var cknearthird1x = [];
var cknearthird1y = [];
// 第一出口 相邻路口第四点坐标
var cknearpoint1x = [];
var cknearpoint1y = [];

// 第一个进口流量线圈坐标
var jkvolxq1x = [];
var jkvolxq1y = [];
// 第一个进口排队长度线圈坐标
var jkpdcdxq1x = [];
var jkpdcdxq1y = [];
// 第一个进口流量数据坐标
var jkvoldata1x = [];
var jkvoldata1y = [];
// 第一个进口排队长度数据坐标S
var jkpdcddata1x = [];
var jkpdcddata1y = [];
// 第二个进口车道线-人行线交点
var jkxvsrxx2x = [];
var jkxvsrxx2y = [];
// 第二个进口车道线-画布边缘交点
var jkxvsbyx2x = [];
var jkxvsbyx2y = [];
// 第二个出口车道线-人行线交点
var ckxvsrxx2x = [];
var ckxvsrxx2y = [];
// 第二个出口车道线-画布边缘交点
var ckxvsbyx2x = [];
var ckxvsbyx2y = [];
// 第二个进口实线坐标
var jksxpoint2x = [];
var jksxpoint2y = [];
// 第二进口 相邻路口第一点坐标
var jknearpoint2x = [];
var jknearpoint2y = [];
// 第一进口 相邻路口第二点坐标
var jknearsecond2x = [];
var jknearsecond2y = [];

// 第一出口 相邻路口第三点坐标
var cknearthird2x = [];
var cknearthird2y = [];
// 第二出口 相邻路口第四点坐标
var cknearpoint2x = [];
var cknearpoint2y = [];

// 第二个进口流量线圈坐标
var jkvolxq2x = [];
var jkvolxq2y = [];
// 第二个进口排队长度线圈坐标
var jkpdcdxq2x = [];
var jkpdcdxq2y = [];
// 第二个进口流量数据坐标
var jkvoldata2x = [];
var jkvoldata2y = [];
// 第二个进口排队长度数据坐标S
var jkpdcddata2x = [];
var jkpdcddata2y = [];
// 第三个进口车道线-人行线交点
var jkxvsrxx3x = [];
var jkxvsrxx3y = [];
// 第三个进口车道线-画布边缘交点
var jkxvsbyx3x = [];
var jkxvsbyx3y = [];
// 第三个出口车道线-人行线交点
var ckxvsrxx3x = [];
var ckxvsrxx3y = [];
// 第三个出口车道线-画布边缘交点
var ckxvsbyx3x = [];
var ckxvsbyx3y = [];
// 第三个进口实线坐标
var jksxpoint3x = [];
var jksxpoint3y = [];
// 第三进口 相邻路口第一点坐标
var jknearpoint3x = [];
var jknearpoint3y = [];
// 第一进口 相邻路口第二点坐标
var jknearsecond3x = [];
var jknearsecond3y = [];

// 第一出口 相邻路口第三点坐标
var cknearthird3x = [];
var cknearthird3y = [];
// 第三出口 相邻路口第四点坐标
var cknearpoint3x = [];
var cknearpoint3y = [];

// 第三个进口流量线圈坐标
var jkvolxq3x = [];
var jkvolxq3y = [];
// 第三个进口排队长度线圈坐标
var jkpdcdxq3x = [];
var jkpdcdxq3y = [];
// 第三个进口流量数据坐标
var jkvoldata3x = [];
var jkvoldata3y = [];
// 第三个进口排队长度数据坐标S
var jkpdcddata3x = [];
var jkpdcddata3y = [];
// 第四个进口车道线-人行线交点
var jkxvsrxx4x = [];
var jkxvsrxx4y = [];
// 第四个进口车道线-画布边缘交点
var jkxvsbyx4x = [];
var jkxvsbyx4y = [];
// 第四个出口车道线-人行线交点
var ckxvsrxx4x = [];
var ckxvsrxx4y = [];
// 第四个出口车道线-画布边缘交点
var ckxvsbyx4x = [];
var ckxvsbyx4y = [];
// 第四个进口实线坐标
var jksxpoint4x = [];
var jksxpoint4y = [];
// 第四进口 相邻路口第一点坐标
var jknearpoint4x = [];
var jknearpoint4y = [];
// 第一进口 相邻路口第二点坐标
var jknearsecond4x = [];
var jknearsecond4y = [];

// 第一出口 相邻路口第三点坐标
var cknearthird4x = [];
var cknearthird4y = [];
// 第四出口 相邻路口第四点坐标
var cknearpoint4x = [];
var cknearpoint4y = [];

// 第四个进口流量线圈坐标
var jkvolxq4x = [];
var jkvolxq4y = [];
// 第四个进口排队长度线圈坐标
var jkpdcdxq4x = [];
var jkpdcdxq4y = [];
// 第四个进口流量数据坐标
var jkvoldata4x = [];
var jkvoldata4y = [];
// 第四个进口排队长度数据坐标S
var jkpdcddata4x = [];
var jkpdcddata4y = [];

// 第五个进口车道线-人行线交点
var jkxvsrxx5x = [];
var jkxvsrxx5y = [];
// 第五个进口车道线-画布边缘交点
var jkxvsbyx5x = [];
var jkxvsbyx5y = [];
// 第五个出口车道线-人行线交点
var ckxvsrxx5x = [];
var ckxvsrxx5y = [];
// 第五个出口车道线-画布边缘交点
var ckxvsbyx5x = [];
var ckxvsbyx5y = [];
// 第五个进口实线坐标
var jksxpoint5x = [];
var jksxpoint5y = [];
// 第五进口 相邻路口第一点坐标
var jknearpoint5x = [];
var jknearpoint5y = [];
// 第一进口 相邻路口第二点坐标
var jknearsecond5x = [];
var jknearsecond5y = [];

// 第一出口 相邻路口第三点坐标
var cknearthird5x = [];
var cknearthird5y = [];
// 第五出口 相邻路口第四点坐标
var cknearpoint5x = [];
var cknearpoint5y = [];

// 第五个进口流量线圈坐标
var jkvolxq5x = [];
var jkvolxq5y = [];
// 第五个进口排队长度线圈坐标
var jkpdcdxq5x = [];
var jkpdcdxq5y = [];
// 第五个进口流量数据坐标
var jkvoldata5x = [];
var jkvoldata5y = [];
// 第五个进口排队长度数据坐标S
var jkpdcddata5x = [];
var jkpdcddata5y = [];

// 人行线进口边缘坐标1
var jfootline1x = [];
var jfootline1y = [];
// 人行线进口边缘坐标2
var jfootline2x = [];
var jfootline2y = [];
// 人行线出口边缘坐标1
var cfootline1x = [];
var cfootline1y = [];
// 人行线出口边缘坐标2
var cfootline2x = [];
var cfootline2y = [];
// 各进口车道流向数据
// 进口一车道流向
var jkcdlx1 = [];
// 进口二车道流向
var jkcdlx2 = [];
// 进口三车道流向
var jkcdlx3 = [];
// 进口四车道流向
var jkcdlx4 = [];
// 进口四车道流向
var jkcdlx5 = [];
// 进口一车道线圈ID
var jkcdxqid1 = [];
// 进口二车道线圈ID
var jkcdxqid2 = [];
// 进口三车道线圈ID
var jkcdxqid3 = [];
// 进口四车道线圈ID
var jkcdxqid4 = [];
// 进口四车道线圈ID
var jkcdxqid5 = [];
// 检测器ID数组
var NumDetector = [];
// 线圈ID数组
var byLoopID = [];

// 可变车道排序序号，按路口进行排列
var kbcdxh1 = [];
var kbcdxh2 = [];
var kbcdxh3 = [];
var kbcdxh4 = [];
var kbcdxh5 = [];
// 可变车道的状态数
var kbcdzts1 = [];
var kbcdzts2 = [];
var kbcdzts3 = [];
var kbcdzts4 = [];
var kbcdzts5 = [];
// 可变车道的状态类型
var kbcdztlx1 = [];
var kbcdztlx2 = [];
var kbcdztlx3 = [];
var kbcdztlx4 = [];
var kbcdztlx5 = [];

// 进口1车道流向坐标
var jkcdlxzb1x = [];
var jkcdlxzb1y = [];
// 进口2车道流向坐标
var jkcdlxzb2x = [];
var jkcdlxzb2y = [];
// 进口3车道流向坐标
var jkcdlxzb3x = [];
var jkcdlxzb3y = [];
// 进口4车道流向坐标
var jkcdlxzb4x = [];
var jkcdlxzb4y = [];
// 进口5车道流向坐标
var jkcdlxzb5x = [];
var jkcdlxzb5y = [];
// 各进口名称坐标点
var jknamex = [];
var jknamey = [];
// 各进口红绿灯白色背景点坐标
var trafficlightx = [];
var trafficlighty = [];
// 各进口红绿灯白色背景终点点坐标
var trafficlightzdx = [];
var trafficlightzdy = [];
// 红绿灯偏转角度
var trafficlightpzjd = [];
// 路口人行线偏转角度
var footlinelightpzjd = [];
// 右转灯点坐标
var rightlightx = [];
var rightlighty = [];
// 通行灯点坐标
var zhixinglightx = [];
var zhixinglighty = [];
// 左转灯点坐标
var leftlightx = [];
var leftlighty = [];
// 第1路口人行灯点位坐标
var footlight1x = [];
var footlight1y = [];
// 第2路口人行灯点位坐标
var footlight2x = [];
var footlight2y = [];
// 第3路口人行灯点位坐标
var footlight3x = [];
var footlight3y = [];
// 第4路口人行灯点位坐标
var footlight4x = [];
var footlight4y = [];
// 第5路口人行灯点位坐标
var footlight5x = [];
var footlight5y = [];
// 实时信息流向变量信息---
// 进口中心线坐标
var zxxdwx = [];
var zxxdwy = [];
// 进口左转画线点坐标
var sslxleftx = [];
var sslxlefty = [];
// 进口直行画线点坐标
var sslxzhixingx = [];
var sslxzhixingy = [];
// 进口右转画线点坐标
var sslxrightx = [];
var sslxrighty = [];
// 非机动车直行画线点坐标
var sslxfjdczxx = [];
var sslxfjdczxy = [];
// 非机动车左转画线点坐标
var sslxfjdcleftx = [];
var sslxfjdclefty = [];
// 非机动车左直画线点坐标
var sslxfjdcleftAndzxx = [];
var sslxfjdcleftAndzxy = [];

// 人行线4画线点坐标
var sslxfootline4x = [];
var sslxfootline4y = [];
// 人行线10画线点坐标
var sslxfootline10x = [];
var sslxfootline10y = [];
// 人行线11画线点坐标
var sslxfootline11x = [];
var sslxfootline11y = [];

// 每个出口非机动车直行点坐标
var ckfjdcforwardx = [];
var ckfjdcforwardy = [];
// 每个出口非机动车左转坐标
var ckfjdcleftx = [];
var ckfjdclefty = [];

// 待转区第1个点位坐标
var dzqpoint1x = [];
var dzqpoint1y = [];
// 待转区第2个点位坐标
var dzqpoint2x = [];
var dzqpoint2y = [];
// 待转区第3个点位坐标
var dzqpoint3x = [];
var dzqpoint3y = [];
// 待转区第4个点位坐标
var dzqpoint4x = [];
var dzqpoint4y = [];
// 待转区第5个点位坐标
var dzqpoint5x = [];
var dzqpoint5y = [];

// 子路口变量--------------------------------------------

// 每条道路进口X坐标画线点
var Cjjcdx = [];
// 每条道路进口Y坐标画线点
var Cjjcdy = [];
// 每条道路出口X坐标画线点
var Ccjcdx = [];
// 每条道路出口Y坐标画线点
var Ccjcdy = [];
// 道路进口弧线点
var Cjkhxdx = [];
var Cjkhxdy = [];
// 道路出口弧线点
var Cckhxdx = [];
var Cckhxdy = [];
// 车道中心点坐标数组
var Czcxtx = [];
var Czcxty = [];
// 车道进口边缘坐标数组
var Cjcxtx = [];
var Cjcxty = [];
// 车道出口边缘坐标
var Cccxtx = [];
var Cccxty = [];
// 道路边线焦点坐标x
var Cjdzbx = [];
// 道路边线焦点坐标y
var Cjdzby = [];
// 进口边线与画布焦点坐标
var Cjkvshbx = [];
var Cjkvshby = [];
// 出口边线与画布焦点坐标
var Cckvshbx = [];
var Cckvshby = [];
// 道路中心线与画布焦点坐标
var Czxxvshbx = [];
var Czxxvshby = [];
// 道路中心线与人行线焦点坐标
var Czxxvsfootx = [];
var Czxxvsfooty = [];
// 第一个进口车道线-人行线交点
var Cjkxvsrxx1x = [];
var Cjkxvsrxx1y = [];
// 第一个进口车道线-画布边缘交点
var Cjkxvsbyx1x = [];
var Cjkxvsbyx1y = [];
// 第一个出口车道线-人行线交点
var Cckxvsrxx1x = [];
var Cckxvsrxx1y = [];
// 第一个出口车道线-画布边缘交点
var Cckxvsbyx1x = [];
var Cckxvsbyx1y = [];
// 第一个进口实线坐标
var Cjksxpoint1x = [];
var Cjksxpoint1y = [];
// 第一进口 相邻路口第一点坐标
var Cjknearpoint1x = [];
var Cjknearpoint1y = [];
// 第一出口 相邻路口第四点坐标
var Ccknearpoint1x = [];
var Ccknearpoint1y = [];

// 第一个进口流量线圈坐标
var Cjkvolxq1x = [];
var Cjkvolxq1y = [];
// 第一个进口排队长度线圈坐标
var Cjkpdcdxq1x = [];
var Cjkpdcdxq1y = [];
// 第一个进口流量数据坐标
var Cjkvoldata1x = [];
var Cjkvoldata1y = [];
// 第一个进口排队长度数据坐标S
var Cjkpdcddata1x = [];
var Cjkpdcddata1y = [];
// 第二个进口车道线-人行线交点
var Cjkxvsrxx2x = [];
var Cjkxvsrxx2y = [];
// 第二个进口车道线-画布边缘交点
var Cjkxvsbyx2x = [];
var Cjkxvsbyx2y = [];
// 第二个出口车道线-人行线交点
var Cckxvsrxx2x = [];
var Cckxvsrxx2y = [];
// 第二个出口车道线-画布边缘交点
var Cckxvsbyx2x = [];
var Cckxvsbyx2y = [];
// 第二个进口实线坐标
var Cjksxpoint2x = [];
var Cjksxpoint2y = [];
// 第一进口 相邻路口第一点坐标
var Cjknearpoint2x = [];
var Cjknearpoint2y = [];
// 第一出口 相邻路口第四点坐标
var Ccknearpoint2x = [];
var Ccknearpoint2y = [];

// 第二个进口流量线圈坐标
var Cjkvolxq2x = [];
var Cjkvolxq2y = [];
// 第二个进口排队长度线圈坐标
var Cjkpdcdxq2x = [];
var Cjkpdcdxq2y = [];
// 第二个进口流量数据坐标
var Cjkvoldata2x = [];
var Cjkvoldata2y = [];
// 第二个进口排队长度数据坐标S
var Cjkpdcddata2x = [];
var Cjkpdcddata2y = [];
// 第三个进口车道线-人行线交点
var Cjkxvsrxx3x = [];
var Cjkxvsrxx3y = [];
// 第三个进口车道线-画布边缘交点
var Cjkxvsbyx3x = [];
var Cjkxvsbyx3y = [];
// 第三个出口车道线-人行线交点
var Cckxvsrxx3x = [];
var Cckxvsrxx3y = [];
// 第三个出口车道线-画布边缘交点
var Cckxvsbyx3x = [];
var Cckxvsbyx3y = [];
// 第三个进口实线坐标
var Cjksxpoint3x = [];
var Cjksxpoint3y = [];
// 第一进口 相邻路口第一点坐标
var Cjknearpoint3x = [];
var Cjknearpoint3y = [];
// 第一出口 相邻路口第四点坐标
var Ccknearpoint3x = [];
var Ccknearpoint3y = [];

// 第三个进口流量线圈坐标
var Cjkvolxq3x = [];
var Cjkvolxq3y = [];
// 第三个进口排队长度线圈坐标
var Cjkpdcdxq3x = [];
var Cjkpdcdxq3y = [];
// 第三个进口流量数据坐标
var Cjkvoldata3x = [];
var Cjkvoldata3y = [];
// 第三个进口排队长度数据坐标S
var Cjkpdcddata3x = [];
var Cjkpdcddata3y = [];
// 第四个进口车道线-人行线交点
var Cjkxvsrxx4x = [];
var Cjkxvsrxx4y = [];
// 第四个进口车道线-画布边缘交点
var Cjkxvsbyx4x = [];
var Cjkxvsbyx4y = [];
// 第四个出口车道线-人行线交点
var Cckxvsrxx4x = [];
var Cckxvsrxx4y = [];
// 第四个出口车道线-画布边缘交点
var Cckxvsbyx4x = [];
var Cckxvsbyx4y = [];
// 第四个进口实线坐标
var Cjksxpoint4x = [];
var Cjksxpoint4y = [];
// 第一进口 相邻路口第一点坐标
var Cjknearpoint4x = [];
var Cjknearpoint4y = [];
// 第一出口 相邻路口第四点坐标
var Ccknearpoint4x = [];
var Ccknearpoint4y = [];

// 第四个进口流量线圈坐标
var Cjkvolxq4x = [];
var Cjkvolxq4y = [];
// 第四个进口排队长度线圈坐标
var Cjkpdcdxq4x = [];
var Cjkpdcdxq4y = [];
// 第四个进口流量数据坐标
var Cjkvoldata4x = [];
var Cjkvoldata4y = [];
// 第四个进口排队长度数据坐标S
var Cjkpdcddata4x = [];
var Cjkpdcddata4y = [];

// 第5个进口车道线-人行线交点
var Cjkxvsrxx5x = [];
var Cjkxvsrxx5y = [];
// 第5个进口车道线-画布边缘交点
var Cjkxvsbyx5x = [];
var Cjkxvsbyx5y = [];
// 第5个出口车道线-人行线交点
var Cckxvsrxx5x = [];
var Cckxvsrxx5y = [];
// 第5个出口车道线-画布边缘交点
var Cckxvsbyx5x = [];
var Cckxvsbyx5y = [];
// 第5个进口实线坐标
var Cjksxpoint5x = [];
var Cjksxpoint5y = [];
// 第5进口 相邻路口第一点坐标
var Cjknearpoint5x = [];
var Cjknearpoint5y = [];
// 第5出口 相邻路口第四点坐标
var Ccknearpoint5x = [];
var Ccknearpoint5y = [];

// 第5个进口流量线圈坐标
var Cjkvolxq5x = [];
var Cjkvolxq5y = [];
// 第5个进口排队长度线圈坐标
var Cjkpdcdxq5x = [];
var Cjkpdcdxq5y = [];
// 第5个进口流量数据坐标
var Cjkvoldata5x = [];
var Cjkvoldata5y = [];
// 第5个进口排队长度数据坐标S
var Cjkpdcddata5x = [];
var Cjkpdcddata5y = [];

// 人行线进口边缘坐标1
var Cjfootline1x = [];
var Cjfootline1y = [];
// 人行线进口边缘坐标2
var Cjfootline2x = [];
var Cjfootline2y = [];
// 人行线出口边缘坐标1
var Ccfootline1x = [];
var Ccfootline1y = [];
// 人行线出口边缘坐标2
var Ccfootline2x = [];
var Ccfootline2y = [];
// 子路口各进口车道流向数据
// 进口1车道流向
var Cjkcdlx1 = [];
// 进口2车道流向
var Cjkcdlx2 = [];
// 进口3车道流向
var Cjkcdlx3 = [];
// 进口4车道流向
var Cjkcdlx4 = [];
// 进口5车道流向
var Cjkcdlx5 = [];
// 进口1车道线圈ID
var Cjkcdxqid1 = [];
// 进口2车道线圈ID
var Cjkcdxqid2 = [];
// 进口3车道线圈ID
var Cjkcdxqid3 = [];
// 进口4车道线圈ID
var Cjkcdxqid4 = [];
// 进口5车道线圈ID
var Cjkcdxqid5 = [];
// 检测器ID数组
var CNumDetector = [];
// 线圈ID数组
var CbyLoopID = [];

// 可变车道排序序号，按路口进行排列
var Ckbcdxh1 = [];
var Ckbcdxh2 = [];
var Ckbcdxh3 = [];
var Ckbcdxh4 = [];
var Ckbcdxh5 = [];
// 可变车道的状态数
var Ckbcdzts1 = [];
var Ckbcdzts2 = [];
var Ckbcdzts3 = [];
var Ckbcdzts4 = [];
var Ckbcdzts5 = [];
// 可变车道的状态类型
var Ckbcdztlx1 = [];
var Ckbcdztlx2 = [];
var Ckbcdztlx3 = [];
var Ckbcdztlx4 = [];
var Ckbcdztlx5 = [];

// 进口一车道流向坐标
var Cjkcdlxzb1x = [];
var Cjkcdlxzb1y = [];
// 进口一车道流向坐标
var Cjkcdlxzb2x = [];
var Cjkcdlxzb2y = [];
// 进口一车道流向坐标
var Cjkcdlxzb3x = [];
var Cjkcdlxzb3y = [];
// 进口一车道流向坐标
var Cjkcdlxzb4x = [];
var Cjkcdlxzb4y = [];
// 进口一车道流向坐标
var Cjkcdlxzb5x = [];
var Cjkcdlxzb5y = [];
// 各进口名称坐标点
var Cjknamex = [];
var Cjknamey = [];
// 各进口红绿灯白色背景点坐标
var Ctrafficlightx = [];
var Ctrafficlighty = [];
// 各进口红绿灯白色背景终点点坐标
var Ctrafficlightzdx = [];
var Ctrafficlightzdy = [];
// 红绿灯偏转角度
var Ctrafficlightpzjd = [];
// 路口人行线偏转角度
var Cfootlinelightpzjd = [];
// 右转灯点坐标
var Crightlightx = [];
var Crightlighty = [];
// 通行灯点坐标
var Czhixinglightx = [];
var Czhixinglighty = [];
// 左转灯点坐标
var Cleftlightx = [];
var Cleftlighty = [];
// 第一路口人行灯点位坐标
var Cfootlight1x = [];
var Cfootlight1y = [];
// 第二路口人行灯点位坐标
var Cfootlight2x = [];
var Cfootlight2y = [];
// 第三路口人行灯点位坐标
var Cfootlight3x = [];
var Cfootlight3y = [];
// 第四路口人行灯点位坐标
var Cfootlight4x = [];
var Cfootlight4y = [];
// 第四路口人行灯点位坐标
var Cfootlight5x = [];
var Cfootlight5y = [];
// 实时信息流向变量信息---
// 进口中心线坐标
var Czxxdwx = [];
var Czxxdwy = [];
// 进口左转画线点坐标
var Csslxleftx = [];
var Csslxlefty = [];
// 进口直行画线点坐标
var Csslxzhixingx = [];
var Csslxzhixingy = [];
// 进口右转画线点坐标
var Csslxrightx = [];
var Csslxrighty = [];
// 非机动车直行画线点坐标
var Csslxfjdczxx = [];
var Csslxfjdczxy = [];
// 非机动车左转画线点坐标
var Csslxfjdcleftx = [];
var Csslxfjdclefty = [];
// 非机动车左直画线点坐标
var CsslxfjdcleftAndzxx = [];
var CsslxfjdcleftAndzxy = [];
// 人行线4画线点坐标
var Csslxfootline4x = [];
var Csslxfootline4y = [];
// 人行线10画线点坐标
var Csslxfootline10x = [];
var Csslxfootline10y = [];
// 人行线11画线点坐标
var Csslxfootline11x = [];
var Csslxfootline11y = [];

// 每个出口非机动车直行点坐标
var Cckfjdcforwardx = [];
var Cckfjdcforwardy = [];
// 每个出口非机动车左转坐标
var Cckfjdcleftx = [];
var Cckfjdclefty = [];

// 待转区第一个点位坐标
var Cdzqpoint1x = [];
var Cdzqpoint1y = [];
// 待转区第二个点位坐标
var Cdzqpoint2x = [];
var Cdzqpoint2y = [];
// 待转区第三个点位坐标
var Cdzqpoint3x = [];
var Cdzqpoint3y = [];
// 待转区第四个点位坐标
var Cdzqpoint4x = [];
var Cdzqpoint4y = [];
// 待转区第四个点位坐标
var Cdzqpoint5x = [];
var Cdzqpoint5y = [];
// 自定义关灯标记,默认不使用自定义关灯
var zdygdbj = false;
// 设置流向是否可点击，默认为1，0 是不可点击， 1 可点击，2 仅可变车道可点击， 3 仅可变车道不可点击
var flowIsClick = 1;
var zdDataObj = {};// 匝道相关数据
zdDataObj.zdPreXw = [];// 匝道所有预设相位缓存
// 全局变量 下线----------------------------------------------
// showtypedata类型
// 1 为实时信息显示含左边相位信息
// 2 为实时信息显示含配置相位信息
// 3 为配置相位信息
// 4 路口模型流向信息不可点击
// 5 路口模型包含可点击的相邻路口图标箭头
// ......
// 8 只显示流向与饱和度，风格变化
// 9 显示流向、饱和度、左侧相位、实时信息
// 10 绘制子区道路协调
// 参数说明1、showtypedata类型 2、ids画布ID 3、Initdata路口模型数据 4、nearlkdatas相邻路口数据 5、acsid信号机ID 6、tzcsdata特征参数数据 7、kbcddatas可变车道数据 8、待转屏数据
export function initdata(showtypedata, ids, Initdata, nearlkdatas, acsid, tzcsdata, kbcddatas, dzpdata, flowIsClickType) {
  var redata = JSON.parse(Initdata);// 将JSON字符串转化成JSON对象
  // 解析路口模型数据的信号机id和路口ID
  // 路口ID
  if (!redata) {
    return;
  }
  flowIsClick = (flowIsClickType != undefined) ? flowIsClickType : 1;
  // 路口ID
  var crid = redata.inter_id;
  // 信号机ID
  var dwid = acsid;
  // 路口类型 0正常路口 1 父子路口 2 匝道路口
  var ischild = redata.is_have_son;
  // 父子路口连通的进口id
  fzlkjkid = redata.link_en;
  // 拆分父子路口流向数据
  if (tzcsdata) {
    var movements_paras_json_obj = JSON.parse(tzcsdata);
    // 上面是所有组合流向数据，下面画路口模型时，是父子路口需要将组合数据拆分成父子数据
    if (ischild == 1) {
      var f_movements_json = [];
      var z_movements_json = [];
      for (var i = 0; i < movements_paras_json_obj.movements_paras.length; i++) {
        var obj = movements_paras_json_obj.movements_paras[i];
        if (obj.en_id <= redata.entrances.length) {
          f_movements_json.push(obj);
        } else {
          z_movements_json.push(obj);
        }
      }
      var mov_obj = {
        "movements_paras": f_movements_json,
        "Cmovements_paras": z_movements_json
      };
      tzcsdata = JSON.stringify(mov_obj);
    }
  }
  // 优化代码
  var g = qcanvasid.indexOf(ids);
  if (g != -1) {
    // 所有画布ID
    qcanvasid[g] = ids;
    // 所有信号机ＩＤ
    qxhjid[g] = dwid;
    // 所有路口ID
    qcrossid[g] = crid;
    // 所有路口模型初始化数据
    qinitdata[g] = Initdata;
    // 所有相邻初始化数据
    qnearlkdata[g] = nearlkdatas;
    // 所有特征参数初始化数据
    qtzcsdata[g] = tzcsdata;
    // 所有可变车道初始化数据
    qinitkbcddatas[g] = kbcddatas;
    // 所有路口模型type
    qtype[g] = showtypedata;
    // 所有路口模型预设相位
    qprexw[g] = 0;
    zdDataObj.zdPreXw[g] = 0;
    // 所有待转屏数据

    // 所有路口待转区提示信息（实时数据）
    qdzwmsg[g] = "";
    // 所有路口待转区提示信息（实时数据）
    Cqdzwmsg[g] = "";
    // 所有待转屏数据
    qdzpdata[g] = dzpdata;
    // 可变车道数据信息
    qkbcddata[g] = "";
    all_qkbcddata_arr = [];
    // 可变车道预设数据信息
    qkbcdsetvalues[g] = "";
    // 可变车道数据信息
    Cqkbcddata[g] = "";
    // 可变车道预设数据信息
    Cqkbcdsetvalues[g] = "";
    // 路口类型 0正常路口 1 父子路口
    qlkmxtype[g] = ischild;
    qfzlkjkid[g] = fzlkjkid;
  } else {
    // 所有画布ID
    qcanvasid.push(ids);
    // 所有信号机ＩＤ
    qxhjid.push(dwid);
    // 所有路口ID
    qcrossid.push(crid);
    // 所有路口模型初始化数据
    qinitdata.push(Initdata);
    // 所有相邻初始化数据
    qnearlkdata.push(nearlkdatas);
    // 所有特征参数初始化数据
    qtzcsdata.push(tzcsdata);
    // 所有可变车道初始化数据
    qinitkbcddatas.push(kbcddatas);
    // 所有路口模型type
    qtype.push(showtypedata);
    // 所有路口模型预设相位
    qprexw.push(0);
    zdDataObj.zdPreXw.push(0);
    // 待转屏数据
    qdzpdata.push(dzpdata);
    // 所有路口待转区提示信息（实时数据）
    qdzwmsg.push("");
    // 所有路口待转区提示信息（实时数据）
    Cqdzwmsg.push("");
    // 可变车道数据信息
    qkbcddata.push("");
    all_qkbcddata_arr = [];
    // 可变车道预设数据信息
    qkbcdsetvalues.push("");
    // 可变车道数据信息
    Cqkbcddata.push("");
    // 可变车道预设数据信息
    Cqkbcdsetvalues.push("");
    // 路口类型 0正常路口 1 父子路口
    qlkmxtype.push(ischild);
    qfzlkjkid.push(fzlkjkid);
    // 给与g值
    g = qcanvasid.indexOf(ids);
  }
  // 进入匝道路口模型
  if (ischild == 2) {
    myCanvas = ids;
    zdDataObj.myCanvas = ids;
    zdDataObj.myCanvasArr = qcanvasid;
    zdDataObj.scrollHeight = document.getElementById(ids).scrollHeight;
    zdDataObj.scrollWidth = document.getElementById(ids).scrollWidth;
    zdDataObj.zdcdArr = [redata.entrances[0].motor_lanes.length, redata.entrances[1].motor_lanes.length];
    zdDataObj.zdfzcdNum = redata.entrances[2].motor_lanes.length;
    zdDataObj.jkNameArr = [redata.entrances[0].name, redata.entrances[1].name, redata.entrances[2].name];
    zdDataObj.showtype = showtypedata;
    zdDataObj.tzcsdata = tzcsdata ? JSON.parse(tzcsdata) : "";
    window.rampFn(zdDataObj);
    return;
  }
  // 格式化路口模型数据
  gshdata(Initdata);
  // 初始化特征参数信息
  inittzcsdata(tzcsdata);
  // 格式化相邻路口数据
  nearlkdata(nearlkdatas);
  // 格式化可变车道信息
  initkbcddata(kbcddatas);
  // 初始化路口模型
  lkmxinit(showtypedata, ids);
  // 画道路边线
  lkmxroadline();
  // 计算路口模型点位数据
  drawlkmxdata(g);
  // 绘制路口模型图
  drawlkmxpic(g);
}

// 格式化相邻路口信息
function nearlkdata(jsondata) {
  var all_nearxhjid = new Array(10);
  if (!!jsondata && jsondata.length > 0) {
    var xlJson = JSON.parse(jsondata);
    for (var i = 0; i < xlJson.length; i++) {
      var data = xlJson[i];// 将JSON字符串转化成JSON对象
      all_nearxhjid[data.entrance_id - 1] = data.adjacent_intersection_id;// 相邻路口ID
    }
    nearxhjid = all_nearxhjid.slice(0, pzjd.length);
    Cnearxhjid = [];
    if (lkmxtype == 1) {
      Cnearxhjid = all_nearxhjid.slice(pzjd.length);
    }
  }
}

// 格式化可变车道信息
function initkbcddata(jsondata) {
  if (jsondata != "" && typeof (jsondata) !== "undefined") {
    var data = eval(jsondata) || [];
    for (var i = 0; i < data.length; i++) {
      var id = data[i].entrance_id;
      if (jkid.indexOf(id) != -1) { // 普通路口或者父子路口的父路口
        if (id == 1) {
          // 可变车道排序序号，按路口进行排列
          kbcdxh1[tdj[0] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          kbcdzts1[tdj[0] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          kbcdztlx1[tdj[0] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 2) {
          // 可变车道排序序号，按路口进行排列
          kbcdxh2[tdj[1] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          kbcdzts2[tdj[1] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          kbcdztlx2[tdj[1] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 3) {
          // 可变车道排序序号，按路口进行排列
          kbcdxh3[tdj[2] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          kbcdzts3[tdj[2] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          kbcdztlx3[tdj[2] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 4) {
          // 可变车道排序序号，按路口进行排列
          kbcdxh4[tdj[3] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          kbcdzts4[tdj[3] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          kbcdztlx4[tdj[3] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 5) {
          // 可变车道排序序号，按路口进行排列
          kbcdxh5[tdj[4] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          kbcdzts5[tdj[4] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          kbcdztlx5[tdj[4] - data[i].motor_lane_id] = data[i].states;
        }
      } else if (Cjkid.indexOf(id) != -1) {
        id = Cjkid.indexOf(id) + 1;
        if (id == 1) {
          // 可变车道排序序号，按路口进行排列
          Ckbcdxh1[Ctdj[0] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          Ckbcdzts1[Ctdj[0] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          Ckbcdztlx1[Ctdj[0] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 2) {
          // 可变车道排序序号，按路口进行排列
          Ckbcdxh2[Ctdj[1] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          Ckbcdzts2[Ctdj[1] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          Ckbcdztlx2[Ctdj[1] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 3) {
          // 可变车道排序序号，按路口进行排列
          Ckbcdxh3[Ctdj[2] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          Ckbcdzts3[Ctdj[2] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          Ckbcdztlx3[Ctdj[2] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 4) {
          // 可变车道排序序号，按路口进行排列
          Ckbcdxh4[Ctdj[3] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          Ckbcdzts4[Ctdj[3] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          Ckbcdztlx4[Ctdj[3] - data[i].motor_lane_id] = data[i].states;
        } else if (id == 5) {
          // 可变车道排序序号，按路口进行排列
          Ckbcdxh5[Ctdj[4] - data[i].motor_lane_id] = i + 1;
          // 可变车道的状态数
          Ckbcdzts5[Ctdj[4] - data[i].motor_lane_id] = data[i].states.length;
          // 可变车道的状态类型
          Ckbcdztlx5[Ctdj[4] - data[i].motor_lane_id] = data[i].states;
        }
      }
    }
  }
}

// 格式化路口模型数据
function gshdata(jsondata) {
  var data = JSON.parse(jsondata);// 将JSON字符串转化成JSON对象
  // 路口类型 0 -正常路口 1-父子路口
  lkmxtype = data.is_have_son;
  pzjd.length = 0;
  jkid.length = 0;
  jkfx.length = 0;
  tdj.length = 0;
  tdc.length = 0;
  jkcdlx1.length = 0;
  jkcdlx2.length = 0;
  jkcdlx3.length = 0;
  jkcdlx4.length = 0;
  jkcdlx5.length = 0;
  secondfoot.length = 0;
  // 子路口数据清除
  Cpzjd.length = 0;
  Cjkid.length = 0;
  Cjkfx.length = 0;
  Ctdj.length = 0;
  Ctdc.length = 0;
  Cjkcdlx1.length = 0;
  Cjkcdlx2.length = 0;
  Cjkcdlx3.length = 0;
  Cjkcdlx4.length = 0;
  Cjkcdlx5.length = 0;
  Csecondfoot.length = 0;
  if (data.entrances && data.entrances.length > 0) {
    for (var j = 0; j < data.entrances.length; j++) {
      pzjd[j] = data.entrances[j].degree;
      jkid[j] = data.entrances[j].en_id;
      jkfx[j] = data.entrances[j].orientation;
      tdj[j] = data.entrances[j].motor_lanes.length;// 通道1进口数
      tdc[j] = data.entrances[j].exit_lanes.length; // 通道1出口数
      lkname[j] = data.entrances[j].name;// 进口名称
      secondfoot[j] = 0;// 是否有二次过街
      nearxhjid[j] = "";
      if (data.entrances[j].en_id == 1) {
        for (var q = 0; q < data.entrances[j].motor_lanes.length; q++) {
          var num = data.entrances[j].motor_lanes.length - 1 - q;
          // 每个车道流向
          jkcdlx1[q] = data.entrances[j].motor_lanes[num].lane_flow;
          // 每个车道线圈ID  //存储 车道ID
          jkcdxqid1[q] = data.entrances[j].motor_lanes[num].id;
          // 可变车道排序序号，按路口进行排列
          kbcdxh1[tdj[0] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态数
          kbcdzts1[tdj[0] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态类型
          kbcdztlx1[tdj[0] - data.entrances[j].motor_lanes[num].id] = "";
        }
      } else if (data.entrances[j].en_id == 2) {
        for (var q = 0; q < data.entrances[j].motor_lanes.length; q++) {
          var num = data.entrances[j].motor_lanes.length - 1 - q;
          // 每个车道流向
          jkcdlx2[q] = data.entrances[j].motor_lanes[num].lane_flow;
          // 每个车道线圈ID
          jkcdxqid2[q] = data.entrances[j].motor_lanes[num].id;
          // 可变车道排序序号，按路口进行排列
          kbcdxh2[tdj[1] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态数
          kbcdzts2[tdj[1] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态类型
          kbcdztlx2[tdj[1] - data.entrances[j].motor_lanes[num].id] = "";
        }
      } else if (data.entrances[j].en_id == 3) {
        for (var q = 0; q < data.entrances[j].motor_lanes.length; q++) {
          var num = data.entrances[j].motor_lanes.length - 1 - q;
          // 每个车道流向
          jkcdlx3[q] = data.entrances[j].motor_lanes[num].lane_flow;
          // 每个车道线圈ID
          jkcdxqid3[q] = data.entrances[j].motor_lanes[num].id;
          // 可变车道排序序号，按路口进行排列
          kbcdxh3[tdj[2] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态数
          kbcdzts3[tdj[2] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态类型
          kbcdztlx3[tdj[2] - data.entrances[j].motor_lanes[num].id] = "";
        }
      } else if (data.entrances[j].en_id == 4) {
        for (var q = 0; q < data.entrances[j].motor_lanes.length; q++) {
          var num = data.entrances[j].motor_lanes.length - 1 - q;
          // 每个车道流向
          jkcdlx4[q] = data.entrances[j].motor_lanes[num].lane_flow;
          // 每个车道线圈ID
          jkcdxqid4[q] = data.entrances[j].motor_lanes[num].id;
          // 可变车道排序序号，按路口进行排列
          kbcdxh4[tdj[3] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态数
          kbcdzts4[tdj[3] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态类型
          kbcdztlx4[tdj[3] - data.entrances[j].motor_lanes[num].id] = "";
        }
      } else if (data.entrances[j].en_id == 5) {
        for (var q = 0; q < data.entrances[j].motor_lanes.length; q++) {
          var num = data.entrances[j].motor_lanes.length - 1 - q;
          // 每个车道流向
          jkcdlx5[q] = data.entrances[j].motor_lanes[num].lane_flow;
          // 每个车道线圈ID
          jkcdxqid5[q] = data.entrances[j].motor_lanes[num].id;
          // 可变车道排序序号，按路口进行排列
          kbcdxh5[tdj[4] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态数
          kbcdzts5[tdj[4] - data.entrances[j].motor_lanes[num].id] = 0;
          // 可变车道的状态类型
          kbcdztlx5[tdj[4] - data.entrances[j].motor_lanes[num].id] = "";
        }
      }
    }
  }
  if (lkmxtype == 1) { // 父子路口
    if (data.son_entrances.length > 0) {
      for (var j = 0; j < data.son_entrances.length; j++) {
        Cpzjd[j] = data.son_entrances[j].degree;
        Cjkid[j] = data.son_entrances[j].en_id;
        Cjkfx[j] = data.son_entrances[j].orientation;
        Ctdj[j] = data.son_entrances[j].motor_lanes.length;// 通道1进口数
        Ctdc[j] = data.son_entrances[j].exit_lanes.length; // 通道1出口数
        Clkname[j] = data.son_entrances[j].name;// 进口名称
        Csecondfoot[j] = 0;// 是否有二次过街

        // 子路口id起点是父路口数量+1
        var fen_num = data.entrances.length;
        if (data.son_entrances[j].en_id == (fen_num + 1)) {
          for (var q = 0; q < data.son_entrances[j].motor_lanes.length; q++) {
            var num = data.son_entrances[j].motor_lanes.length - 1 - q;
            // 每个车道流向
            Cjkcdlx1[q] = data.son_entrances[j].motor_lanes[num].lane_flow;
            // 每个车道线圈ID  //存储 车道ID
            Cjkcdxqid1[q] = data.son_entrances[j].motor_lanes[num].id;
            // 可变车道排序序号，按路口进行排列
            Ckbcdxh1[tdj[0] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态数
            Ckbcdzts1[tdj[0] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态类型
            Ckbcdztlx1[tdj[0] - data.son_entrances[j].motor_lanes[num].id] = "";
          }
        } else if (data.son_entrances[j].en_id == (fen_num + 2)) {
          for (var q = 0; q < data.son_entrances[j].motor_lanes.length; q++) {
            var num = data.son_entrances[j].motor_lanes.length - 1 - q;
            // 每个车道流向
            Cjkcdlx2[q] = data.son_entrances[j].motor_lanes[num].lane_flow;
            // 每个车道线圈ID
            Cjkcdxqid2[q] = data.son_entrances[j].motor_lanes[num].id;
            // 可变车道排序序号，按路口进行排列
            Ckbcdxh2[tdj[1] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态数
            Ckbcdzts2[tdj[1] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态类型
            Ckbcdztlx2[tdj[1] - data.son_entrances[j].motor_lanes[num].id] = "";
          }
        } else if (data.son_entrances[j].en_id == (fen_num + 3)) {
          for (var q = 0; q < data.son_entrances[j].motor_lanes.length; q++) {
            var num = data.son_entrances[j].motor_lanes.length - 1 - q;
            // 每个车道流向
            Cjkcdlx3[q] = data.son_entrances[j].motor_lanes[num].lane_flow;
            // 每个车道线圈ID
            Cjkcdxqid3[q] = data.son_entrances[j].motor_lanes[num].id;
            // 可变车道排序序号，按路口进行排列
            Ckbcdxh3[tdj[2] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态数
            Ckbcdzts3[tdj[2] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态类型
            Ckbcdztlx3[tdj[2] - data.son_entrances[j].motor_lanes[num].id] = "";
          }
        } else if (data.son_entrances[j].en_id == (fen_num + 4)) {
          for (var q = 0; q < data.son_entrances[j].motor_lanes.length; q++) {
            var num = data.son_entrances[j].motor_lanes.length - 1 - q;
            // 每个车道流向
            Cjkcdlx4[q] = data.son_entrances[j].motor_lanes[num].lane_flow;
            // 每个车道线圈ID
            Cjkcdxqid4[q] = data.son_entrances[j].motor_lanes[num].id;
            // 可变车道排序序号，按路口进行排列
            Ckbcdxh4[tdj[3] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态数
            Ckbcdzts4[tdj[3] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态类型
            Ckbcdztlx4[tdj[3] - data.son_entrances[j].motor_lanes[num].id] = "";
          }
        } else if (data.son_entrances[j].en_id == (fen_num + 5)) {
          for (var q = 0; q < data.son_entrances[j].motor_lanes.length; q++) {
            var num = data.son_entrances[j].motor_lanes.length - 1 - q;
            // 每个车道流向
            Cjkcdlx5[q] = data.son_entrances[j].motor_lanes[num].lane_flow;
            // 每个车道线圈ID
            Cjkcdxqid5[q] = data.son_entrances[j].motor_lanes[num].id;
            // 可变车道排序序号，按路口进行排列
            Ckbcdxh5[tdj[4] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态数
            Ckbcdzts5[tdj[4] - data.son_entrances[j].motor_lanes[num].id] = 0;
            // 可变车道的状态类型
            Ckbcdztlx5[tdj[4] - data.son_entrances[j].motor_lanes[num].id] = "";
          }
        }
      }
    }
  }
}

// 初始化特征参数信息
function inittzcsdata(jsondata) {
  if (jsondata) {
    var tzcsdata = JSON.parse(jsondata);// 将JSON字符串转化成JSON对象
    if (tzcsdata && tzcsdata.movements_paras) {
      current_movements_paras = tzcsdata.movements_paras;
      // 清空数组
      liuxianghao.length = 0;
      iscontrl.length = 0;
      jinkouid.length = 0;
      jinkoufx.length = 0;
      liuxiangpz.length = 0;
      for (var j = 0; j < tzcsdata.movements_paras.length; j++) {
        var enter_port_direction = tzcsdata.movements_paras[j].enter_port_direction;
        if (enter_port_direction == 14 || enter_port_direction == 15) {
          continue;
        }
        liuxianghao[j] = tzcsdata.movements_paras[j].num_movements;
        iscontrl[j] = tzcsdata.movements_paras[j].if_control;
        jinkouid[j] = tzcsdata.movements_paras[j].en_id;
        jinkoufx[j] = enter_port_direction;
        liuxiangpz[j] = tzcsdata.movements_paras[j].movements_type;
        if (liuxiangpz[j] == 10 || liuxiangpz[j] == 11) {
          secondfoot[jinkouid[j] - 1] = 1;
        }
      }

      if (lkmxtype == 1) {
        // 清空数组
        Cliuxianghao.length = 0;
        Ciscontrl.length = 0;
        Cjinkouid.length = 0;
        Cjinkoufx.length = 0;
        Cliuxiangpz.length = 0;
        for (var j = 0; j < tzcsdata.Cmovements_paras.length; j++) {
          Cliuxianghao[j] = tzcsdata.Cmovements_paras[j].num_movements;
          Ciscontrl[j] = tzcsdata.Cmovements_paras[j].if_control;
          Cjinkouid[j] = tzcsdata.Cmovements_paras[j].en_id;
          Cjinkoufx[j] = tzcsdata.Cmovements_paras[j].enter_port_direction;
          Cliuxiangpz[j] = tzcsdata.Cmovements_paras[j].movements_type;
          // 根据流向判断该进口是否存在二次过街
          if (Cliuxiangpz[j] == 10 || Cliuxiangpz[j] == 11) {
            Csecondfoot[Cjinkouid[j] - 1] = 1;
          }
        }
      }
    }
  }
}

// 格式化实时信息data
export function setInfoExdata(data, degreeData) {
  var setinfodata = JSON.parse(data);// 将JSON字符串转化成JSON对象
  // 解析路口模型数据的信号机id
  var dwid = setinfodata.acs_id;
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qxhjid[i] == "" + dwid && qtype[i] != 3) {
      if (qlkmxtype[i] == 2) {
        zdDataObj.currentData = setinfodata;
        window.rampFn(zdDataObj);
        return;
      }
      // 格式化路口模型数据
      gshdata(qinitdata[i]);
      // 初始化特征参数信息
      inittzcsdata(qtzcsdata[i]);
      // 格式化相邻路口数据
      nearlkdata(qnearlkdata[i]);
      // 格式化可变车道信息
      initkbcddata(qinitkbcddatas[i]);
      // 初始化路口模型
      lkmxinit(qtype[i], qcanvasid[i]);
      // 1画道路边线
      lkmxroadline();
      // 计算路口模型点位数据
      drawlkmxdata(i);
      // 设置待转屏数据
      setDzpData(setinfodata, i);
      var c = document.getElementById(myCanvas);
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, scrollWidth, scrollHeight);
      // 绘制路口模型图
      drawlkmxpic(i);
      // 存储当前路口模型可变车道信息
      if (qinitkbcddatas[i] != "" && typeof (qinitkbcddatas[i]) !== "undefined") {
        all_qkbcddata_arr = eval(qinitkbcddatas[i]) || [];
      }
      // 绘制实时信息
      drawInfoEx();
      if (qtzcsdata[i]) {
        paintDzpByState(setinfodata.movements_state, qtzcsdata[i], i);
      }
      if (degreeData) {
            var setdegreedata = JSON.parse(degreeData);
            drawInfoDegree(setdegreedata);
      }
    }
  }
}
// 格式化饱和度实时信息data
export function setInfoDegreedata(data) {
  var setinfodata = JSON.parse(data); // 将JSON字符串转化成JSON对象
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qlkmxtype[i] == 2) {
      zdDataObj.currentData = setinfodata;
      window.rampFn(zdDataObj);
      return;
    }
    // 格式化路口模型数据
    gshdata(qinitdata[i]);
    // 初始化特征参数信息
    inittzcsdata(qtzcsdata[i]);
    // 格式化相邻路口数据
    nearlkdata(qnearlkdata[i]);
    // 格式化可变车道信息
    initkbcddata(qinitkbcddatas[i]);
    // 初始化路口模型
    lkmxinit(qtype[i], qcanvasid[i]);
    // 1画道路边线
    lkmxroadline();
    // 计算路口模型点位数据
    drawlkmxdata(i);
    drawlkmxpic(i);
    // 绘制实时信息
    drawInfoDegree(setinfodata);
  }
}
// 绘制流向饱和度与路口饱和度
function drawInfoDegree(data) {
  if(showtype === 1) {
    return;
  }
  var loadDegreeArr = [];
  // 绘制中间圆形区域
  if (showtype == 8 || showtype == 9) {
    drawCenterCicle(centerPointX, centerPointY, 0, data.loadDegree);
  }
  if (showtype == 8 || showtype == 9) {
    for (let i = 0; i < liuxianghao.length; i++) {
      loadDegreeArr[i] = 0;
      for (let j = 0; j < data.movementLoadDegree.length; j++) {
        if (liuxianghao[i] == data.movementLoadDegree[j].movementId && data.movementLoadDegree[j].loadDegree > 0) {
            loadDegreeArr[i] = data.movementLoadDegree[j].loadDegree;
            break;
        }
      }
    }
  }
  // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
  // var
  for (var t = 0; t < liuxianghao.length; t++) {
    if(liuxiangpz[t] !== 1 && liuxiangpz[t] !== 2 && liuxiangpz[t] !== 3
      && liuxiangpz[t] !== 5 && liuxiangpz[t] !== 6
      && liuxiangpz[t] !== 7 && liuxiangpz[t] !== 8 && liuxiangpz[t] !== 9) continue;
    if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
      var z = 0;
      for (var p = 0; p < jkid.length; p++) {
        if (jkid[p] == jinkouid[t]) {
          z = p;
        }
      }
      // 绘制车道流向矩形色块
      drawColorRect(t, liuxiangpz[t], pzjd[z], jinkouid[t], myCanvas, 0, loadDegreeArr[t]);
      isclick[t] = 0;
    }
  }
  if (lkmxtype == 1) {
    // 绘制子路口
    // 绘制中间圆形区域
    if (showtype == 8 || showtype == 9) {
      drawCenterCicle(centerPointX, centerPointY, 1, data.loadDegree);
      loadDegreeArr = [];
      for (var i = 0; i < liuxianghao.length; i++) {
        loadDegreeArr[i] = 0;
        for (var j = 0; j < data.movementLoadDegree.length; j++) {
          if (liuxianghao[i] == data.movementLoadDegree[j].movementId && data.movementLoadDegree[j].loadDegree > 0) {
            loadDegreeArr[i] = data.movementLoadDegree[j].loadDegree;
            break;
          }
        }
      }
    }
    // 绘制车道流向矩形色块
    // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
    for (var t = 0; t < Cliuxianghao.length; t++) {
      if(liuxiangpz[t] !== 1 && liuxiangpz[t] !== 2 && liuxiangpz[t] !== 3
        && liuxiangpz[t] !== 5 && liuxiangpz[t] !== 6
        && liuxiangpz[t] !== 7 && liuxiangpz[t] !== 8 && liuxiangpz[t] !== 9) continue;
      if (Ciscontrl[t] == 1 && typeof (Cjinkouid[t]) !== "undefined") {
        var z = 0;
        for (var p = 0; p < Cjkid.length; p++) {
          if (Cjkid[p] == Cjinkouid[t]) {
            z = p;
          }
        }
        // 绘制车道流向矩形色块
        drawColorRect(t, liuxiangpz[t], pzjd[z], jinkouid[t], myCanvas, 1, loadDegreeArr[t]);
        Cisclick[t] = 0;
      }
    }
  }
  // 绘制特征参数流向图标
  liuxiangtb();
}
// 绘制车道流向矩形色块(t 流向号,types 流向配置1-11,angle 偏转角度,jinkouids 进口ID,canvasid 画布id,isfzlknum 是否父子路口,loadDegree 饱和度)
function drawColorRect(t, types, angle, jinkouids, canvasid, isfzlknum, loadDegree) {
	var color = "#08b75a";
	if (loadDegree <= 0.5) {
		color = "#08b75a";
	} else if (loadDegree > 0.5 && loadDegree <= 0.7) {
		color = "#fec600";
	} else if (loadDegree > 0.7 && loadDegree <= 0.8) {
		color = "#FE7200";
	} else if (loadDegree > 0.8) {
		color = "#fe1d00";
	}
	var x1 = 0;
	var y1 = 0;
	let num = 0;
	let offset = 0;
	if (isfzlknum == 0) {
		x1 = jxpoint1x[t];
		y1 = jxpoint1y[t];
		for (let i = 0; i < jkid.length; i++) {
			if (jkid[i] == jinkouids) {
				num = i;
			}
		}
		offset = tdj[num] * tdkd / jkliuxiangcount[num];
	} else if (isfzlknum == 1) {
		x1 = Cjxpoint1x[t];
		y1 = Cjxpoint1y[t];
		for (let i = 0; i < Cjkid.length; i++) {
			if (Cjkid[i] == jinkouids) {
				num = i;
			}
		}
		offset = Ctdj[num] * tdkd / Cjkliuxiangcount[num];
	}
	var canva = document.getElementById(canvasid);
	var context2D = canva.getContext("2d");
	context2D.save();
	context2D.translate(x1, y1);
	context2D.rotate(angle * Math.PI / 180);
	context2D.beginPath();
	context2D.fillStyle = color;
	context2D.fillRect(0, (offset - tdkd * 3 / 4) / 2, tdkd * 2, tdkd * 5 / 6);
	context2D.closePath();
	context2D.stroke();
	context2D.restore();
	if (angle >= 135 && angle <= 225) {
		var ddx = 0;
		var ddy = 0;
		if (angle == 180) {
			ddx = x1 - 9 * namesize;
			ddy = y1 - namesize;
		} else if (angle >= 135 && angle < 180) {
			ddx = x1 - 10 * namesize * Math.sin((angle - 90) * Math.PI * 2 / 360) + namesize * Math.cos((angle - 90) * Math.PI * 2 / 360) * 0.8;
			if (angle <= 145) {
				ddy = y1 + 10 * namesize * Math.cos((angle - 90) * Math.PI * 2 / 360) + namesize * Math.sin((angle - 90) * Math.PI * 2 / 360) * 0.8 - tdkd * 2;
			} else {
				ddy = y1 + 10 * namesize * Math.cos((angle - 90) * Math.PI * 2 / 360) + namesize * Math.sin((angle - 90) * Math.PI * 2 / 360) * 0.8 - tdkd * 1.6;
			}
		} else if (angle > 180 && angle <= 225) {
			ddx = x1 - 10 * namesize * Math.cos((angle - 180) * Math.PI * 2 / 360) + namesize * Math.sin((angle - 180) * Math.PI * 2 / 360) * 0.8 + tdkd * 0.8;
			if (angle >= 210) {
				ddy = y1 - 10 * namesize * Math.sin((angle - 180) * Math.PI * 2 / 360) + namesize * Math.cos((angle - 180) * Math.PI * 2 / 360) * 0.8 - tdkd * 0.6;
			} else if (angle >= 195) {
				ddy = y1 - 10 * namesize * Math.sin((angle - 180) * Math.PI * 2 / 360) + namesize * Math.cos((angle - 180) * Math.PI * 2 / 360) * 0.8 - tdkd * 1;
			} else {
				ddy = y1 - 10 * namesize * Math.sin((angle - 180) * Math.PI * 2 / 360) + namesize * Math.cos((angle - 180) * Math.PI * 2 / 360) * 0.8 - tdkd * 1.4;
			}
		}
		context2D.save();
		context2D.translate(ddx, ddy);
		context2D.rotate((angle - 180) * Math.PI / 180);
		context2D.fillStyle = "#FFFFFF";
		context2D.font = namesize + "px Arial";
		context2D.beginPath();
		context2D.fillText(loadDegree, tdkd * 5 / 2, tdkd * 0.7);
		context2D.closePath();
		context2D.restore();
	} else {
		context2D.save();
		context2D.translate(x1, y1);
		context2D.rotate(angle * Math.PI / 180);
		context2D.fillStyle = "#FFFFFF";
		context2D.font = namesize + "px Arial";
		context2D.beginPath();
		context2D.fillText(loadDegree, tdkd * 5 / 2, tdkd * 0.7);
		context2D.closePath();
		context2D.restore();
	}
}
// 画中心圆形区域
function drawCenterCicle(x, y, fztypes, loadDegree) {
	var color = "#08b75a";
	if (loadDegree <= 0.5) {
		color = "#08b75a";
	} else if (loadDegree > 0.5 && loadDegree <= 0.7) {
		color = "#fec600";
	} else if (loadDegree > 0.7 && loadDegree <= 0.8) {
		color = "#FE7200";
	} else if (loadDegree > 0.8) {
		color = "#fe1d00";
	}
  // 判断是否存在父子路口
  if (fztypes == 0) {
    var c = document.getElementById(myCanvas);
    var cxt = c.getContext("2d");
    cxt.fillStyle = color;
    cxt.beginPath();
    cxt.arc(x, y, tdkd * 4 / 3, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();
    var c6 = document.getElementById(myCanvas);
    var cxt6 = c6.getContext("2d");
    cxt6.fillStyle = "#FFFFFF";
    cxt6.font = namesize + "px Arial";
    cxt6.beginPath();
    cxt6.fillText(loadDegree, x - tdkd * 3 / 4, y + tdkd / 5);
    cxt6.closePath();
  } else if (fztypes == 1) {
    var c = document.getElementById(myCanvas);
    var cxt = c.getContext("2d");
    cxt.fillStyle = color;
    cxt.beginPath();
    cxt.arc(x, y, tdkd * 4 / 3, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();
    var c6 = document.getElementById(myCanvas);
    var cxt6 = c6.getContext("2d");
    cxt6.fillStyle = "#FFFFFF";
    cxt6.font = namesize + "px Arial";
    cxt6.beginPath();
    cxt6.fillText(loadDegree, x - tdkd * 3 / 4, y + tdkd / 5);
    cxt6.closePath();
  }
}
// 根据实时信息画待转屏
function paintDzpByState(movements_state, dqacstzcsdata, index) {
  var tzcs = "";
  if (dqacstzcsdata) {
    tzcs = eval("(" + dqacstzcsdata + ")");
  }
  var list = [];
  // 当前路口下的所有待转屏
  if (!qdzpdata[index]) {
    // console.log("待转屏信息数据为空");
    return;
  }
  var dqdzps = JSON.parse(qdzpdata[index]);
  if (tzcs && tzcs.movements_paras && tzcs.movements_paras.length > 0) {
    for (var i = 0; i < tzcs.movements_paras.length; i++) {
      // 判断是否是待转屏
      if (tzcs.movements_paras[i].enter_port_direction == 14) {
        // 流向状态,32最大流向数，0-关灯1-红2-黄3-绿
        var lx_type = movements_state[tzcs.movements_paras[i].num_movements - 1];
        // 获取待转屏对应的灯色状态
        var dzp_type = stateConverter(lx_type);
        // 获取进口ID
        var jkid_cdh_w = parseInt(tzcs.movements_paras[i].fixed_grn_time);
        var enid = (240 & jkid_cdh_w) >> 4;
        // 获取待转屏的实际状态
        var real_state = lightConvertType(enid, dqdzps, dzp_type);
        var ps = {
          entrance_id: enid,
          types: real_state
        };
        list.push(ps);
      }
    }
  }
  // 画待转区
  paintDzp(list);
}

/** 带转屏状态转换方法,流向状态转灯色，通过灯色找到设置的状态index索引，通过索引找到设置的值
 *
 * @param type  灯色-含义-状态：  0-关灯-4 1-红灯-1 2-黄灯-3 3-绿灯-2
 * @returns {number}
 */
function stateConverter(type) {
  var light_color = 0;
  if (type == 0) {
    light_color = 4;
  } else if (type == 1) {
    light_color = 1;
  } else if (type == 2) {
    light_color = 3;
  } else if (type == 3) {
    light_color = 2;
  }
  return light_color;
}

/**
 *
 * @param enid
 * @param dqdzps
 */
function lightConvertType(enid, dqdzps, light_type) {
  var real_state = 0;
  for (var i = 0; i < dqdzps.length; i++) {
    if (dqdzps[i].en_id == enid) {
      var states = dqdzps[i].ps.states.split(",");
      real_state = states[light_type - 1];
      break;
    }
  }
  return real_state;
}
// 设置待转屏数据
function setDzpData(setinfodata, i) {
  // 实时流向
  // 流向状态 1红 2黄 3绿
  byMovementsState = deepCopy(setinfodata.movements_state);
  // 预设相位
  advanceset.length = 0;
  for (var y = 0; y < setinfodata.phase_movements_info.length; y++) {
    var ys = setinfodata.phase_movements_info[y];
    if (ys != 0) {
      // 有符号转化为无符号
      if (ys < 0) {
        ys = ys >>> 0;
      }
      advanceset[y] = ys;
    }
  }
  // 当前相位号
  nowsetnum = setinfodata.current_phase_num;
  // 当前相位剩余时间
  sytime = setinfodata.current_phase_remaining_time;

  // 所有路口待转区提示信息（实时数据）
  qdzwmsg[i] = escapeDzpWaitAreas(setinfodata.wait_areas);
  // 若存在父子路口
  if (lkmxtype == 1) { // SS
    // 实时流向
    CbyMovementsState = deepCopy(byMovementsState);

    // 预设相位
    Cadvanceset = deepCopy(advanceset);
    // 当前相位号
    Cnowsetnum = setinfodata.current_phase_num;
    // 当前相位剩余时间
    Csytime = setinfodata.current_phase_remaining_time;

    // 所有路口待转区提示信息（实时数据）
    Cqdzwmsg[i] = escapeDzpWaitAreas(setinfodata.wait_areas);
  }
}
// 画待转区
export function paintDzp(wait_areas) {
  // 鼠标事件需要
  for (var q = 0; q < qcanvasid.length; q++) {
    if (qcanvasid[q] == myCanvas) {
      qdzwmsg[q] = escapeDzpWaitAreas(wait_areas);
    }
  }
  // 画图
  for (var w = 0; w < wait_areas.length; w++) {
    for (var j = 0; j < jkid.length; j++) {
      if (jkid[j] == wait_areas[w].entrance_id) {
        drawdzqshow(j, wait_areas[w].types, 1);
        break;
      }
    }
  }
}
// 转换待转区信息
function escapeDzpWaitAreas(wait_areas) {
  // 代转区信息
  var waitvalue = "";
  if (wait_areas != null) {
    for (var w = 0; w < wait_areas.length; w++) {
      var entrid = wait_areas[w].entrance_id;
      var tys = wait_areas[w].types;
      var val = entrid + "|" + tys;
      if (waitvalue == "") {
        waitvalue = val;
      } else {
        waitvalue = waitvalue + ";" + val;
      }
    }
  }
  return waitvalue;
}
// 初始化 获取画布参数信息   获取图像类别
function lkmxinit(showtypedata, ids) {
  // 初始化路口模型静态信息
  myCanvas = ids;
  // 考虑画多个路口模型的情况
  var lastStr = myCanvas.charAt(myCanvas.length - 1);
  addDivId = "lkmxLeftCavAddDiv" + parseInt(lastStr);
  addDivCavId = "lkmxLeftAdd" + parseInt(lastStr);
  scrollHeight = document.getElementById(ids).scrollHeight;
  scrollWidth = document.getElementById(ids).scrollWidth;
  showtype = showtypedata;
  // showtype类型 1 为实时信息显示含左边相位信息  2为实时信息显示含配置相位信息 3 为配置相位信息
  if (showtypedata == 1 || showtypedata == 7 || showtypedata == 9) {
    // 普通路口
    if (lkmxtype == 0) {
      if (scrollHeight <= scrollWidth * 0.85) {
        tdkd = scrollHeight / 20;
      } else {
        tdkd = scrollWidth * 0.85 / 20;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) { // 父子路口
      if (scrollHeight <= scrollWidth * 0.75) {
        tdkd = scrollHeight / 35;
      } else {
        tdkd = scrollWidth * 0.75 / 35;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else if (showtypedata == 2) {
    // 若普通路口
    if (lkmxtype == 0) {
      if (scrollHeight <= scrollWidth * 0.85) {
        tdkd = scrollHeight / 20;
      } else {
        tdkd = scrollWidth * 0.85 / 20;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) { // 父子路口
      if (scrollHeight <= scrollWidth * 0.75) {
        tdkd = scrollHeight / 35;
      } else {
        tdkd = scrollWidth * 0.75 / 35;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else if (showtypedata == 3 || showtypedata == 8) {
    // 若普通路口
    if (lkmxtype == 0) {
      tdkd = scrollHeight / 20;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) { // 父子路口
      tdkd = scrollHeight / 35;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else if (showtypedata == 4) {
    // 若存在父子路口
    if (lkmxtype == 0) {
      tdkd = scrollHeight / 20;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) {
      tdkd = scrollHeight / 35;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else if (showtypedata == 5 || showtypedata == 10) {
    // 若普通路口
    if (lkmxtype == 0) {
      tdkd = scrollHeight / 20;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) { // 父子路口
      tdkd = scrollHeight / 35;
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else if (showtypedata == 6) {
    // 若普通路口
    if (lkmxtype == 0) {
      if (scrollHeight <= scrollWidth * 0.85) {
        tdkd = scrollHeight / 20;
      } else {
        tdkd = scrollWidth * 0.85 / 20;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    } else if (lkmxtype == 1) { // 父子路口
      if (scrollHeight <= scrollWidth * 0.75) {
        tdkd = scrollHeight / 35;
      } else {
        tdkd = scrollWidth * 0.75 / 35;
      }
      namesize = tdkd * 3 / 4;
      zxcd = tdkd * 2;
    }
  } else {
    alert("请输入正确类型");
  }
}

// 画图
function drawlkmxdata(g) {
  // 第一个进口流量线圈坐标
  jkvolxq1x.length = 0;
  jkvolxq1y.length = 0;
  // 第一个进口排队长度线圈坐标
  jkpdcdxq1x.length = 0;
  jkpdcdxq1y.length = 0;
  // 第二个进口流量线圈坐标
  jkvolxq2x.length = 0;
  jkvolxq2y.length = 0;
  // 第二个进口排队长度线圈坐标
  jkpdcdxq2x.length = 0;
  jkpdcdxq2y.length = 0;
  // 第三个进口流量线圈坐标
  jkvolxq3x.length = 0;
  jkvolxq3y.length = 0;
  // 第三个进口排队长度线圈坐标
  jkpdcdxq3x.length = 0;
  jkpdcdxq3y.length = 0;
  // 第四个进口流量线圈坐标
  jkvolxq4x.length = 0;
  jkvolxq4y.length = 0;
  // 第四个进口排队长度线圈坐标
  jkpdcdxq4x.length = 0;
  jkpdcdxq4y.length = 0;
  // 第五个进口流量线圈坐标
  jkvolxq5x.length = 0;
  jkvolxq5y.length = 0;
  // 第五个进口排队长度线圈坐标
  jkpdcdxq5x.length = 0;
  jkpdcdxq5y.length = 0;

  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    // 确定路口模型中心点坐标（右边路口模型的部分中心点坐标）
    centerPointX = lkmxleftx + 0.5 * (scrollWidth - lkmxleftx);
    centerPointY = 0.5 * scrollHeight;
  } else if (lkmxtype == 1) {
    var lsfzlkid = qfzlkjkid[g].split(",");
    // 确定路口模型中心点坐标（右边路口模型的部分中心点坐标）
    var cx = lkmxleftx + 0.5 * (scrollWidth - lkmxleftx);
    var cy = 0.5 * scrollHeight;
    var fjd = 0;
    for (var i = 0; i < jkid.length; i++) {
      if (jkid[i] == lsfzlkid[0]) {
        fjd = pzjd[i];
      }
    }
    var zjd = 0;
    for (var i = 0; i < Cjkid.length; i++) {
      if (Cjkid[i] == lsfzlkid[1]) {
        zjd = Cpzjd[i];
      }
    }
    var zxdlength = 0;
    if (scrollWidth - lkmxleftx < scrollHeight) {
      zxdlength = (scrollWidth - lkmxleftx) / 4;
    } else {
      zxdlength = scrollHeight / 4;
    }

    // 父路口模型中心点坐标
    if (fjd == 0 || fjd == 360) {
      centerPointX = cx - zxdlength;
      centerPointY = cy;
    } else if (fjd > 0 && fjd < 90) {
      centerPointX = cx - Math.cos(fjd * Math.PI / 180) * zxdlength;
      centerPointY = cy - Math.sin(fjd * Math.PI / 180) * zxdlength;
    } else if (fjd == 90) {
      centerPointX = cx;
      centerPointY = cy - zxdlength;
    } else if (fjd > 90 && fjd < 180) {
      centerPointX = cx + Math.cos((180 - fjd) * Math.PI / 180) * zxdlength;
      centerPointY = cy - Math.sin((180 - fjd) * Math.PI / 180) * zxdlength;
    } else if (fjd == 180) {
      centerPointX = cx + zxdlength;
      centerPointY = cy;
    } else if (fjd > 180 && fjd < 270) {
      centerPointX = cx + Math.cos((fjd - 180) * Math.PI / 180) * zxdlength;
      centerPointY = cy + Math.sin((fjd - 180) * Math.PI / 180) * zxdlength;
    } else if (fjd == 270) {
      centerPointX = cx;
      centerPointY = cy + zxdlength;
    } else if (fjd > 270 && fjd < 360) {
      centerPointX = cx - Math.sin((fjd - 270) * Math.PI / 180) * zxdlength;
      centerPointY = cy + Math.cos((fjd - 270) * Math.PI / 180) * zxdlength;
    }

    // 子路口模型中心点坐标
    if (zjd == 0 || zjd == 360) {
      CcenterPointX = cx - zxdlength;
      CcenterPointY = cy;
    } else if (zjd > 0 && zjd < 90) {
      CcenterPointX = cx - Math.cos(zjd * Math.PI / 180) * zxdlength;
      CcenterPointY = cy - Math.sin(zjd * Math.PI / 180) * zxdlength;
    } else if (zjd == 90) {
      CcenterPointX = cx;
      CcenterPointY = cy - zxdlength;
    } else if (zjd > 90 && zjd < 180) {
      CcenterPointX = cx + Math.cos((180 - zjd) * Math.PI / 180) * zxdlength;
      CcenterPointY = cy - Math.sin((180 - zjd) * Math.PI / 180) * zxdlength;
    } else if (zjd == 180) {
      CcenterPointX = cx + zxdlength;
      CcenterPointY = cy;
    } else if (zjd > 180 && zjd < 270) {
      CcenterPointX = cx + Math.cos((zjd - 180) * Math.PI / 180) * zxdlength;
      CcenterPointY = cy + Math.sin((zjd - 180) * Math.PI / 180) * zxdlength;
    } else if (zjd == 270) {
      CcenterPointX = cx;
      CcenterPointY = cy + zxdlength;
    } else if (zjd > 270 && zjd < 360) {
      CcenterPointX = cx - Math.sin((zjd - 270) * Math.PI / 180) * zxdlength;
      CcenterPointY = cy + Math.cos((zjd - 270) * Math.PI / 180) * zxdlength;
    }
  }
  for (var i = 0; i < pzjd.length; i++) {
    if (pzjd[i] >= 0 && pzjd[i] < 90 || pzjd[i] == 360) {
      // 度数小于90
      // 车道中心点坐标
      zcxtx[i] = centerPointX + Math.cos(pzjd[i] * 2 * Math.PI / 360) * zxcd;
      zcxty[i] = centerPointY + Math.sin(pzjd[i] * 2 * Math.PI / 360) * zxcd;

      // 车道进口边缘坐标
      jcxtx[i] = centerPointX + Math.cos(pzjd[i] * 2 * Math.PI / 360) * zxcd + Math.sin(pzjd[i] * 2 * Math.PI / 360) * tdj[i] * tdkd;
      jcxty[i] = centerPointY + Math.sin(pzjd[i] * 2 * Math.PI / 360) * zxcd - Math.cos(pzjd[i] * 2 * Math.PI / 360) * tdj[i] * tdkd;

      // 车道出口边缘坐标
      ccxtx[i] = centerPointX + Math.cos(pzjd[i] * 2 * Math.PI / 360) * zxcd - Math.sin(pzjd[i] * 2 * Math.PI / 360) * tdc[i] * tdkd;
      ccxty[i] = centerPointY + Math.sin(pzjd[i] * 2 * Math.PI / 360) * zxcd + Math.cos(pzjd[i] * 2 * Math.PI / 360) * tdc[i] * tdkd;
    } else if (pzjd[i] >= 90 && pzjd[i] < 180) {
      // 度数大于等于90 小于180
      // var cxt2=c1.getContext("2d");
      // 车道中心点坐标
      zcxtx[i] = centerPointX - Math.sin((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd;
      zcxty[i] = centerPointY + Math.cos((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd;

      // 车道进口边缘坐标
      jcxtx[i] = centerPointX - Math.sin((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd + Math.cos((pzjd[i] - 90) * 2 * Math.PI / 360) * tdj[i] * tdkd;
      jcxty[i] = centerPointY + Math.cos((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd + Math.sin((pzjd[i] - 90) * 2 * Math.PI / 360) * tdj[i] * tdkd;

      // 车道出口边缘坐标
      ccxtx[i] = centerPointX - Math.sin((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd - Math.cos((pzjd[i] - 90) * 2 * Math.PI / 360) * tdc[i] * tdkd;
      ccxty[i] = centerPointY + Math.cos((pzjd[i] - 90) * 2 * Math.PI / 360) * zxcd - Math.sin((pzjd[i] - 90) * 2 * Math.PI / 360) * tdc[i] * tdkd;
    } else if (pzjd[i] >= 180 && pzjd[i] < 270) {
      // 度数大于等于180小于270
      // var cxt3=c1.getContext("2d");
      // 车道中心点坐标
      zcxtx[i] = centerPointX - Math.cos((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd;
      zcxty[i] = centerPointY - Math.sin((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd;
      // 车道进口边缘坐标
      jcxtx[i] = centerPointX - Math.cos((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd - Math.sin((pzjd[i] - 180) * 2 * Math.PI / 360) * tdj[i] * tdkd;
      jcxty[i] = centerPointY - Math.sin((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd + Math.cos((pzjd[i] - 180) * 2 * Math.PI / 360) * tdj[i] * tdkd;
      // 车道出口边缘坐标
      ccxtx[i] = centerPointX - Math.cos((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd + Math.sin((pzjd[i] - 180) * 2 * Math.PI / 360) * tdc[i] * tdkd;
      ccxty[i] = centerPointY - Math.sin((pzjd[i] - 180) * 2 * Math.PI / 360) * zxcd - Math.cos((pzjd[i] - 180) * 2 * Math.PI / 360) * tdc[i] * tdkd;
    } else if (pzjd[i] >= 270 && pzjd[i] < 360) {
      // 度数大于270小于360
      // var cxt4=c1.getContext("2d");
      // 车道中心点坐标
      zcxtx[i] = centerPointX + Math.sin((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd;
      zcxty[i] = centerPointY - Math.cos((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd;
      // 车道进口边缘坐标
      jcxtx[i] = centerPointX + Math.sin((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd - Math.cos((pzjd[i] - 270) * 2 * Math.PI / 360) * tdj[i] * tdkd;
      jcxty[i] = centerPointY - Math.cos((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd - Math.sin((pzjd[i] - 270) * 2 * Math.PI / 360) * tdj[i] * tdkd;
      // 车道出口边缘坐标
      ccxtx[i] = centerPointX + Math.sin((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd + Math.cos((pzjd[i] - 270) * 2 * Math.PI / 360) * tdc[i] * tdkd;
      ccxty[i] = centerPointY - Math.cos((pzjd[i] - 270) * 2 * Math.PI / 360) * zxcd + Math.sin((pzjd[i] - 270) * 2 * Math.PI / 360) * tdc[i] * tdkd;
      // cxt4.stroke();
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    for (var i = 0; i < Cpzjd.length; i++) {
      if (Cpzjd[i] >= 0 && Cpzjd[i] < 90 || Cpzjd[i] == 360) {
        // 度数小于90
        // 车道中心点坐标
        Czcxtx[i] = CcenterPointX + Math.cos(Cpzjd[i] * 2 * Math.PI / 360) * zxcd;
        Czcxty[i] = CcenterPointY + Math.sin(Cpzjd[i] * 2 * Math.PI / 360) * zxcd;

        // 车道进口边缘坐标
        Cjcxtx[i] = CcenterPointX + Math.cos(Cpzjd[i] * 2 * Math.PI / 360) * zxcd + Math.sin(Cpzjd[i] * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        Cjcxty[i] = CcenterPointY + Math.sin(Cpzjd[i] * 2 * Math.PI / 360) * zxcd - Math.cos(Cpzjd[i] * 2 * Math.PI / 360) * Ctdj[i] * tdkd;

        // 车道出口边缘坐标
        Cccxtx[i] = CcenterPointX + Math.cos(Cpzjd[i] * 2 * Math.PI / 360) * zxcd - Math.sin(Cpzjd[i] * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
        Cccxty[i] = CcenterPointY + Math.sin(Cpzjd[i] * 2 * Math.PI / 360) * zxcd + Math.cos(Cpzjd[i] * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
      } else if (Cpzjd[i] >= 90 && Cpzjd[i] < 180) {
        // 度数大于等于90 小于180
        // var cxt2=c1.getContext("2d");
        // 车道中心点坐标
        Czcxtx[i] = CcenterPointX - Math.sin((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd;
        Czcxty[i] = CcenterPointY + Math.cos((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd;

        // 车道进口边缘坐标
        Cjcxtx[i] = CcenterPointX - Math.sin((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd + Math.cos((Cpzjd[i] - 90) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        Cjcxty[i] = CcenterPointY + Math.cos((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd + Math.sin((Cpzjd[i] - 90) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;

        // 车道出口边缘坐标
        Cccxtx[i] = CcenterPointX - Math.sin((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd - Math.cos((Cpzjd[i] - 90) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
        Cccxty[i] = CcenterPointY + Math.cos((Cpzjd[i] - 90) * 2 * Math.PI / 360) * zxcd - Math.sin((Cpzjd[i] - 90) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
      } else if (Cpzjd[i] >= 180 && Cpzjd[i] < 270) {
        // 度数大于等于180小于270
        // var cxt3=c1.getContext("2d");
        // 车道中心点坐标
        Czcxtx[i] = CcenterPointX - Math.cos((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd;
        Czcxty[i] = CcenterPointY - Math.sin((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd;
        // 车道进口边缘坐标
        Cjcxtx[i] = CcenterPointX - Math.cos((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd - Math.sin((Cpzjd[i] - 180) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        Cjcxty[i] = CcenterPointY - Math.sin((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd + Math.cos((Cpzjd[i] - 180) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        // 车道出口边缘坐标
        Cccxtx[i] = CcenterPointX - Math.cos((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd + Math.sin((Cpzjd[i] - 180) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
        Cccxty[i] = CcenterPointY - Math.sin((Cpzjd[i] - 180) * 2 * Math.PI / 360) * zxcd - Math.cos((Cpzjd[i] - 180) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
      } else if (Cpzjd[i] >= 270 && Cpzjd[i] < 360) {
        // 度数大于270小于360
        // var cxt4=c1.getContext("2d");
        // 车道中心点坐标
        Czcxtx[i] = CcenterPointX + Math.sin((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd;
        Czcxty[i] = CcenterPointY - Math.cos((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd;
        // 车道进口边缘坐标
        Cjcxtx[i] = CcenterPointX + Math.sin((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd - Math.cos((Cpzjd[i] - 270) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        Cjcxty[i] = CcenterPointY - Math.cos((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd - Math.sin((Cpzjd[i] - 270) * 2 * Math.PI / 360) * Ctdj[i] * tdkd;
        // 车道出口边缘坐标
        Cccxtx[i] = CcenterPointX + Math.sin((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd + Math.cos((Cpzjd[i] - 270) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
        Cccxty[i] = CcenterPointY - Math.cos((Cpzjd[i] - 270) * 2 * Math.PI / 360) * zxcd + Math.sin((Cpzjd[i] - 270) * 2 * Math.PI / 360) * Ctdc[i] * tdkd;
        // cxt4.stroke();
      }
    }
  }
  // --------------------------------
  for (var j = 0; j < pzjd.length; j++) {
    var k;
    if (j == pzjd.length - 1) {
      k = 0;
    } else {
      k = j + 1;
    }
    // 判断中心线的特殊性质
    if (centerPointY - zcxty[j] == 0 && centerPointY - zcxty[k] != 0 && centerPointX - zcxtx[k] != 0) {
      // 第一条线在X轴第二条线不在X轴也不在Y轴
      jdzbx[j] = (centerPointX - zcxtx[k]) * (ccxty[j] - jcxty[k]) / (centerPointY - zcxty[k]) + jcxtx[k];
      jdzby[j] = ccxty[j];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (centerPointY - zcxty[j] == 0 && centerPointX - zcxtx[k] == 0) {
      // 第一条线在X轴第二条线在Y轴
      jdzbx[j] = jcxtx[k];
      jdzby[j] = ccxty[j];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (centerPointX - zcxtx[j] == 0 && centerPointY - zcxty[k] != 0 && centerPointX - zcxtx[k] != 0) {
      // 第一条线在Y轴第二条线不在X轴也不在Y轴
      jdzbx[j] = ccxtx[j];
      jdzby[j] = (ccxtx[j] - jcxtx[k]) * (centerPointY - zcxty[k]) / (centerPointX - zcxtx[k]) + jcxty[k];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (centerPointX - zcxtx[j] == 0 && centerPointY - zcxty[k] == 0) {
      // 第一条线在Y轴第二条线在X轴
      jdzbx[j] = ccxtx[j];
      jdzby[j] = jcxty[k];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (centerPointY - zcxty[k] == 0 && centerPointY - zcxty[j] != 0 && centerPointX - zcxtx[j] != 0) {
      // 第二条线在X轴第一条线不在X轴也不在Y轴
      jdzbx[j] = (centerPointX - zcxtx[j]) * (jcxty[k] - ccxty[j]) / (centerPointY - zcxty[j]) + ccxtx[j];
      jdzby[j] = jcxty[k];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (centerPointX - zcxtx[k] == 0 && centerPointY - zcxty[j] != 0 && centerPointX - zcxtx[j] != 0) {
      // 第二条线在Y轴第一条线不在X轴也不在Y轴
      jdzbx[j] = jcxtx[k];
      jdzby[j] = (jcxtx[k] - ccxtx[j]) * (centerPointY - zcxty[j]) / (centerPointX - zcxtx[j]) + ccxty[j];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    } else if (pzjd[k] - pzjd[j] == 180 || pzjd[j] - pzjd[k] == 180) {
      // 第一条线出口与第二条线进口平行
      jdzbx[j] = ccxtx[j];
      jdzby[j] = ccxty[j];
      // 第一条线出口坐标
      cjcdx[j] = ccxtx[j];
      cjcdy[j] = ccxty[j];
      // 第二条线进口坐标
      jjcdx[k] = jcxtx[k];
      jjcdy[k] = jcxty[k];
    } else {
      jdzby[j] = ((centerPointX - zcxtx[k]) / (centerPointY - zcxty[k]) * jcxty[k] - (centerPointX - zcxtx[j]) / (centerPointY - zcxty[j]) * ccxty[j] + ccxtx[j] - jcxtx[k]) / ((centerPointX - zcxtx[k]) / (centerPointY - zcxty[k]) - (centerPointX - zcxtx[j]) / (centerPointY - zcxty[j]));
      jdzbx[j] = (centerPointX - zcxtx[j]) / (centerPointY - zcxty[j]) * jdzby[j] - (centerPointX - zcxtx[j]) / (centerPointY - zcxty[j]) * ccxty[j] + ccxtx[j];
      // 第一条线出口坐标
      cjcdx[j] = jdzbx[j];
      cjcdy[j] = jdzby[j];
      // 第二条线进口坐标
      jjcdx[k] = jdzbx[j];
      jjcdy[k] = jdzby[j];
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    for (var j = 0; j < Cpzjd.length; j++) {
      var k;
      if (j == Cpzjd.length - 1) {
        k = 0;
      } else {
        k = j + 1;
      }
      // 判断中心线的特殊性质
      if (CcenterPointY - Czcxty[j] == 0 && CcenterPointY - Czcxty[k] != 0 && CcenterPointX - Czcxtx[k] != 0) {
        // 第一条线在X轴第二条线不在X轴也不在Y轴
        Cjdzbx[j] = (CcenterPointX - Czcxtx[k]) * (Cccxty[j] - Cjcxty[k]) / (CcenterPointY - Czcxty[k]) + Cjcxtx[k];
        Cjdzby[j] = Cccxty[j];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (CcenterPointY - Czcxty[j] == 0 && CcenterPointX - Czcxtx[k] == 0) {
        // 第一条线在X轴第二条线在Y轴
        Cjdzbx[j] = Cjcxtx[k];
        Cjdzby[j] = Cccxty[j];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (CcenterPointX - Czcxtx[j] == 0 && CcenterPointY - Czcxty[k] != 0 && CcenterPointX - Czcxtx[k] != 0) {
        // 第一条线在Y轴第二条线不在X轴也不在Y轴
        Cjdzbx[j] = Cccxtx[j];
        Cjdzby[j] = (Cccxtx[j] - Cjcxtx[k]) * (CcenterPointY - Czcxty[k]) / (CcenterPointX - Czcxtx[k]) + Cjcxty[k];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (CcenterPointX - Czcxtx[j] == 0 && CcenterPointY - Czcxty[k] == 0) {
        // 第一条线在Y轴第二条线在X轴
        Cjdzbx[j] = Cccxtx[j];
        Cjdzby[j] = Cjcxty[k];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (CcenterPointY - Czcxty[k] == 0 && CcenterPointY - Czcxty[j] != 0 && CcenterPointX - Czcxtx[j] != 0) {
        // 第二条线在X轴第一条线不在X轴也不在Y轴
        Cjdzbx[j] = (CcenterPointX - Czcxtx[j]) * (Cjcxty[k] - Cccxty[j]) / (CcenterPointY - Czcxty[j]) + Cccxtx[j];
        Cjdzby[j] = Cjcxty[k];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (CcenterPointX - Czcxtx[k] == 0 && CcenterPointY - Czcxty[j] != 0 && CcenterPointX - Czcxtx[j] != 0) {
        // 第二条线在Y轴第一条线不在X轴也不在Y轴
        Cjdzbx[j] = Cjcxtx[k];
        Cjdzby[j] = (Cjcxtx[k] - Cccxtx[j]) * (CcenterPointY - Czcxty[j]) / (CcenterPointX - Czcxtx[j]) + Cccxty[j];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      } else if (Cpzjd[k] - Cpzjd[j] == 180 || Cpzjd[j] - Cpzjd[k] == 180) {
        // 第一条线出口与第二条线进口平行
        Cjdzbx[j] = Cccxtx[j];
        Cjdzby[j] = Cccxty[j];
        // 第一条线出口坐标
        Ccjcdx[j] = Cccxtx[j];
        Ccjcdy[j] = Cccxty[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjcxtx[k];
        Cjjcdy[k] = Cjcxty[k];
      } else {
        Cjdzby[j] = ((CcenterPointX - Czcxtx[k]) / (CcenterPointY - Czcxty[k]) * Cjcxty[k] - (CcenterPointX - Czcxtx[j]) / (CcenterPointY - Czcxty[j]) * Cccxty[j] + Cccxtx[j] - Cjcxtx[k]) / ((CcenterPointX - Czcxtx[k]) / (CcenterPointY - Czcxty[k]) - (CcenterPointX - Czcxtx[j]) / (CcenterPointY - Czcxty[j]));
        Cjdzbx[j] = (CcenterPointX - Czcxtx[j]) / (CcenterPointY - Czcxty[j]) * Cjdzby[j] - (CcenterPointX - Czcxtx[j]) / (CcenterPointY - Czcxty[j]) * Cccxty[j] + Cccxtx[j];
        // 第一条线出口坐标
        Ccjcdx[j] = Cjdzbx[j];
        Ccjcdy[j] = Cjdzby[j];
        // 第二条线进口坐标
        Cjjcdx[k] = Cjdzbx[j];
        Cjjcdy[k] = Cjdzby[j];
      }
    }
  }
  // 计算点位信息 进口边线与画布焦点  出口边线与画布焦点 道路中心线与画布焦点 道路进口弧线点 道路出口弧线点tdkd
  for (var p = 0; p < pzjd.length; p++) {
    if (pzjd[p] == 0 || pzjd[p] == 360) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk2x;
      jkvshby[p] = jjcdy[p];
      // 出口边线与画布焦点
      ckvshbx[p] = lk2x;
      ckvshby[p] = cjcdy[p];
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk2x;
      zxxvshby[p] = centerPointY;
      // 相邻路口画图片点坐标
      nearimgpointx[p] = lk2x;
      nearimgpointy[p] = centerPointY;
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] + tdkd;
      jkhxdy[p] = jjcdy[p];
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] + tdkd;
      ckhxdy[p] = cjcdy[p];
    } else if (pzjd[p] > 0 && pzjd[p] < 90) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk2x;
      jkvshby[p] = jjcdy[p] + (lk2x - jjcdx[p]) * Math.tan(pzjd[p] * Math.PI * 2 / 360);
      // 出口边线与画布焦点
      ckvshbx[p] = lk2x;
      ckvshby[p] = cjcdy[p] + (lk2x - cjcdx[p]) * Math.tan(pzjd[p] * Math.PI * 2 / 360);
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk2x;
      zxxvshby[p] = centerPointY + (lk2x - centerPointX) * Math.tan(pzjd[p] * Math.PI * 2 / 360);

      if (zxxvshby[p] > lk3y) {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = centerPointX + (lk3y - centerPointY) / Math.tan(pzjd[p] * Math.PI * 2 / 360);
        nearimgpointy[p] = lk3y;
      } else {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = lk2x;
        nearimgpointy[p] = centerPointY + (lk2x - centerPointX) * Math.tan(pzjd[p] * Math.PI * 2 / 360);
      }

      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd;
      jkhxdy[p] = jjcdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd;
      ckhxdy[p] = cjcdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd;
    } else if (pzjd[p] == 90) {
      // 进口边线与画布焦点
      jkvshbx[p] = jjcdx[p];
      jkvshby[p] = lk3y;
      // 出口边线与画布焦点
      ckvshbx[p] = cjcdx[p];
      ckvshby[p] = lk3y;
      // 道路中心线与画布焦点
      zxxvshbx[p] = centerPointX;
      zxxvshby[p] = lk3y;
      // 相邻路口画图片点坐标
      nearimgpointx[p] = centerPointX;
      nearimgpointy[p] = lk3y;
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p];
      jkhxdy[p] = jjcdy[p] + tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p];
      ckhxdy[p] = cjcdy[p] + tdkd;
    } else if (pzjd[p] > 90 && pzjd[p] < 180) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk1x;
      jkvshby[p] = jjcdy[p] + (jjcdx[p] - lk1x) / Math.tan((pzjd[p] - 90) * 2 * Math.PI / 360);
      // 出口边线与画布焦点
      ckvshbx[p] = lk1x;
      ckvshby[p] = cjcdy[p] + (cjcdx[p] - lk1x) / Math.tan((pzjd[p] - 90) * 2 * Math.PI / 360);
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk1x;
      zxxvshby[p] = centerPointY + (centerPointX - lk1x) / Math.tan((pzjd[p] - 90) * 2 * Math.PI / 360);

      if (zxxvshby[p] > lk4y) {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = centerPointX - (lk4y - centerPointY) * Math.tan((pzjd[p] - 90) * 2 * Math.PI / 360);
        nearimgpointy[p] = lk4y;
      } else {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = lk1x;
        nearimgpointy[p] = centerPointY + (centerPointX - lk1x) / Math.tan((pzjd[p] - 90) * 2 * Math.PI / 360);
      }
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
      jkhxdy[p] = jjcdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
      ckhxdy[p] = cjcdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
    } else if (pzjd[p] == 180) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk4x;
      jkvshby[p] = jjcdy[p];
      // 出口边线与画布焦点
      ckvshbx[p] = lk4x;
      ckvshby[p] = cjcdy[p];
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk4x;
      zxxvshby[p] = centerPointY;
      // 相邻路口画图片点坐标
      nearimgpointx[p] = lk4x;
      nearimgpointy[p] = centerPointY;
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] - tdkd;
      jkhxdy[p] = jjcdy[p];
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] - tdkd;
      ckhxdy[p] = cjcdy[p];
    } else if (pzjd[p] > 180 && pzjd[p] < 270) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk1x;
      jkvshby[p] = jjcdy[p] - (jjcdx[p] - lk1x) * Math.tan((pzjd[p] - 180) * 2 * Math.PI / 360);
      // 出口边线与画布焦点
      ckvshbx[p] = lk1x;
      ckvshby[p] = cjcdy[p] - (cjcdx[p] - lk1x) * Math.tan((pzjd[p] - 180) * 2 * Math.PI / 360);
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk1x;
      zxxvshby[p] = centerPointY - (centerPointX - lk1x) * Math.tan((pzjd[p] - 180) * 2 * Math.PI / 360);

      if (zxxvshby[p] < lk1y) {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = centerPointX - (centerPointY - lk1y) / Math.tan((pzjd[p] - 180) * 2 * Math.PI / 360);
        nearimgpointy[p] = lk1y;
      } else {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = lk1x;
        nearimgpointy[p] = centerPointY - (centerPointX - lk1x) * Math.tan((pzjd[p] - 180) * 2 * Math.PI / 360);
      }
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
      jkhxdy[p] = jjcdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
      ckhxdy[p] = cjcdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
    } else if (pzjd[p] == 270) {
      // 进口边线与画布焦点
      jkvshbx[p] = jjcdx[p];
      jkvshby[p] = lk1y;
      // 出口边线与画布焦点
      ckvshbx[p] = cjcdx[p];
      ckvshby[p] = lk1y;
      // 道路中心线与画布焦点
      zxxvshbx[p] = centerPointX;
      zxxvshby[p] = lk1y;
      // 相邻路口画图片点坐标
      nearimgpointx[p] = centerPointX;
      nearimgpointy[p] = lk1y;
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p];
      jkhxdy[p] = jjcdy[p] - tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p];
      ckhxdy[p] = cjcdy[p] - tdkd;
    } else if (pzjd[p] > 270 && pzjd[p] < 360) {
      // 进口边线与画布焦点
      jkvshbx[p] = lk2x;
      jkvshby[p] = jjcdy[p] - (lk2x - jjcdx[p]) / Math.tan((pzjd[p] - 270) * 2 * Math.PI / 360);
      // 出口边线与画布焦点
      ckvshbx[p] = lk2x;
      ckvshby[p] = cjcdy[p] - (lk2x - cjcdx[p]) / Math.tan((pzjd[p] - 270) * 2 * Math.PI / 360);
      // 道路中心线与画布焦点
      zxxvshbx[p] = lk2x;
      zxxvshby[p] = centerPointY - (lk2x - centerPointX) / Math.tan((pzjd[p] - 270) * 2 * Math.PI / 360);

      if (zxxvshby[p] < lk2y) {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = centerPointX + (centerPointY - lk2y) * Math.tan((pzjd[p] - 270) * 2 * Math.PI / 360);
        nearimgpointy[p] = lk2y;
      } else {
        // 相邻路口画图片点坐标
        nearimgpointx[p] = lk2x;
        nearimgpointy[p] = centerPointY - (lk2x - centerPointX) / Math.tan((pzjd[p] - 270) * 2 * Math.PI / 360);
      }
      // 道路进口弧线点
      jkhxdx[p] = jjcdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
      jkhxdy[p] = jjcdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
      // 道路出口弧线点tdkd
      ckhxdx[p] = cjcdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
      ckhxdy[p] = cjcdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 计算点位信息 进口边线与画布焦点  出口边线与画布焦点 道路中心线与画布焦点 道路进口弧线点 道路出口弧线点tdkd
    for (var p = 0; p < Cpzjd.length; p++) {
      if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk2x;
        Cjkvshby[p] = Cjjcdy[p];
        // 出口边线与画布焦点
        Cckvshbx[p] = lk2x;
        Cckvshby[p] = Ccjcdy[p];
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk2x;
        Czxxvshby[p] = CcenterPointY;
        // 相邻路口画图片点坐标
        Cnearimgpointx[p] = lk2x;
        Cnearimgpointy[p] = centerPointY;
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] + tdkd;
        Cjkhxdy[p] = Cjjcdy[p];
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] + tdkd;
        Cckhxdy[p] = Ccjcdy[p];
      } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk2x;
        Cjkvshby[p] = Cjjcdy[p] + (lk2x - Cjjcdx[p]) * Math.tan(Cpzjd[p] * Math.PI * 2 / 360);
        // 出口边线与画布焦点
        Cckvshbx[p] = lk2x;
        Cckvshby[p] = Ccjcdy[p] + (lk2x - Ccjcdx[p]) * Math.tan(Cpzjd[p] * Math.PI * 2 / 360);
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk2x;
        Czxxvshby[p] = CcenterPointY + (lk2x - CcenterPointX) * Math.tan(Cpzjd[p] * Math.PI * 2 / 360);

        if (Czxxvshby[p] > lk3y) {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = CcenterPointX + (lk3y - CcenterPointY) / Math.tan(Cpzjd[p] * Math.PI * 2 / 360);
          Cnearimgpointy[p] = lk3y;
        } else {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = lk2x;
          Cnearimgpointy[p] = CcenterPointY + (lk2x - CcenterPointX) * Math.tan(Cpzjd[p] * Math.PI * 2 / 360);
        }

        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd;
        Cjkhxdy[p] = Cjjcdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd;
        Cckhxdy[p] = Ccjcdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd;
      } else if (Cpzjd[p] == 90) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = Cjjcdx[p];
        Cjkvshby[p] = lk3y;
        // 出口边线与画布焦点
        Cckvshbx[p] = Ccjcdx[p];
        Cckvshby[p] = lk3y;
        // 道路中心线与画布焦点
        Czxxvshbx[p] = CcenterPointX;
        Czxxvshby[p] = lk3y;
        // 相邻路口画图片点坐标
        Cnearimgpointx[p] = CcenterPointX;
        Cnearimgpointy[p] = lk3y;
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p];
        Cjkhxdy[p] = Cjjcdy[p] + tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p];
        Cckhxdy[p] = Ccjcdy[p] + tdkd;
      } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk1x;
        Cjkvshby[p] = Cjjcdy[p] + (Cjjcdx[p] - lk1x) / Math.tan((Cpzjd[p] - 90) * 2 * Math.PI / 360);
        // 出口边线与画布焦点
        Cckvshbx[p] = lk1x;
        Cckvshby[p] = Ccjcdy[p] + (Ccjcdx[p] - lk1x) / Math.tan((Cpzjd[p] - 90) * 2 * Math.PI / 360);
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk1x;
        Czxxvshby[p] = CcenterPointY + (CcenterPointX - lk1x) / Math.tan((Cpzjd[p] - 90) * 2 * Math.PI / 360);
        if (Czxxvshby[p] > lk4y) {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = CcenterPointX - (lk4y - CcenterPointY) * Math.tan((Cpzjd[p] - 90) * 2 * Math.PI / 360);
          Cnearimgpointy[p] = lk4y;
        } else {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = lk1x;
          Cnearimgpointy[p] = CcenterPointY + (CcenterPointX - lk1x) / Math.tan((Cpzjd[p] - 90) * 2 * Math.PI / 360);
        }
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
        Cjkhxdy[p] = Cjjcdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
        Cckhxdy[p] = Ccjcdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd;
      } else if (Cpzjd[p] == 180) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk4x;
        Cjkvshby[p] = Cjjcdy[p];
        // 出口边线与画布焦点
        Cckvshbx[p] = lk4x;
        Cckvshby[p] = Ccjcdy[p];
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk4x;
        Czxxvshby[p] = CcenterPointY;
        // 相邻路口画图片点坐标
        Cnearimgpointx[p] = lk4x;
        Cnearimgpointy[p] = CcenterPointY;
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] - tdkd;
        Cjkhxdy[p] = Cjjcdy[p];
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] - tdkd;
        Cckhxdy[p] = Ccjcdy[p];
      } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk1x;
        Cjkvshby[p] = Cjjcdy[p] - (Cjjcdx[p] - lk1x) * Math.tan((Cpzjd[p] - 180) * 2 * Math.PI / 360);
        // 出口边线与画布焦点
        Cckvshbx[p] = lk1x;
        Cckvshby[p] = Ccjcdy[p] - (Ccjcdx[p] - lk1x) * Math.tan((Cpzjd[p] - 180) * 2 * Math.PI / 360);
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk1x;
        Czxxvshby[p] = CcenterPointY - (CcenterPointX - lk1x) * Math.tan((Cpzjd[p] - 180) * 2 * Math.PI / 360);
        if (Czxxvshby[p] < lk1y) {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = CcenterPointX - (CcenterPointY - lk1y) / Math.tan((Cpzjd[p] - 180) * 2 * Math.PI / 360);
          Cnearimgpointy[p] = lk1y;
        } else {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = lk1x;
          Cnearimgpointy[p] = CcenterPointY - (CcenterPointX - lk1x) * Math.tan((Cpzjd[p] - 180) * 2 * Math.PI / 360);
        }
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
        Cjkhxdy[p] = Cjjcdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
        Cckhxdy[p] = Ccjcdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd;
      } else if (Cpzjd[p] == 270) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = Cjjcdx[p];
        Cjkvshby[p] = lk1y;
        // 出口边线与画布焦点
        Cckvshbx[p] = Ccjcdx[p];
        Cckvshby[p] = lk1y;
        // 道路中心线与画布焦点
        Czxxvshbx[p] = CcenterPointX;
        Czxxvshby[p] = lk1y;
        // 相邻路口画图片点坐标
        Cnearimgpointx[p] = CcenterPointX;
        Cnearimgpointy[p] = lk1y;
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p];
        Cjkhxdy[p] = Cjjcdy[p] - tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p];
        Cckhxdy[p] = Ccjcdy[p] - tdkd;
      } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
        // 进口边线与画布焦点
        Cjkvshbx[p] = lk2x;
        Cjkvshby[p] = Cjjcdy[p] - (lk2x - Cjjcdx[p]) / Math.tan((Cpzjd[p] - 270) * 2 * Math.PI / 360);
        // 出口边线与画布焦点
        Cckvshbx[p] = lk2x;
        Cckvshby[p] = Ccjcdy[p] - (lk2x - Ccjcdx[p]) / Math.tan((Cpzjd[p] - 270) * 2 * Math.PI / 360);
        // 道路中心线与画布焦点
        Czxxvshbx[p] = lk2x;
        Czxxvshby[p] = CcenterPointY - (lk2x - CcenterPointX) / Math.tan((Cpzjd[p] - 270) * 2 * Math.PI / 360);
        if (Czxxvshby[p] < lk2y) {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = CcenterPointX + (CcenterPointY - lk2y) * Math.tan((Cpzjd[p] - 270) * 2 * Math.PI / 360);
          Cnearimgpointy[p] = lk2y;
        } else {
          // 相邻路口画图片点坐标
          Cnearimgpointx[p] = lk2x;
          Cnearimgpointy[p] = CcenterPointY - (lk2x - CcenterPointX) / Math.tan((Cpzjd[p] - 270) * 2 * Math.PI / 360);
        }
        // 道路进口弧线点
        Cjkhxdx[p] = Cjjcdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
        Cjkhxdy[p] = Cjjcdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
        // 道路出口弧线点tdkd
        Cckhxdx[p] = Ccjcdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
        Cckhxdy[p] = Ccjcdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd;
      }
    }
  }
  // 车道线两端的端点坐标
  for (var t = 0; t < pzjd.length; t++) {
    // 道路中心线与画布焦点
    zxxvsfootx[t] = jkhxdx[t] + (ckhxdx[t] - jkhxdx[t]) * tdj[t] / (tdj[t] + tdc[t]);
    zxxvsfooty[t] = jkhxdy[t] + (ckhxdy[t] - jkhxdy[t]) * tdj[t] / (tdj[t] + tdc[t]);
    // 找进口 车道各交点
    for (var j = 0; j < tdj[t] - 1; j++) {
      if (t == 0) {
        // 第一个进口车道线-人行线交点
        jkxvsrxx1x[j] = jkhxdx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] * (j + 1);
        jkxvsrxx1y[j] = jkhxdy[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] * (j + 1);
        // 第一个进口车道线-画布边缘交点
        jkxvsbyx1x[j] = jkvshbx[t] + (zxxvshbx[t] - jkvshbx[t]) / tdj[t] * (j + 1);
        jkxvsbyx1y[j] = jkvshby[t] + (zxxvshby[t] - jkvshby[t]) / tdj[t] * (j + 1);
      } else if (t == 1) {
        // 第二个进口车道线-人行线交点
        jkxvsrxx2x[j] = jkhxdx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] * (j + 1);
        jkxvsrxx2y[j] = jkhxdy[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] * (j + 1);
        // 第二个进口车道线-画布边缘交点
        jkxvsbyx2x[j] = jkvshbx[t] + (zxxvshbx[t] - jkvshbx[t]) / tdj[t] * (j + 1);
        jkxvsbyx2y[j] = jkvshby[t] + (zxxvshby[t] - jkvshby[t]) / tdj[t] * (j + 1);
      } else if (t == 2) {
        // 第三个进口车道线-人行线交点
        jkxvsrxx3x[j] = jkhxdx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] * (j + 1);
        jkxvsrxx3y[j] = jkhxdy[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] * (j + 1);
        // 第三个进口车道线-画布边缘交点
        jkxvsbyx3x[j] = jkvshbx[t] + (zxxvshbx[t] - jkvshbx[t]) / tdj[t] * (j + 1);
        jkxvsbyx3y[j] = jkvshby[t] + (zxxvshby[t] - jkvshby[t]) / tdj[t] * (j + 1);
      } else if (t == 3) {
        // 第四个进口车道线-人行线交点
        jkxvsrxx4x[j] = jkhxdx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] * (j + 1);
        jkxvsrxx4y[j] = jkhxdy[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] * (j + 1);
        // 第四个进口车道线-画布边缘交点
        jkxvsbyx4x[j] = jkvshbx[t] + (zxxvshbx[t] - jkvshbx[t]) / tdj[t] * (j + 1);
        jkxvsbyx4y[j] = jkvshby[t] + (zxxvshby[t] - jkvshby[t]) / tdj[t] * (j + 1);
      } else if (t == 4) {
        // 第四个进口车道线-人行线交点
        jkxvsrxx5x[j] = jkhxdx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] * (j + 1);
        jkxvsrxx5y[j] = jkhxdy[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] * (j + 1);
        // 第四个进口车道线-画布边缘交点
        jkxvsbyx5x[j] = jkvshbx[t] + (zxxvshbx[t] - jkvshbx[t]) / tdj[t] * (j + 1);
        jkxvsbyx5y[j] = jkvshby[t] + (zxxvshby[t] - jkvshby[t]) / tdj[t] * (j + 1);
      }
    }
    // 找出口 车道各交点
    for (var j = 0; j < tdc[t] - 1; j++) {
      if (t == 0) {
        // 第一个出口车道线-人行线交点
        ckxvsrxx1x[j] = zxxvsfootx[t] + (ckhxdx[t] - zxxvsfootx[t]) / tdc[t] * (j + 1);
        ckxvsrxx1y[j] = zxxvsfooty[t] + (ckhxdy[t] - zxxvsfooty[t]) / tdc[t] * (j + 1);
        // 第一个出口车道线-画布边缘交点
        ckxvsbyx1x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
        ckxvsbyx1y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
      } else if (t == 1) {
        // 第二个出口车道线-人行线交点
        ckxvsrxx2x[j] = zxxvsfootx[t] + (ckhxdx[t] - zxxvsfootx[t]) / tdc[t] * (j + 1);
        ckxvsrxx2y[j] = zxxvsfooty[t] + (ckhxdy[t] - zxxvsfooty[t]) / tdc[t] * (j + 1);
        // 第二个出口车道线-画布边缘交点
        ckxvsbyx2x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
        ckxvsbyx2y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
      } else if (t == 2) {
        // 第三个出口车道线-人行线交点
        ckxvsrxx3x[j] = zxxvsfootx[t] + (ckhxdx[t] - zxxvsfootx[t]) / tdc[t] * (j + 1);
        ckxvsrxx3y[j] = zxxvsfooty[t] + (ckhxdy[t] - zxxvsfooty[t]) / tdc[t] * (j + 1);
        // 第三个出口车道线-画布边缘交点
        ckxvsbyx3x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
        ckxvsbyx3y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
      } else if (t == 3) {
        // 第四个出口车道线-人行线交点
        ckxvsrxx4x[j] = zxxvsfootx[t] + (ckhxdx[t] - zxxvsfootx[t]) / tdc[t] * (j + 1);
        ckxvsrxx4y[j] = zxxvsfooty[t] + (ckhxdy[t] - zxxvsfooty[t]) / tdc[t] * (j + 1);
        // 第四个出口车道线-画布边缘交点
        ckxvsbyx4x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
        ckxvsbyx4y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
      } else if (t == 4) {
        // 第四个出口车道线-人行线交点
        ckxvsrxx5x[j] = zxxvsfootx[t] + (ckhxdx[t] - zxxvsfootx[t]) / tdc[t] * (j + 1);
        ckxvsrxx5y[j] = zxxvsfooty[t] + (ckhxdy[t] - zxxvsfooty[t]) / tdc[t] * (j + 1);
        // 第四个出口车道线-画布边缘交点
        ckxvsbyx5x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
        ckxvsbyx5y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 车道线两端的端点坐标
    for (var t = 0; t < Cpzjd.length; t++) {
      // 道路中心线与画布焦点
      Czxxvsfootx[t] = Cjkhxdx[t] + (Cckhxdx[t] - Cjkhxdx[t]) * Ctdj[t] / (Ctdj[t] + Ctdc[t]);
      Czxxvsfooty[t] = Cjkhxdy[t] + (Cckhxdy[t] - Cjkhxdy[t]) * Ctdj[t] / (Ctdj[t] + Ctdc[t]);
      // 找进口 车道各交点
      for (var j = 0; j < Ctdj[t] - 1; j++) {
        if (t == 0) {
          // 第一个进口车道线-人行线交点
          Cjkxvsrxx1x[j] = Cjkhxdx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsrxx1y[j] = Cjkhxdy[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] * (j + 1);
          // 第一个进口车道线-画布边缘交点
          Cjkxvsbyx1x[j] = Cjkvshbx[t] + (Czxxvshbx[t] - Cjkvshbx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsbyx1y[j] = Cjkvshby[t] + (Czxxvshby[t] - Cjkvshby[t]) / Ctdj[t] * (j + 1);
        } else if (t == 1) {
          // 第二个进口车道线-人行线交点
          Cjkxvsrxx2x[j] = Cjkhxdx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsrxx2y[j] = Cjkhxdy[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] * (j + 1);
          // 第二个进口车道线-画布边缘交点
          Cjkxvsbyx2x[j] = Cjkvshbx[t] + (Czxxvshbx[t] - Cjkvshbx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsbyx2y[j] = Cjkvshby[t] + (Czxxvshby[t] - Cjkvshby[t]) / Ctdj[t] * (j + 1);
        } else if (t == 2) {
          // 第三个进口车道线-人行线交点
          Cjkxvsrxx3x[j] = Cjkhxdx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsrxx3y[j] = Cjkhxdy[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] * (j + 1);
          // 第三个进口车道线-画布边缘交点
          Cjkxvsbyx3x[j] = Cjkvshbx[t] + (Czxxvshbx[t] - Cjkvshbx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsbyx3y[j] = Cjkvshby[t] + (Czxxvshby[t] - Cjkvshby[t]) / Ctdj[t] * (j + 1);
        } else if (t == 3) {
          // 第四个进口车道线-人行线交点
          Cjkxvsrxx4x[j] = Cjkhxdx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsrxx4y[j] = Cjkhxdy[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] * (j + 1);
          // 第四个进口车道线-画布边缘交点
          Cjkxvsbyx4x[j] = Cjkvshbx[t] + (Czxxvshbx[t] - Cjkvshbx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsbyx4y[j] = Cjkvshby[t] + (Czxxvshby[t] - Cjkvshby[t]) / Ctdj[t] * (j + 1);
        } else if (t == 4) {
          // 第四个进口车道线-人行线交点
          Cjkxvsrxx5x[j] = Cjkhxdx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsrxx5y[j] = Cjkhxdy[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] * (j + 1);
          // 第四个进口车道线-画布边缘交点
          Cjkxvsbyx5x[j] = Cjkvshbx[t] + (Czxxvshbx[t] - Cjkvshbx[t]) / Ctdj[t] * (j + 1);
          Cjkxvsbyx5y[j] = Cjkvshby[t] + (Czxxvshby[t] - Cjkvshby[t]) / Ctdj[t] * (j + 1);
        }
      }
      // 找出口 车道各交点
      for (var j = 0; j < Ctdc[t] - 1; j++) {
        if (t == 0) {
          // 第一个出口车道线-人行线交点
          Cckxvsrxx1x[j] = Czxxvsfootx[t] + (Cckhxdx[t] - Czxxvsfootx[t]) / Ctdc[t] * (j + 1);
          Cckxvsrxx1y[j] = Czxxvsfooty[t] + (Cckhxdy[t] - Czxxvsfooty[t]) / Ctdc[t] * (j + 1);
          // 第一个出口车道线-画布边缘交点
          Cckxvsbyx1x[j] = Czxxvshbx[t] + (Cckvshbx[t] - Czxxvshbx[t]) / Ctdc[t] * (j + 1);
          Cckxvsbyx1y[j] = Czxxvshby[t] + (Cckvshby[t] - Czxxvshby[t]) / Ctdc[t] * (j + 1);
        } else if (t == 1) {
          // 第二个出口车道线-人行线交点
          Cckxvsrxx2x[j] = Czxxvsfootx[t] + (Cckhxdx[t] - Czxxvsfootx[t]) / Ctdc[t] * (j + 1);
          Cckxvsrxx2y[j] = Czxxvsfooty[t] + (Cckhxdy[t] - Czxxvsfooty[t]) / Ctdc[t] * (j + 1);
          // 第二个出口车道线-画布边缘交点
          Cckxvsbyx2x[j] = Czxxvshbx[t] + (Cckvshbx[t] - Czxxvshbx[t]) / Ctdc[t] * (j + 1);
          Cckxvsbyx2y[j] = Czxxvshby[t] + (Cckvshby[t] - Czxxvshby[t]) / Ctdc[t] * (j + 1);
        } else if (t == 2) {
          // 第三个出口车道线-人行线交点
          Cckxvsrxx3x[j] = Czxxvsfootx[t] + (Cckhxdx[t] - Czxxvsfootx[t]) / Ctdc[t] * (j + 1);
          Cckxvsrxx3y[j] = Czxxvsfooty[t] + (Cckhxdy[t] - Czxxvsfooty[t]) / Ctdc[t] * (j + 1);
          // 第三个出口车道线-画布边缘交点
          Cckxvsbyx3x[j] = Czxxvshbx[t] + (Cckvshbx[t] - Czxxvshbx[t]) / Ctdc[t] * (j + 1);
          Cckxvsbyx3y[j] = Czxxvshby[t] + (Cckvshby[t] - Czxxvshby[t]) / Ctdc[t] * (j + 1);
        } else if (t == 3) {
          // 第四个出口车道线-人行线交点
          Cckxvsrxx4x[j] = Czxxvsfootx[t] + (Cckhxdx[t] - Czxxvsfootx[t]) / Ctdc[t] * (j + 1);
          Cckxvsrxx4y[j] = Czxxvsfooty[t] + (Cckhxdy[t] - Czxxvsfooty[t]) / Ctdc[t] * (j + 1);
          // 第四个出口车道线-画布边缘交点
          Cckxvsbyx4x[j] = Czxxvshbx[t] + (Cckvshbx[t] - Czxxvshbx[t]) / Ctdc[t] * (j + 1);
          Cckxvsbyx4y[j] = Czxxvshby[t] + (Cckvshby[t] - Czxxvshby[t]) / Ctdc[t] * (j + 1);
        } else if (t == 4) {
          // 第四个出口车道线-人行线交点
          Cckxvsrxx5x[j] = Czxxvsfootx[t] + (Cckhxdx[t] - Czxxvsfootx[t]) / Ctdc[t] * (j + 1);
          Cckxvsrxx5y[j] = Czxxvsfooty[t] + (Cckhxdy[t] - Czxxvsfooty[t]) / Ctdc[t] * (j + 1);
          // 第四个出口车道线-画布边缘交点
          Cckxvsbyx5x[j] = zxxvshbx[t] + (ckvshbx[t] - zxxvshbx[t]) / tdc[t] * (j + 1);
          Cckxvsbyx5y[j] = zxxvshby[t] + (ckvshby[t] - zxxvshby[t]) / tdc[t] * (j + 1);
        }
      }
    }
  }
  // 找出各进口车道实线坐标点
  for (var p = 0; p < pzjd.length; p++) {
    if (p == 0) {
      for (var j = 0; j < tdj[p] - 1; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          jksxpoint1x[j] = jkxvsrxx1x[j] + tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j];
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          jksxpoint1x[j] = jkxvsrxx1x[j] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 90) {
          jksxpoint1x[j] = jkxvsrxx1x[j];
          jksxpoint1y[j] = jkxvsrxx1y[j] + tdkd * 2;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          jksxpoint1x[j] = jkxvsrxx1x[j] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 180) {
          jksxpoint1x[j] = jkxvsrxx1x[j] - tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j];
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          jksxpoint1x[j] = jkxvsrxx1x[j] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 270) {
          jksxpoint1x[j] = jkxvsrxx1x[j];
          jksxpoint1y[j] = jkxvsrxx1y[j] - tdkd * 2;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint1x[j] = jkxvsrxx1x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    } else if (p == 1) {
      for (var j = 0; j < tdj[p] - 1; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          jksxpoint2x[j] = jkxvsrxx2x[j] + tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j];
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          jksxpoint2x[j] = jkxvsrxx2x[j] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 90) {
          jksxpoint2x[j] = jkxvsrxx2x[j];
          jksxpoint2y[j] = jkxvsrxx2y[j] + tdkd * 2;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          jksxpoint2x[j] = jkxvsrxx2x[j] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 180) {
          jksxpoint2x[j] = jkxvsrxx2x[j] - tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j];
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          jksxpoint2x[j] = jkxvsrxx2x[j] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 270) {
          jksxpoint2x[j] = jkxvsrxx2x[j];
          jksxpoint2y[j] = jkxvsrxx2y[j] - tdkd * 2;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint2x[j] = jkxvsrxx2x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint2y[j] = jkxvsrxx2y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    } else if (p == 2) {
      for (var j = 0; j < tdj[p] - 1; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          jksxpoint3x[j] = jkxvsrxx3x[j] + tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j];
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          jksxpoint3x[j] = jkxvsrxx3x[j] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 90) {
          jksxpoint3x[j] = jkxvsrxx3x[j];
          jksxpoint3y[j] = jkxvsrxx3y[j] + tdkd * 2;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          jksxpoint3x[j] = jkxvsrxx3x[j] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 180) {
          jksxpoint3x[j] = jkxvsrxx3x[j] - tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j];
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          jksxpoint3x[j] = jkxvsrxx3x[j] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 270) {
          jksxpoint3x[j] = jkxvsrxx3x[j];
          jksxpoint3y[j] = jkxvsrxx3y[j] - tdkd * 2;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint3x[j] = jkxvsrxx3x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint3y[j] = jkxvsrxx3y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    } else if (p == 3) {
      for (var j = 0; j < tdj[p] - 1; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          jksxpoint4x[j] = jkxvsrxx4x[j] + tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j];
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          jksxpoint4x[j] = jkxvsrxx4x[j] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 90) {
          jksxpoint4x[j] = jkxvsrxx4x[j];
          jksxpoint4y[j] = jkxvsrxx4y[j] + tdkd * 2;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          jksxpoint4x[j] = jkxvsrxx4x[j] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 180) {
          jksxpoint4x[j] = jkxvsrxx4x[j] - tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j];
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          jksxpoint4x[j] = jkxvsrxx4x[j] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 270) {
          jksxpoint4x[j] = jkxvsrxx4x[j];
          jksxpoint4y[j] = jkxvsrxx4y[j] - tdkd * 2;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint4x[j] = jkxvsrxx4x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint4y[j] = jkxvsrxx4y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    } else if (p == 4) {
      for (var j = 0; j < tdj[p] - 1; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          jksxpoint5x[j] = jkxvsrxx5x[j] + tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j];
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          jksxpoint5x[j] = jkxvsrxx5x[j] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 90) {
          jksxpoint5x[j] = jkxvsrxx5x[j];
          jksxpoint5y[j] = jkxvsrxx5y[j] + tdkd * 2;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          jksxpoint5x[j] = jkxvsrxx5x[j] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 180) {
          jksxpoint5x[j] = jkxvsrxx5x[j] - tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j];
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          jksxpoint5x[j] = jkxvsrxx5x[j] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else if (pzjd[p] == 270) {
          jksxpoint5x[j] = jkxvsrxx5x[j];
          jksxpoint5y[j] = jkxvsrxx5y[j] - tdkd * 2;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint5x[j] = jkxvsrxx5x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint5y[j] = jkxvsrxx5y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出各进口车道实线坐标点
    for (var p = 0; p < Cpzjd.length; p++) {
      if (p == 0) {
        for (var j = 0; j < Ctdj[p] - 1; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] + tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j];
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 90) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j];
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] + tdkd * 2;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 180) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] - tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j];
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 270) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j];
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] - tdkd * 2;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      } else if (p == 1) {
        for (var j = 0; j < Ctdj[p] - 1; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] + tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j];
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 90) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j];
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] + tdkd * 2;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 180) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] - tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j];
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 270) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j];
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] - tdkd * 2;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint2x[j] = Cjkxvsrxx2x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint2y[j] = Cjkxvsrxx2y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      } else if (p == 2) {
        for (var j = 0; j < Ctdj[p] - 1; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] + tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j];
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 90) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j];
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] + tdkd * 2;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 180) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] - tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j];
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 270) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j];
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] - tdkd * 2;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint3x[j] = Cjkxvsrxx3x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint3y[j] = Cjkxvsrxx3y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      } else if (p == 3) {
        for (var j = 0; j < Ctdj[p] - 1; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] + tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j];
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 90) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j];
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] + tdkd * 2;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 180) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] - tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j];
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 270) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j];
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] - tdkd * 2;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint4x[j] = Cjkxvsrxx4x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint4y[j] = Cjkxvsrxx4y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      } else if (p == 4) {
        for (var j = 0; j < Ctdj[p] - 1; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] + tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j];
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 90) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j];
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] + tdkd * 2;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 180) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] - tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j];
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else if (Cpzjd[p] == 270) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j];
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] - tdkd * 2;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint5x[j] = Cjkxvsrxx5x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint5y[j] = Cjkxvsrxx5y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      }
    }
  }
  // 找出人行线四个点位坐标
  for (var t = 0; t < pzjd.length; t++) {
    // 人行线进口边缘坐标1
    jfootline1x[t] = jjcdx[t] + (jkhxdx[t] - jjcdx[t]) / 4;
    jfootline1y[t] = jjcdy[t] + (jkhxdy[t] - jjcdy[t]) / 4;
    // 人行线进口边缘坐标2
    jfootline2x[t] = jjcdx[t] + (jkhxdx[t] - jjcdx[t]) * 3 / 4;
    jfootline2y[t] = jjcdy[t] + (jkhxdy[t] - jjcdy[t]) * 3 / 4;
    // 人行线出口边缘坐标1
    cfootline1x[t] = cjcdx[t] + (ckhxdx[t] - cjcdx[t]) / 4;
    cfootline1y[t] = cjcdy[t] + (ckhxdy[t] - cjcdy[t]) / 4;
    // 人行线出口边缘坐标2
    cfootline2x[t] = cjcdx[t] + (ckhxdx[t] - cjcdx[t]) * 3 / 4;
    cfootline2y[t] = cjcdy[t] + (ckhxdy[t] - cjcdy[t]) * 3 / 4;
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出人行线四个点位坐标
    for (var t = 0; t < Cpzjd.length; t++) {
      // 人行线进口边缘坐标1
      Cjfootline1x[t] = Cjjcdx[t] + (Cjkhxdx[t] - Cjjcdx[t]) / 4;
      Cjfootline1y[t] = Cjjcdy[t] + (Cjkhxdy[t] - Cjjcdy[t]) / 4;
      // 人行线进口边缘坐标2
      Cjfootline2x[t] = Cjjcdx[t] + (Cjkhxdx[t] - Cjjcdx[t]) * 3 / 4;
      Cjfootline2y[t] = Cjjcdy[t] + (Cjkhxdy[t] - Cjjcdy[t]) * 3 / 4;
      // 人行线出口边缘坐标1
      Ccfootline1x[t] = Ccjcdx[t] + (Cckhxdx[t] - Ccjcdx[t]) / 4;
      Ccfootline1y[t] = Ccjcdy[t] + (Cckhxdy[t] - Ccjcdy[t]) / 4;
      // 人行线出口边缘坐标2
      Ccfootline2x[t] = Ccjcdx[t] + (Cckhxdx[t] - Ccjcdx[t]) * 3 / 4;
      Ccfootline2y[t] = Ccjcdy[t] + (Cckhxdy[t] - Ccjcdy[t]) * 3 / 4;
    }
  }
  // 找出车道流向图片的初始坐标
  for (var t = 0; t < pzjd.length; t++) {
    for (var j = 0; j < tdj[t]; j++) {
      if (t == 0) {
        if (j == 0) {
          jkcdlxzb1x[j] = jkhxdx[t];
          jkcdlxzb1y[j] = jkhxdy[t];
        } else {
          jkcdlxzb1x[j] = jkxvsrxx1x[j - 1];
          jkcdlxzb1y[j] = jkxvsrxx1y[j - 1];
        }
      } else if (t == 1) {
        if (j == 0) {
          jkcdlxzb2x[j] = jkhxdx[t];
          jkcdlxzb2y[j] = jkhxdy[t];
        } else {
          jkcdlxzb2x[j] = jkxvsrxx2x[j - 1];
          jkcdlxzb2y[j] = jkxvsrxx2y[j - 1];
        }
      } else if (t == 2) {
        if (j == 0) {
          jkcdlxzb3x[j] = jkhxdx[t];
          jkcdlxzb3y[j] = jkhxdy[t];
        } else {
          jkcdlxzb3x[j] = jkxvsrxx3x[j - 1];
          jkcdlxzb3y[j] = jkxvsrxx3y[j - 1];
        }
      } else if (t == 3) {
        if (j == 0) {
          jkcdlxzb4x[j] = jkhxdx[t];
          jkcdlxzb4y[j] = jkhxdy[t];
        } else {
          jkcdlxzb4x[j] = jkxvsrxx4x[j - 1];
          jkcdlxzb4y[j] = jkxvsrxx4y[j - 1];
        }
      } else if (t == 4) {
        if (j == 0) {
          jkcdlxzb5x[j] = jkhxdx[t];
          jkcdlxzb5y[j] = jkhxdy[t];
        } else {
          jkcdlxzb5x[j] = jkxvsrxx5x[j - 1];
          jkcdlxzb5y[j] = jkxvsrxx5y[j - 1];
        }
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) { // ppp
    // 找出车道流向图片的初始坐标
    for (var t = 0; t < Cpzjd.length; t++) {
      for (var j = 0; j < Ctdj[t]; j++) {
        if (t == 0) {
          if (j == 0) {
            Cjkcdlxzb1x[j] = Cjkhxdx[t];
            Cjkcdlxzb1y[j] = Cjkhxdy[t];
          } else {
            Cjkcdlxzb1x[j] = Cjkxvsrxx1x[j - 1];
            Cjkcdlxzb1y[j] = Cjkxvsrxx1y[j - 1];
          }
        } else if (t == 1) {
          if (j == 0) {
            Cjkcdlxzb2x[j] = Cjkhxdx[t];
            Cjkcdlxzb2y[j] = Cjkhxdy[t];
          } else {
            Cjkcdlxzb2x[j] = Cjkxvsrxx2x[j - 1];
            Cjkcdlxzb2y[j] = Cjkxvsrxx2y[j - 1];
          }
        } else if (t == 2) {
          if (j == 0) {
            Cjkcdlxzb3x[j] = Cjkhxdx[t];
            Cjkcdlxzb3y[j] = Cjkhxdy[t];
          } else {
            Cjkcdlxzb3x[j] = Cjkxvsrxx3x[j - 1];
            Cjkcdlxzb3y[j] = Cjkxvsrxx3y[j - 1];
          }
        } else if (t == 3) {
          if (j == 0) {
            Cjkcdlxzb4x[j] = Cjkhxdx[t];
            Cjkcdlxzb4y[j] = Cjkhxdy[t];
          } else {
            Cjkcdlxzb4x[j] = Cjkxvsrxx4x[j - 1];
            Cjkcdlxzb4y[j] = Cjkxvsrxx4y[j - 1];
          }
        } else if (t == 4) {
          if (j == 0) {
            Cjkcdlxzb5x[j] = Cjkhxdx[t];
            Cjkcdlxzb5y[j] = Cjkhxdy[t];
          } else {
            Cjkcdlxzb5x[j] = Cjkxvsrxx5x[j - 1];
            Cjkcdlxzb5y[j] = Cjkxvsrxx5y[j - 1];
          }
        }
      }
    }
  }
  // 找出各进口流量线圈、排队长度线圈点位信息
  for (var p = 0; p < pzjd.length; p++) {
    if (p == 0) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] + tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] + tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] + tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] + tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1];
          }
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p];
            jkvolxq1y[j] = jkhxdy[p] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p];
            jkpdcdxq1y[j] = jkhxdy[p] + tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1];
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1];
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] + tdkd * 3.2;
          }
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] - tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] - tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p];

            cknearpoint1y[j] = ckvshby[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] - tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] - tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1];
          }
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p];
            jkvolxq1y[j] = jkhxdy[p] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p];
            jkpdcdxq1y[j] = jkhxdy[p] - tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1];
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1];
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] - tdkd * 3.2;
          }
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          jksxpoint1x[j] = jkxvsrxx1x[j] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          jksxpoint1y[j] = jkxvsrxx1y[j] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq1x[j] = jkxvsrxx1x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq1y[j] = jkxvsrxx1y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq1x[j] = jkxvsrxx1x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq1y[j] = jkxvsrxx1y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        }
      }
    } else if (p == 1) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          if (j == 0) {
            // 第二个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] + tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p];
            // 第二个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] + tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p];
          } else {
            // 第二个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] + tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1];
            // 第二个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] + tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1];
          }
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p];
            jkvolxq2y[j] = jkhxdy[p] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p];
            jkpdcdxq2y[j] = jkhxdy[p] + tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1];
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1];
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] + tdkd * 3.2;
          }
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] - tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] - tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] - tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] - tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1];
          }
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p];
            jkvolxq2y[j] = jkhxdy[p] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p];
            jkpdcdxq2y[j] = jkhxdy[p] - tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1];
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1];
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] - tdkd * 3.2;
          }
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq2x[j] = jkxvsrxx2x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq2y[j] = jkxvsrxx2y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq2x[j] = jkxvsrxx2x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq2y[j] = jkxvsrxx2y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        }
      }
    } else if (p == 2) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          if (j == 0) {
            // 第三个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] + tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p];
            // 第三个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] + tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p];
          } else {
            // 第三个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] + tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1];
            // 第三个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] + tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1];
          }
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p];
            jkvolxq3y[j] = jkhxdy[p] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p];
            jkpdcdxq3y[j] = jkhxdy[p] + tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1];
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1];
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] + tdkd * 3.2;
          }
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] - tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] - tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] - tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] - tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1];
          }
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p];
            jkvolxq3y[j] = jkhxdy[p] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p];
            jkpdcdxq3y[j] = jkhxdy[p] - tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1];
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1];
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] - tdkd * 3.2;
          }
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq3x[j] = jkxvsrxx3x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq3y[j] = jkxvsrxx3y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq3x[j] = jkxvsrxx3x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq3y[j] = jkxvsrxx3y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        }
      }
    } else if (p == 3) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          if (j == 0) {
            // 第四个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] + tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p];
            // 第四个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] + tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p];
          } else {
            // 第四个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] + tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1];
            // 第四个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] + tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1];
          }
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p];
            jkvolxq4y[j] = jkhxdy[p] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p];
            jkpdcdxq4y[j] = jkhxdy[p] + tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1];
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1];
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] + tdkd * 3.2;
          }
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] - tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] - tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] - tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] - tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1];
          }
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p];
            jkvolxq4y[j] = jkhxdy[p] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p];
            jkpdcdxq4y[j] = jkhxdy[p] - tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1];
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1];
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] - tdkd * 3.2;
          }
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq4x[j] = jkxvsrxx4x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq4y[j] = jkxvsrxx4y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq4x[j] = jkxvsrxx4x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq4y[j] = jkxvsrxx4y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        }
      }
    } else if (p == 4) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          if (j == 0) {
            // 第五个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] + tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p];
            // 第五个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] + tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p];
          } else {
            // 第五个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] + tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1];
            // 第五个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] + tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1];
          }
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 90) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p];
            jkvolxq5y[j] = jkhxdy[p] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p];
            jkpdcdxq5y[j] = jkhxdy[p] + tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1];
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] + tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1];
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] + tdkd * 3.2;
          }
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 180) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] - tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] - tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p];
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] - tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1];
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] - tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1];
          }
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        } else if (pzjd[p] == 270) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p];
            jkvolxq5y[j] = jkhxdy[p] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p];
            jkpdcdxq5y[j] = jkhxdy[p] - tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1];
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] - tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1];
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] - tdkd * 3.2;
          }
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          if (j == 0) {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          } else {
            // 第一个进口流量线圈坐标
            jkvolxq5x[j] = jkxvsrxx5x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            jkvolxq5y[j] = jkxvsrxx5y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            // 第一个进口排队长度线圈坐标
            jkpdcdxq5x[j] = jkxvsrxx5x[j - 1] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            jkpdcdxq5y[j] = jkxvsrxx5y[j - 1] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
          }
        }
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出各进口流量线圈、排队长度线圈点位信息
    for (var p = 0; p < Cpzjd.length; p++) {
      if (p == 0) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] + tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] + tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] + tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] + tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1];
            }
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p];
              Cjkvolxq1y[j] = Cjkhxdy[p] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p];
              Cjkpdcdxq1y[j] = Cjkhxdy[p] + tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1];
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1];
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] + tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] - tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] - tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] - tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] - tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1];
            }
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p];
              Cjkvolxq1y[j] = Cjkhxdy[p] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p];
              Cjkpdcdxq1y[j] = Cjkhxdy[p] - tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1];
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1];
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] - tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            Cjksxpoint1x[j] = Cjkxvsrxx1x[j] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Cjksxpoint1y[j] = Cjkxvsrxx1y[j] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq1x[j] = Cjkxvsrxx1x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq1y[j] = Cjkxvsrxx1y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq1x[j] = Cjkxvsrxx1x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq1y[j] = Cjkxvsrxx1y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          }
        }
      } else if (p == 1) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] + tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] + tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] + tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] + tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1];
            }
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p];
              Cjkvolxq2y[j] = Cjkhxdy[p] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p];
              Cjkpdcdxq2y[j] = Cjkhxdy[p] + tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1];
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1];
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] + tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] - tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] - tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] - tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] - tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1];
            }
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p];
              Cjkvolxq2y[j] = Cjkhxdy[p] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p];
              Cjkpdcdxq2y[j] = Cjkhxdy[p] - tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1];
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1];
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] - tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq2x[j] = Cjkxvsrxx2x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq2y[j] = Cjkxvsrxx2y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq2x[j] = Cjkxvsrxx2x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq2y[j] = Cjkxvsrxx2y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          }
        }
      } else if (p == 2) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] + tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] + tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] + tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] + tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1];
            }
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p];
              Cjkvolxq3y[j] = Cjkhxdy[p] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p];
              Cjkpdcdxq3y[j] = Cjkhxdy[p] + tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1];
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1];
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] + tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] - tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] - tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] - tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] - tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1];
            }
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p];
              Cjkvolxq3y[j] = Cjkhxdy[p] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p];
              Cjkpdcdxq3y[j] = Cjkhxdy[p] - tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1];
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1];
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] - tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq3x[j] = Cjkxvsrxx3x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq3y[j] = Cjkxvsrxx3y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq3x[j] = Cjkxvsrxx3x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq3y[j] = Cjkxvsrxx3y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          }
        }
      } else if (p == 3) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] + tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] + tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] + tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] + tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1];
            }
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p];
              Cjkvolxq4y[j] = Cjkhxdy[p] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p];
              Cjkpdcdxq4y[j] = Cjkhxdy[p] + tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1];
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1];
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] + tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] - tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] - tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] - tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] - tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1];
            }
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p];
              Cjkvolxq4y[j] = Cjkhxdy[p] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p];
              Cjkpdcdxq4y[j] = Cjkhxdy[p] - tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1];
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1];
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] - tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq4x[j] = Cjkxvsrxx4x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq4y[j] = Cjkxvsrxx4y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq4x[j] = Cjkxvsrxx4x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq4y[j] = Cjkxvsrxx4y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          }
        }
      } else if (p == 4) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] + tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] + tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] + tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] + tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1];
            }
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 90) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p];
              Cjkvolxq5y[j] = Cjkhxdy[p] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p];
              Cjkpdcdxq5y[j] = Cjkhxdy[p] + tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1];
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] + tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1];
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] + tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 180) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] - tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] - tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p];
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] - tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1];
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] - tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1];
            }
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          } else if (Cpzjd[p] == 270) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p];
              Cjkvolxq5y[j] = Cjkhxdy[p] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p];
              Cjkpdcdxq5y[j] = Cjkhxdy[p] - tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1];
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] - tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1];
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] - tdkd * 3.2;
            }
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            if (j == 0) {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            } else {
              // 第一个进口流量线圈坐标
              Cjkvolxq5x[j] = Cjkxvsrxx5x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              Cjkvolxq5y[j] = Cjkxvsrxx5y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
              // 第一个进口排队长度线圈坐标
              Cjkpdcdxq5x[j] = Cjkxvsrxx5x[j - 1] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
              Cjkpdcdxq5y[j] = Cjkxvsrxx5y[j - 1] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 3.2;
            }
          }
        }
      }
    }
  }
  // 各进口名称坐标点
  for (var p = 0; p < pzjd.length; p++) {
    if (p == 0) {
      jknamex[p] = ckhxdx[p] + (ckhxdx[p] - jkhxdx[p]) / (tdc[p] + tdj[p]);
      jknamey[p] = ckhxdy[p] + (ckhxdy[p] - jkhxdy[p]) / (tdc[p] + tdj[p]);
    } else if (p == 1) {
      jknamex[p] = ckhxdx[p] + (ckhxdx[p] - jkhxdx[p]) / (tdc[p] + tdj[p]);
      jknamey[p] = ckhxdy[p] + (ckhxdy[p] - jkhxdy[p]) / (tdc[p] + tdj[p]);
    } else if (p == 2) {
      jknamex[p] = ckhxdx[p] + (ckhxdx[p] - jkhxdx[p]) / (tdc[p] + tdj[p]);
      jknamey[p] = ckhxdy[p] + (ckhxdy[p] - jkhxdy[p]) / (tdc[p] + tdj[p]);
    } else if (p == 3) {
      jknamex[p] = ckhxdx[p] + (ckhxdx[p] - jkhxdx[p]) / (tdc[p] + tdj[p]);
      jknamey[p] = ckhxdy[p] + (ckhxdy[p] - jkhxdy[p]) / (tdc[p] + tdj[p]);
    } else if (p == 4) {
      jknamex[p] = ckhxdx[p] + (ckhxdx[p] - jkhxdx[p]) / (tdc[p] + tdj[p]);
      jknamey[p] = ckhxdy[p] + (ckhxdy[p] - jkhxdy[p]) / (tdc[p] + tdj[p]);
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 各进口名称坐标点
    for (var p = 0; p < Cpzjd.length; p++) {
      if (p == 0) {
        Cjknamex[p] = Cckhxdx[p] + (Cckhxdx[p] - Cjkhxdx[p]) / (Ctdc[p] + Ctdj[p]);
        Cjknamey[p] = Cckhxdy[p] + (Cckhxdy[p] - Cjkhxdy[p]) / (Ctdc[p] + Ctdj[p]);
      } else if (p == 1) {
        Cjknamex[p] = Cckhxdx[p] + (Cckhxdx[p] - Cjkhxdx[p]) / (Ctdc[p] + Ctdj[p]);
        Cjknamey[p] = Cckhxdy[p] + (Cckhxdy[p] - Cjkhxdy[p]) / (Ctdc[p] + Ctdj[p]);
      } else if (p == 2) {
        Cjknamex[p] = Cckhxdx[p] + (Cckhxdx[p] - Cjkhxdx[p]) / (Ctdc[p] + Ctdj[p]);
        Cjknamey[p] = Cckhxdy[p] + (Cckhxdy[p] - Cjkhxdy[p]) / (Ctdc[p] + Ctdj[p]);
      } else if (p == 3) {
        Cjknamex[p] = Cckhxdx[p] + (Cckhxdx[p] - Cjkhxdx[p]) / (Ctdc[p] + Ctdj[p]);
        Cjknamey[p] = Cckhxdy[p] + (Cckhxdy[p] - Cjkhxdy[p]) / (Ctdc[p] + Ctdj[p]);
      } else if (p == 4) {
        Cjknamex[p] = Cckhxdx[p] + (Cckhxdx[p] - Cjkhxdx[p]) / (Ctdc[p] + Ctdj[p]);
        Cjknamey[p] = Cckhxdy[p] + (Cckhxdy[p] - Cjkhxdy[p]) / (Ctdc[p] + Ctdj[p]);
      }
    }
  }
  // 找出红绿灯各模块的点位坐标 白色背景 右转灯 通行灯 左转灯
  if (pzjd.length == 2) {
    for (var p = 0; p < pzjd.length; p++) {
      var z = 0;
      var num = 0;
      var centerx = 0;
      var centery = 0;
      if (p == 0) {
        z = 1;
      } else if (p == 1) {
        z = 0;
      }
      centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
      centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
      // 计算中点有多少份半个车道宽度
      num = tdc[z] / 2 / 0.5;
      trafficlightpzjd[p] = pzjd[z] * Math.PI / 180;
      footlinelightpzjd[z] = trafficlightpzjd[p];
      trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
      trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
      // 左转灯图标点
      leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      // 右转等图标点
      rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
      rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
      // 通行灯坐标点
      zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
      zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
    }
  } else if (pzjd.length == 3) {
    // 计算三个进口的红绿灯摆放位置
    var jdcz1 = pzjd[0] - pzjd[1];
    var jdcz2 = pzjd[0] - pzjd[2];
    var jdcz3 = pzjd[1] - pzjd[0];
    var jdcz4 = pzjd[1] - pzjd[2];
    var jdcz5 = pzjd[2] - pzjd[0];
    var jdcz6 = pzjd[2] - pzjd[1];
    // 若三个进口角度之间存在180度夹角
    if (jdcz1 == 180 || jdcz2 == 180 || jdcz3 == 180 || jdcz4 == 180 || jdcz5 == 180 || jdcz6 == 180) {
      if (jdcz1 == 180) {
        // 第一个路口和第二个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 1;
          } else if (p == 1) {
            z = 0;
          } else if (p == 2) {
            z = 2;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          // 特殊处理非180度路口
          if (p == 2) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2];
            trafficlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2];
            // 左转灯图标点
            leftlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2];
            leftlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2];
            // 右转等图标点
            rightlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      } else if (jdcz2 == 180) {
        // 第一个路口和第三个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 2;
          } else if (p == 1) {
            z = 1;
          } else if (p == 2) {
            z = 0;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          // 特殊处理非180度路口
          if (p == 1) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1];
            trafficlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1];
            // 左转灯图标点
            leftlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1];
            leftlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1];
            // 右转等图标点
            rightlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      } else if (jdcz3 == 180) {
        // 第二个路口和第一个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 1;
          } else if (p == 1) {
            z = 0;
          } else if (p == 2) {
            z = 2;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          // 特殊处理非180度路口
          if (p == 2) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2];
            trafficlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2];
            // 左转灯图标点
            leftlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2];
            leftlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2];
            // 右转等图标点
            rightlightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[1] + (cjcdx[0] - jjcdx[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[1] + (cjcdy[0] - jjcdy[1]) / (tdj[2] + tdc[2]) * tdj[2] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      } else if (jdcz4 == 180) {
        // 第二个路口和第三个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 0;
          } else if (p == 1) {
            z = 2;
          } else if (p == 2) {
            z = 1;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          // 特殊处理非180度路口
          if (p == 0) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0];
            trafficlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0];
            // 左转灯图标点
            leftlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0];
            leftlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0];
            // 右转等图标点
            rightlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      } else if (jdcz5 == 180) {
        // 第三个路口和第一个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 2;
          } else if (p == 1) {
            z = 1;
          } else if (p == 2) {
            z = 0;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          // 特殊处理非180度路口
          if (p == 1) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1];
            trafficlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1];
            // 左转灯图标点
            leftlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1];
            leftlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1];
            // 右转等图标点
            rightlightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[0] + (cjcdx[2] - jjcdx[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[0] + (cjcdy[2] - jjcdy[0]) / (tdj[1] + tdc[1]) * tdj[1] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      } else if (jdcz6 == 180) {
        // 第三个路口和第二个路口成180度
        for (var p = 0; p < pzjd.length; p++) {
          var z = 0;
          var num = 0;
          var centerx = 0;
          var centery = 0;
          if (p == 0) {
            z = 0;
          } else if (p == 1) {
            z = 2;
          } else if (p == 2) {
            z = 1;
          }
          centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
          centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
          // 计算中点有多少份半个车道宽度
          num = tdc[z] / 2 / 0.5;
          trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
          trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
          trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
          trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
          // 计算红绿灯图标偏转角度弧度值
          if (trafficlightzdx[p] - trafficlightx[p] == 0) {
            if (trafficlightzdy[p] - trafficlighty[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 0 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 180 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
            if (trafficlightzdx[p] - trafficlightx[p] > 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 270 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
              // 红绿灯偏转角度
              trafficlightpzjd[p] = 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          } else {
            if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
              trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
              trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
              footlinelightpzjd[z] = trafficlightpzjd[p];
            }
          }
          if (p == 0) {
            trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
            trafficlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0];
            trafficlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0];
            // 左转灯图标点
            leftlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0];
            leftlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0];
            // 右转等图标点
            rightlightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            rightlighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = jjcdx[2] + (cjcdx[1] - jjcdx[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
            zhixinglighty[p] = jjcdy[2] + (cjcdy[1] - jjcdy[2]) / (tdj[0] + tdc[0]) * tdj[0] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
          } else {
            // 左转灯图标点
            leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
            leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
            // 右转等图标点
            rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
            rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
            // 通行灯坐标点
            zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
            zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
          }
        }
      }
    } else {
      // 若三个进口角度之间不存在180度夹角
      for (var p = 0; p < pzjd.length; p++) {
        var z = 0;
        var q = 0;
        if (p == 2) {
          z = 0;
          q = 1;
        } else {
          z = p + 1;
          if (z == 2) {
            q = 0;
          } else {
            q = z + 1;
          }
        }
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          trafficlightpzjd[p] = 180 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
          // 右转灯x轴坐标点
          rightlightx[p] = ckhxdx[z];
          // 通行灯x轴坐标点
          zhixinglightx[p] = ckhxdx[z];
        } else {
          // 偏转角度
          if (ckhxdy[p] - jkhxdy[p] < 0 && ckhxdx[p] - jkhxdx[p] > 0) {
            trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(ckhxdy[p] - jkhxdy[p], jkhxdx[p] - ckhxdx[p]);
            footlinelightpzjd[z] = trafficlightpzjd[p];
          } else if (ckhxdy[p] - jkhxdy[p] < 0 && ckhxdx[p] - jkhxdx[p] < 0) {
            trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(jkhxdy[p] - ckhxdy[p], jkhxdx[p] - ckhxdx[p]) - 90 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
          } else if (ckhxdy[p] - jkhxdy[p] > 0 && ckhxdx[p] - jkhxdx[p] > 0) {
            trafficlightpzjd[p] = Math.atan2(ckhxdy[p] - jkhxdy[p], ckhxdx[p] - jkhxdx[p]) - 90 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
          } else if (ckhxdy[p] - jkhxdy[p] > 0 && ckhxdx[p] - jkhxdx[p] < 0) {
            trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(ckhxdy[p] - jkhxdy[p], jkhxdx[p] - ckhxdx[p]) - 90 * Math.PI / 180;
            footlinelightpzjd[z] = trafficlightpzjd[p];
          } else if (ckhxdy[p] - jkhxdy[p] === 0) { // 红绿灯水平的情况（T型路口30,150,270）
            trafficlightpzjd[p] = -90 * Math.PI / 180;
          }
          trafficlightpzjd[p] = trafficlightpzjd[p] + 180 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
          // 右转灯x轴坐标点
          rightlightx[p] = ckhxdx[z] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 4 / 3;
          // 通行灯x轴坐标点
          zhixinglightx[p] = ckhxdx[z] + (jkhxdx[p] - ckhxdx[p]) / (tdj[p] + tdc[p]) * 2 / 3;
        }
        trafficlightx[p] = ckhxdx[z];
        trafficlighty[p] = ckhxdy[z];
        // 左转灯坐标点
        leftlightx[p] = ckhxdx[z];
        leftlighty[p] = ckhxdy[z];
        // 右转灯y轴坐标点
        rightlighty[p] = ckhxdy[z] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 4 / 3;
        // 通行灯y轴坐标点
        zhixinglighty[p] = ckhxdy[z] + (jkhxdy[p] - ckhxdy[p]) / (tdj[p] + tdc[p]) * 2 / 3;
      }
    }
  } else if (pzjd.length == 4) {
    for (var p = 0; p < pzjd.length; p++) {
      var z = 0;
      var num = 0;
      var centerx = 0;
      var centery = 0;
      if (p == 0) {
        z = 2;
      } else if (p == 1) {
        z = 3;
      } else if (p == 2) {
        z = 0;
      } else if (p == 3) {
        z = 1;
      }
      centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
      centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
      // 计算中点有多少份半个车道宽度
      num = tdc[z] / 2 / 0.5;
      trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
      trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
      // 计算红绿灯图标偏转角度弧度值
      if (trafficlightzdx[p] - trafficlightx[p] == 0) {
        if (trafficlightzdy[p] - trafficlighty[p] > 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 0 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 180 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
        if (trafficlightzdx[p] - trafficlightx[p] > 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 270 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      } else {
        if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
          trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
          trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
          trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
          trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      }
      // 左转灯图标点
      leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      // 右转等图标点
      rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
      rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
      // 通行灯坐标点
      zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
      zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
    }
  } else if (pzjd.length == 5) {
    for (var p = 0; p < pzjd.length; p++) {
      var z = 0;
      var num = 0;
      var centerx = 0;
      var centery = 0;
      if (p == 0) {
        z = 2;
      } else if (p == 1) {
        z = 3;
      } else if (p == 2) {
        z = 0;
      } else if (p == 3) {
        z = 1;
      } else if (p == 4) {
        z = 4;
      }
      centerx = zxxvsfootx[z] + (ckhxdx[z] - zxxvsfootx[z]) / 2;
      centery = zxxvsfooty[z] + (ckhxdy[z] - zxxvsfooty[z]) / 2;
      // 计算中点有多少份半个车道宽度
      num = tdc[z] / 2 / 0.5;
      trafficlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      trafficlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      trafficlightzdx[p] = centerx + (ckhxdx[z] - centerx) / num * 2;
      trafficlightzdy[p] = centery + (ckhxdy[z] - centery) / num * 2;
      // 计算红绿灯图标偏转角度弧度值
      if (trafficlightzdx[p] - trafficlightx[p] == 0) {
        if (trafficlightzdy[p] - trafficlighty[p] > 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 0 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] < 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 180 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      } else if (trafficlightzdy[p] - trafficlighty[p] == 0) {
        if (trafficlightzdx[p] - trafficlightx[p] > 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 270 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdx[p] - trafficlightx[p] < 0) {
          // 红绿灯偏转角度
          trafficlightpzjd[p] = 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      } else {
        if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
          trafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]);
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] < 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
          trafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(trafficlighty[p] - trafficlightzdy[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] > 0) {
          trafficlightpzjd[p] = Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightzdx[p] - trafficlightx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        } else if (trafficlightzdy[p] - trafficlighty[p] > 0 && trafficlightzdx[p] - trafficlightx[p] < 0) {
          trafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(trafficlightzdy[p] - trafficlighty[p], trafficlightx[p] - trafficlightzdx[p]) - 90 * Math.PI / 180;
          footlinelightpzjd[z] = trafficlightpzjd[p];
        }
      }
      // 左转灯图标点
      leftlightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2;
      leftlighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2;
      // 右转等图标点
      rightlightx[p] = centerx + (ckhxdx[z] - centerx) / num * 2 / 3;
      rightlighty[p] = centery + (ckhxdy[z] - centery) / num * 2 / 3;
      // 通行灯坐标点
      zhixinglightx[p] = centerx + (zxxvsfootx[z] - centerx) / num * 2 / 3;
      zhixinglighty[p] = centery + (zxxvsfooty[z] - centery) / num * 2 / 3;
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出红绿灯各模块的点位坐标 白色背景 右转灯 通行灯 左转灯
    if (Cpzjd.length == 2) {
      for (var p = 0; p < Cpzjd.length; p++) {
        var z = 0;
        var num = 0;
        var centerx = 0;
        var centery = 0;
        if (p == 0) {
          z = 1;
        } else if (p == 1) {
          z = 0;
        }
        centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
        centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
        // 计算中点有多少份半个车道宽度
        num = Ctdc[z] / 2 / 0.5;
        Ctrafficlightpzjd[p] = Cpzjd[z] * Math.PI / 180;
        Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
        Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
        Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
        // 左转灯图标点
        Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        // 右转等图标点
        Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
        Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
        // 通行灯坐标点
        Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
        Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
      }
    } else if (Cpzjd.length == 3) {
      // 计算三个进口的红绿灯摆放位置
      var jdcz1 = Cpzjd[0] - Cpzjd[1];
      var jdcz2 = Cpzjd[0] - Cpzjd[2];
      var jdcz3 = Cpzjd[1] - Cpzjd[0];
      var jdcz4 = Cpzjd[1] - Cpzjd[2];
      var jdcz5 = Cpzjd[2] - Cpzjd[0];
      var jdcz6 = Cpzjd[2] - Cpzjd[1];
      // 若三个进口角度之间存在180度夹角
      if (jdcz1 == 180 || jdcz2 == 180 || jdcz3 == 180 || jdcz4 == 180 || jdcz5 == 180 || jdcz6 == 180) {
        if (jdcz1 == 180) {
          // 第一个路口和第二个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 1;
            } else if (p == 1) {
              z = 0;
            } else if (p == 2) {
              z = 2;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            // 特殊处理非180度路口
            if (p == 2) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              Ctrafficlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              Cleftlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        } else if (jdcz2 == 180) {
          // 第一个路口和第三个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 2;
            } else if (p == 1) {
              z = 1;
            } else if (p == 2) {
              z = 0;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            // 特殊处理非180度路口
            if (p == 1) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              Ctrafficlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              Cleftlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        } else if (jdcz3 == 180) {
          // 第二个路口和第一个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 1;
            } else if (p == 1) {
              z = 0;
            } else if (p == 2) {
              z = 2;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            // 特殊处理非180度路口
            if (p == 2) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              Ctrafficlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              Cleftlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[1] + (Ccjcdx[0] - Cjjcdx[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[1] + (Ccjcdy[0] - Cjjcdy[1]) / (Ctdj[2] + Ctdc[2]) * Ctdj[2] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        } else if (jdcz4 == 180) {
          // 第二个路口和第三个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 0;
            } else if (p == 1) {
              z = 2;
            } else if (p == 2) {
              z = 1;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            // 特殊处理非180度路口
            if (p == 0) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              Ctrafficlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              Cleftlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        } else if (jdcz5 == 180) {
          // 第三个路口和第一个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 2;
            } else if (p == 1) {
              z = 1;
            } else if (p == 2) {
              z = 0;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            // 特殊处理非180度路口
            if (p == 1) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              Ctrafficlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              Cleftlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[0] + (Ccjcdx[2] - Cjjcdx[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[0] + (Ccjcdy[2] - Cjjcdy[0]) / (Ctdj[1] + Ctdc[1]) * Ctdj[1] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        } else if (jdcz6 == 180) {
          // 第三个路口和第二个路口成180度
          for (var p = 0; p < Cpzjd.length; p++) {
            var z = 0;
            var num = 0;
            var centerx = 0;
            var centery = 0;
            if (p == 0) {
              z = 0;
            } else if (p == 1) {
              z = 2;
            } else if (p == 2) {
              z = 1;
            }
            centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
            centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
            // 计算中点有多少份半个车道宽度
            num = Ctdc[z] / 2 / 0.5;
            Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
            Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
            Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
            Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
            // 计算红绿灯图标偏转角度弧度值
            if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
              if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                // 红绿灯偏转角度
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            } else {
              if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
                Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
                Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
                Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              }
            }
            if (p == 0) {
              Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
              Ctrafficlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              Ctrafficlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              // 左转灯图标点
              Cleftlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              Cleftlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0];
              // 右转等图标点
              Crightlightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              Crightlighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = Cjjcdx[2] + (Ccjcdx[1] - Cjjcdx[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
              Czhixinglighty[p] = Cjjcdy[2] + (Ccjcdy[1] - Cjjcdy[2]) / (Ctdj[0] + Ctdc[0]) * Ctdj[0] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
            } else {
              // 左转灯图标点
              Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
              Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
              // 右转等图标点
              Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
              Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
              // 通行灯坐标点
              Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
              Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
            }
          }
        }
      } else {
        // 若三个进口角度之间不存在180度夹角
        for (var p = 0; p < Cpzjd.length; p++) {
          var z = 0;
          var q = 0;
          if (p == 2) {
            z = 0;
            q = 1;
          } else {
            z = p + 1;
            if (z == 2) {
              q = 0;
            } else {
              q = z + 1;
            }
          }
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else {
            // 偏转角度
            if (Cckhxdy[p] - Cjkhxdy[p] < 0 && Cckhxdx[p] - Cjkhxdx[p] > 0) {
              Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Cckhxdy[p] - Cjkhxdy[p], Cjkhxdx[p] - Cckhxdx[p]);
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
            } else if (Cckhxdy[p] - Cjkhxdy[p] < 0 && Cckhxdx[p] - Cjkhxdx[p] < 0) {
              Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Cjkhxdy[p] - Cckhxdy[p], Cjkhxdx[p] - Cckhxdx[p]) - 90 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
            } else if (Cckhxdy[p] - Cjkhxdy[p] > 0 && Cckhxdx[p] - Cjkhxdx[p] > 0) {
              Ctrafficlightpzjd[p] = Math.atan2(Cckhxdy[p] - Cjkhxdy[p], Cckhxdx[p] - Cjkhxdx[p]) - 90 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
            } else if (Cckhxdy[p] - Cjkhxdy[p] > 0 && Cckhxdx[p] - Cjkhxdx[p] < 0) {
              Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Cckhxdy[p] - Cjkhxdy[p], Cjkhxdx[p] - Cckhxdx[p]) - 90 * Math.PI / 180;
              Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
            }
            Ctrafficlightpzjd[p] = Ctrafficlightpzjd[p] + 180 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
          Ctrafficlightx[p] = Cckhxdx[z];
          Ctrafficlighty[p] = Cckhxdy[z];
          // 左转灯图标点
          Cleftlightx[p] = Cckhxdx[z];
          Cleftlighty[p] = Cckhxdy[z];
          // 右转等图标点
          Crightlightx[p] = Cckhxdx[z] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
          Crightlighty[p] = Cckhxdy[z] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 4 / 3;
          // 通行灯坐标点
          Czhixinglightx[p] = Cckhxdx[z] + (Cjkhxdx[p] - Cckhxdx[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
          Czhixinglighty[p] = Cckhxdy[z] + (Cjkhxdy[p] - Cckhxdy[p]) / (Ctdj[p] + Ctdc[p]) * 2 / 3;
        }
      }
    } else if (Cpzjd.length == 4) {
      for (var p = 0; p < Cpzjd.length; p++) {
        var z = 0;
        var num = 0;
        var centerx = 0;
        var centery = 0;
        if (p == 0) {
          z = 2;
        } else if (p == 1) {
          z = 3;
        } else if (p == 2) {
          z = 0;
        } else if (p == 3) {
          z = 1;
        }
        centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
        centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
        // 计算中点有多少份半个车道宽度
        num = Ctdc[z] / 2 / 0.5;
        Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
        Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
        // 计算红绿灯图标偏转角度弧度值
        if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
          if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
          if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        } else {
          if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        }
        // 左转灯图标点
        Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        // 右转等图标点
        Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
        Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
        // 通行灯坐标点
        Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
        Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
      }
    } else if (Cpzjd.length == 5) {
      for (var p = 0; p < Cpzjd.length; p++) {
        var z = 0;
        var num = 0;
        var centerx = 0;
        var centery = 0;
        if (p == 0) {
          z = 2;
        } else if (p == 1) {
          z = 3;
        } else if (p == 2) {
          z = 0;
        } else if (p == 3) {
          z = 1;
        } else if (p == 4) {
          z = 4;
        }
        centerx = Czxxvsfootx[z] + (Cckhxdx[z] - Czxxvsfootx[z]) / 2;
        centery = Czxxvsfooty[z] + (Cckhxdy[z] - Czxxvsfooty[z]) / 2;
        // 计算中点有多少份半个车道宽度
        num = Ctdc[z] / 2 / 0.5;
        Ctrafficlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Ctrafficlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        Ctrafficlightzdx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2;
        Ctrafficlightzdy[p] = centery + (Cckhxdy[z] - centery) / num * 2;
        // 计算红绿灯图标偏转角度弧度值
        if (Ctrafficlightzdx[p] - Ctrafficlightx[p] == 0) {
          if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 0 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] == 0) {
          if (Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 270 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            // 红绿灯偏转角度
            Ctrafficlightpzjd[p] = 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        } else {
          if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            Ctrafficlightpzjd[p] = 90 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]);
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] < 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180 + Math.atan2(Ctrafficlighty[p] - Ctrafficlightzdy[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] > 0) {
            Ctrafficlightpzjd[p] = Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightzdx[p] - Ctrafficlightx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          } else if (Ctrafficlightzdy[p] - Ctrafficlighty[p] > 0 && Ctrafficlightzdx[p] - Ctrafficlightx[p] < 0) {
            Ctrafficlightpzjd[p] = 180 * Math.PI / 180 - Math.atan2(Ctrafficlightzdy[p] - Ctrafficlighty[p], Ctrafficlightx[p] - Ctrafficlightzdx[p]) - 90 * Math.PI / 180;
            Cfootlinelightpzjd[z] = Ctrafficlightpzjd[p];
          }
        }
        // 左转灯图标点
        Cleftlightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2;
        Cleftlighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2;
        // 右转等图标点
        Crightlightx[p] = centerx + (Cckhxdx[z] - centerx) / num * 2 / 3;
        Crightlighty[p] = centery + (Cckhxdy[z] - centery) / num * 2 / 3;
        // 通行灯坐标点
        Czhixinglightx[p] = centerx + (Czxxvsfootx[z] - centerx) / num * 2 / 3;
        Czhixinglighty[p] = centery + (Czxxvsfooty[z] - centery) / num * 2 / 3;
      }
    }
  }
  // 找出各进口人行线点坐标
  for (var t = 0; t < pzjd.length; t++) {
    var cdnum = tdj[t] + tdc[t];
    var jx = jfootline1x[t] + (jfootline2x[t] - jfootline1x[t]) / 2;
    var jy = jfootline1y[t] + (jfootline2y[t] - jfootline1y[t]) / 2;
    var cx = cfootline1x[t] + (cfootline2x[t] - cfootline1x[t]) / 2;
    var cy = cfootline1y[t] + (cfootline2y[t] - cfootline1y[t]) / 2;
    if (secondfoot[t] == 0) {
      // 该进口无二次过街
      if (t == 0) {
        footlight1x.splice(0, footlight1x.length);
        footlight1x[0] = jx + (cx - jx) / cdnum / 2;
        footlight1y[0] = jy + (cy - jy) / cdnum / 2;

        footlight1x[1] = cx + (jx - cx) / cdnum / 2;
        footlight1y[1] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 1) {
        footlight2x.splice(0, footlight2x.length);
        footlight2x[0] = jx + (cx - jx) / cdnum / 2;
        footlight2y[0] = jy + (cy - jy) / cdnum / 2;

        footlight2x[1] = cx + (jx - cx) / cdnum / 2;
        footlight2y[1] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 2) {
        footlight3x.splice(0, footlight3x.length);
        footlight3x[0] = jx + (cx - jx) / cdnum / 2;
        footlight3y[0] = jy + (cy - jy) / cdnum / 2;

        footlight3x[1] = cx + (jx - cx) / cdnum / 2;
        footlight3y[1] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 3) {
        footlight4x.splice(0, footlight4x.length);
        footlight4x[0] = jx + (cx - jx) / cdnum / 2;
        footlight4y[0] = jy + (cy - jy) / cdnum / 2;

        footlight4x[1] = cx + (jx - cx) / cdnum / 2;
        footlight4y[1] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 4) {
        footlight5x.splice(0, footlight5x.length);
        footlight5x[0] = jx + (cx - jx) / cdnum / 2;
        footlight5y[0] = jy + (cy - jy) / cdnum / 2;

        footlight5x[1] = cx + (jx - cx) / cdnum / 2;
        footlight5y[1] = cy + (jy - cy) / cdnum / 2;
      }
    } else if (secondfoot[t] == 1) {
      // 该进口有二次过街
      if (t == 0) {
        footlight1x[0] = jx + (cx - jx) / cdnum / 2;
        footlight1y[0] = jy + (cy - jy) / cdnum / 2;

        footlight1x[1] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 - 1);
        footlight1y[1] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 - 1);

        footlight1x[2] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 + 1);
        footlight1y[2] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 + 1);

        footlight1x[3] = cx + (jx - cx) / cdnum / 2;
        footlight1y[3] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 1) {
        footlight2x[0] = jx + (cx - jx) / cdnum / 2;
        footlight2y[0] = jy + (cy - jy) / cdnum / 2;

        footlight2x[1] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 - 1);
        footlight2y[1] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 - 1);

        footlight2x[2] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 + 1);
        footlight2y[2] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 + 1);

        footlight2x[3] = cx + (jx - cx) / cdnum / 2;
        footlight2y[3] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 2) {
        footlight3x[0] = jx + (cx - jx) / cdnum / 2;
        footlight3y[0] = jy + (cy - jy) / cdnum / 2;

        footlight3x[1] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 - 1);
        footlight3y[1] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 - 1);

        footlight3x[2] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 + 1);
        footlight3y[2] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 + 1);

        footlight3x[3] = cx + (jx - cx) / cdnum / 2;
        footlight3y[3] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 3) {
        footlight4x[0] = jx + (cx - jx) / cdnum / 2;
        footlight4y[0] = jy + (cy - jy) / cdnum / 2;

        footlight4x[1] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 - 1);
        footlight4y[1] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 - 1);

        footlight4x[2] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 + 1);
        footlight4y[2] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 + 1);

        footlight4x[3] = cx + (jx - cx) / cdnum / 2;
        footlight4y[3] = cy + (jy - cy) / cdnum / 2;
      } else if (t == 4) {
        footlight5x[0] = jx + (cx - jx) / cdnum / 2;
        footlight5y[0] = jy + (cy - jy) / cdnum / 2;

        footlight5x[1] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 - 1);
        footlight5y[1] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 - 1);

        footlight5x[2] = jx + (cx - jx) / cdnum / 2 * (tdj[t] * 2 + 1);
        footlight5y[2] = jy + (cy - jy) / cdnum / 2 * (tdj[t] * 2 + 1);

        footlight5x[3] = cx + (jx - cx) / cdnum / 2;
        footlight5y[3] = cy + (jy - cy) / cdnum / 2;
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出各进口人行线点坐标
    for (var t = 0; t < Cpzjd.length; t++) {
      var cdnum = Ctdj[t] + Ctdc[t];
      var jx = Cjfootline1x[t] + (Cjfootline2x[t] - Cjfootline1x[t]) / 2;
      var jy = Cjfootline1y[t] + (Cjfootline2y[t] - Cjfootline1y[t]) / 2;
      var cx = Ccfootline1x[t] + (Ccfootline2x[t] - Ccfootline1x[t]) / 2;
      var cy = Ccfootline1y[t] + (Ccfootline2y[t] - Ccfootline1y[t]) / 2;

      if (Csecondfoot[t] == 0) {
        // 该进口无二次过街
        if (t == 0) {
          Cfootlight1x.splice(0, Cfootlight1x.length);
          Cfootlight1x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight1y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight1x[1] = cx + (jx - cx) / cdnum / 2;
          Cfootlight1y[1] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 1) {
          Cfootlight2x.splice(0, Cfootlight2x.length);
          Cfootlight2x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight2y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight2x[1] = cx + (jx - cx) / cdnum / 2;
          Cfootlight2y[1] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 2) {
          Cfootlight3x.splice(0, Cfootlight3x.length);
          Cfootlight3x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight3y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight3x[1] = cx + (jx - cx) / cdnum / 2;
          Cfootlight3y[1] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 3) {
          Cfootlight4x.splice(0, Cfootlight4x.length);
          Cfootlight4x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight4y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight4x[1] = cx + (jx - cx) / cdnum / 2;
          Cfootlight4y[1] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 4) {
          Cfootlight5x.splice(0, Cfootlight5x.length);
          Cfootlight5x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight5y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight5x[1] = cx + (jx - cx) / cdnum / 2;
          Cfootlight5y[1] = cy + (jy - cy) / cdnum / 2;
        }
      } else if (Csecondfoot[t] == 1) {
        // 该进口有二次过街
        if (t == 0) {
          Cfootlight1x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight1y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight1x[1] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 - 1);
          Cfootlight1y[1] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 - 1);

          Cfootlight1x[2] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 + 1);
          Cfootlight1y[2] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 + 1);

          Cfootlight1x[3] = cx + (jx - cx) / cdnum / 2;
          Cfootlight1y[3] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 1) {
          Cfootlight2x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight2y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight2x[1] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 - 1);
          Cfootlight2y[1] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 - 1);

          Cfootlight2x[2] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 + 1);
          Cfootlight2y[2] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 + 1);

          Cfootlight2x[3] = cx + (jx - cx) / cdnum / 2;
          Cfootlight2y[3] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 2) {
          Cfootlight3x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight3y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight3x[1] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 - 1);
          Cfootlight3y[1] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 - 1);

          Cfootlight3x[2] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 + 1);
          Cfootlight3y[2] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 + 1);

          Cfootlight3x[3] = cx + (jx - cx) / cdnum / 2;
          Cfootlight3y[3] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 3) {
          Cfootlight4x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight4y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight4x[1] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 - 1);
          Cfootlight4y[1] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 - 1);

          Cfootlight4x[2] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 + 1);
          Cfootlight4y[2] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 + 1);

          Cfootlight4x[3] = cx + (jx - cx) / cdnum / 2;
          Cfootlight4y[3] = cy + (jy - cy) / cdnum / 2;
        } else if (t == 4) {
          Cfootlight5x[0] = jx + (cx - jx) / cdnum / 2;
          Cfootlight5y[0] = jy + (cy - jy) / cdnum / 2;

          Cfootlight5x[1] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 - 1);
          Cfootlight5y[1] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 - 1);

          Cfootlight5x[2] = jx + (cx - jx) / cdnum / 2 * (Ctdj[t] * 2 + 1);
          Cfootlight5y[2] = jy + (cy - jy) / cdnum / 2 * (Ctdj[t] * 2 + 1);

          Cfootlight5x[3] = cx + (jx - cx) / cdnum / 2;
          Cfootlight5y[3] = cy + (jy - cy) / cdnum / 2;
        }
      }
    }
  }
  // 找出各进口流量数据、排队长度数据点位信息
  for (var p = 0; p < pzjd.length; p++) {
    if (p == 0) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] + tdkd * 0.6;
          jkvoldata1y[j] = jkvolxq1y[j] + tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] + tdkd * 0.6;
          jkpdcddata1y[j] = jkpdcdxq1y[j] + tdkd * 0.5;
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata1y[j] = jkvolxq1y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata1y[j] = jkpdcdxq1y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 90) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] - tdkd * 0.5;
          jkvoldata1y[j] = jkvolxq1y[j] + tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] - tdkd * 0.5;
          jkpdcddata1y[j] = jkpdcdxq1y[j] + tdkd * 0.6;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          // 第二个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata1y[j] = jkvolxq1y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第二个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata1y[j] = jkpdcdxq1y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 180) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] - tdkd * 0.6;
          jkvoldata1y[j] = jkvolxq1y[j] - tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] - tdkd * 0.6;
          jkpdcddata1y[j] = jkpdcdxq1y[j] - tdkd * 0.5;
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata1y[j] = jkvolxq1y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata1y[j] = jkpdcdxq1y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 270) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] + tdkd * 0.5;
          jkvoldata1y[j] = jkvolxq1y[j] - tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] + tdkd * 0.5;
          jkpdcddata1y[j] = jkpdcdxq1y[j] - tdkd * 0.6;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          // 第一个进口流量数据坐标
          jkvoldata1x[j] = jkvolxq1x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata1y[j] = jkvolxq1y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata1x[j] = jkpdcdxq1x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata1y[j] = jkpdcdxq1y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        }
      }
    } else if (p == 1) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] + tdkd * 0.6;
          jkvoldata2y[j] = jkvolxq2y[j] + tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] + tdkd * 0.6;
          jkpdcddata2y[j] = jkpdcdxq2y[j] + tdkd * 0.5;
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata2y[j] = jkvolxq2y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata2y[j] = jkpdcdxq2y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 90) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] - tdkd * 0.5;
          jkvoldata2y[j] = jkvolxq2y[j] + tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] - tdkd * 0.5;
          jkpdcddata2y[j] = jkpdcdxq2y[j] + tdkd * 0.6;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          // 第二个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata2y[j] = jkvolxq2y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第二个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata2y[j] = jkpdcdxq2y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 180) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] - tdkd * 0.6;
          jkvoldata2y[j] = jkvolxq2y[j] - tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] - tdkd * 0.6;
          jkpdcddata2y[j] = jkpdcdxq2y[j] - tdkd * 0.5;
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata2y[j] = jkvolxq2y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata2y[j] = jkpdcdxq2y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 270) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] + tdkd * 0.5;
          jkvoldata2y[j] = jkvolxq2y[j] - tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] + tdkd * 0.5;
          jkpdcddata2y[j] = jkpdcdxq2y[j] - tdkd * 0.6;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          // 第一个进口流量数据坐标
          jkvoldata2x[j] = jkvolxq2x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata2y[j] = jkvolxq2y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata2x[j] = jkpdcdxq2x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata2y[j] = jkpdcdxq2y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        }
      }
    } else if (p == 2) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] + tdkd * 0.6;
          jkvoldata3y[j] = jkvolxq3y[j] + tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] + tdkd * 0.6;
          jkpdcddata3y[j] = jkpdcdxq3y[j] + tdkd * 0.5;
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata3y[j] = jkvolxq3y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata3y[j] = jkpdcdxq3y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 90) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] - tdkd * 0.5;
          jkvoldata3y[j] = jkvolxq3y[j] + tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] - tdkd * 0.5;
          jkpdcddata3y[j] = jkpdcdxq3y[j] + tdkd * 0.6;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          // 第二个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata3y[j] = jkvolxq3y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第二个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata3y[j] = jkpdcdxq3y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 180) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] - tdkd * 0.6;
          jkvoldata3y[j] = jkvolxq3y[j] - tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] - tdkd * 0.6;
          jkpdcddata3y[j] = jkpdcdxq3y[j] - tdkd * 0.5;
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata3y[j] = jkvolxq3y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata3y[j] = jkpdcdxq3y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 270) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] + tdkd * 0.5;
          jkvoldata3y[j] = jkvolxq3y[j] - tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] + tdkd * 0.5;
          jkpdcddata3y[j] = jkpdcdxq3y[j] - tdkd * 0.6;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          // 第一个进口流量数据坐标
          jkvoldata3x[j] = jkvolxq3x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata3y[j] = jkvolxq3y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata3x[j] = jkpdcdxq3x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata3y[j] = jkpdcdxq3y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        }
      }
    } else if (p == 3) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] + tdkd * 0.6;
          jkvoldata4y[j] = jkvolxq4y[j] + tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] + tdkd * 0.6;
          jkpdcddata4y[j] = jkpdcdxq4y[j] + tdkd * 0.5;
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata4y[j] = jkvolxq4y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata4y[j] = jkpdcdxq4y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 90) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] - tdkd * 0.5;
          jkvoldata4y[j] = jkvolxq4y[j] + tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] - tdkd * 0.5;
          jkpdcddata4y[j] = jkpdcdxq4y[j] + tdkd * 0.6;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          // 第二个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata4y[j] = jkvolxq4y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第二个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata4y[j] = jkpdcdxq4y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 180) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] - tdkd * 0.6;
          jkvoldata4y[j] = jkvolxq4y[j] - tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] - tdkd * 0.6;
          jkpdcddata4y[j] = jkpdcdxq4y[j] - tdkd * 0.5;
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata4y[j] = jkvolxq4y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata4y[j] = jkpdcdxq4y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 270) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] + tdkd * 0.5;
          jkvoldata4y[j] = jkvolxq4y[j] - tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] + tdkd * 0.5;
          jkpdcddata4y[j] = jkpdcdxq4y[j] - tdkd * 0.6;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          // 第一个进口流量数据坐标
          jkvoldata4x[j] = jkvolxq4x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata4y[j] = jkvolxq4y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata4x[j] = jkpdcdxq4x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata4y[j] = jkpdcdxq4y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        }
      }
    } else if (p == 4) {
      for (var j = 0; j < tdj[p]; j++) {
        if (pzjd[p] == 0 || pzjd[p] == 360) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] + tdkd * 0.6;
          jkvoldata5y[j] = jkvolxq5y[j] + tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] + tdkd * 0.6;
          jkpdcddata5y[j] = jkpdcdxq5y[j] + tdkd * 0.5;
        } else if (pzjd[p] > 0 && pzjd[p] < 90) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata5y[j] = jkvolxq5y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] + Math.cos(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata5y[j] = jkpdcdxq5y[j] + Math.sin(Math.atan(5 / 6) + pzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 90) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] - tdkd * 0.5;
          jkvoldata5y[j] = jkvolxq5y[j] + tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] - tdkd * 0.5;
          jkpdcddata5y[j] = jkpdcdxq5y[j] + tdkd * 0.6;
        } else if (pzjd[p] > 90 && pzjd[p] < 180) {
          // 第二个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata5y[j] = jkvolxq5y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第二个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata5y[j] = jkpdcdxq5y[j] + Math.cos(Math.atan(5 / 6) + (pzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 180) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] - tdkd * 0.6;
          jkvoldata5y[j] = jkvolxq5y[j] - tdkd * 0.5;
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] - tdkd * 0.6;
          jkpdcddata5y[j] = jkpdcdxq5y[j] - tdkd * 0.5;
        } else if (pzjd[p] > 180 && pzjd[p] < 270) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata5y[j] = jkvolxq5y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata5y[j] = jkpdcdxq5y[j] - Math.sin(Math.atan(5 / 6) + (pzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        } else if (pzjd[p] == 270) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] + tdkd * 0.5;
          jkvoldata5y[j] = jkvolxq5y[j] - tdkd * 0.6;
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] + tdkd * 0.5;
          jkpdcddata5y[j] = jkpdcdxq5y[j] - tdkd * 0.6;
        } else if (pzjd[p] > 270 && pzjd[p] < 360) {
          // 第一个进口流量数据坐标
          jkvoldata5x[j] = jkvolxq5x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkvoldata5y[j] = jkvolxq5y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          // 第一个进口排队长度数据坐标S
          jkpdcddata5x[j] = jkpdcdxq5x[j] + Math.sin(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          jkpdcddata5y[j] = jkpdcdxq5y[j] - Math.cos(Math.atan(5 / 6) + (pzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
        }
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 找出各进口流量数据、排队长度数据点位信息
    for (var p = 0; p < Cpzjd.length; p++) {
      if (p == 0) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] + tdkd * 0.6;
            Cjkvoldata1y[j] = Cjkvolxq1y[j] + tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] + tdkd * 0.6;
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] + tdkd * 0.5;
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata1y[j] = Cjkvolxq1y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] - tdkd * 0.5;
            Cjkvoldata1y[j] = Cjkvolxq1y[j] + tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] - tdkd * 0.5;
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] + tdkd * 0.6;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            // 第二个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata1y[j] = Cjkvolxq1y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第二个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 180) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] - tdkd * 0.6;
            Cjkvoldata1y[j] = Cjkvolxq1y[j] - tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] - tdkd * 0.6;
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] - tdkd * 0.5;
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata1y[j] = Cjkvolxq1y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] + tdkd * 0.5;
            Cjkvoldata1y[j] = Cjkvolxq1y[j] - tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] + tdkd * 0.5;
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] - tdkd * 0.6;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata1x[j] = Cjkvolxq1x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata1y[j] = Cjkvolxq1y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata1x[j] = Cjkpdcdxq1x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata1y[j] = Cjkpdcdxq1y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          }
        }
      } else if (p == 1) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] + tdkd * 0.6;
            Cjkvoldata2y[j] = Cjkvolxq2y[j] + tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] + tdkd * 0.6;
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] + tdkd * 0.5;
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata2y[j] = Cjkvolxq2y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] - tdkd * 0.5;
            Cjkvoldata2y[j] = Cjkvolxq2y[j] + tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] - tdkd * 0.5;
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] + tdkd * 0.6;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            // 第二个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata2y[j] = Cjkvolxq2y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第二个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 180) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] - tdkd * 0.6;
            Cjkvoldata2y[j] = Cjkvolxq2y[j] - tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] - tdkd * 0.6;
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] - tdkd * 0.5;
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata2y[j] = Cjkvolxq2y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] + tdkd * 0.5;
            Cjkvoldata2y[j] = Cjkvolxq2y[j] - tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] + tdkd * 0.5;
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] - tdkd * 0.6;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata2x[j] = Cjkvolxq2x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata2y[j] = Cjkvolxq2y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata2x[j] = Cjkpdcdxq2x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata2y[j] = Cjkpdcdxq2y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          }
        }
      } else if (p == 2) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] + tdkd * 0.6;
            Cjkvoldata3y[j] = Cjkvolxq3y[j] + tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] + tdkd * 0.6;
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] + tdkd * 0.5;
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata3y[j] = Cjkvolxq3y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] - tdkd * 0.5;
            Cjkvoldata3y[j] = Cjkvolxq3y[j] + tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] - tdkd * 0.5;
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] + tdkd * 0.6;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            // 第二个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata3y[j] = Cjkvolxq3y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第二个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 180) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] - tdkd * 0.6;
            Cjkvoldata3y[j] = Cjkvolxq3y[j] - tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] - tdkd * 0.6;
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] - tdkd * 0.5;
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata3y[j] = Cjkvolxq3y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] + tdkd * 0.5;
            Cjkvoldata3y[j] = Cjkvolxq3y[j] - tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] + tdkd * 0.5;
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] - tdkd * 0.6;
          } else if (pzjd[p] > 270 && pzjd[p] < 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata3x[j] = Cjkvolxq3x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata3y[j] = Cjkvolxq3y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata3x[j] = Cjkpdcdxq3x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata3y[j] = Cjkpdcdxq3y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          }
        }
      } else if (p == 3) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] + tdkd * 0.6;
            Cjkvoldata4y[j] = Cjkvolxq4y[j] + tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] + tdkd * 0.6;
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] + tdkd * 0.5;
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata4y[j] = Cjkvolxq4y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] - tdkd * 0.5;
            Cjkvoldata4y[j] = Cjkvolxq4y[j] + tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] - tdkd * 0.5;
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] + tdkd * 0.6;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            // 第二个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata4y[j] = Cjkvolxq4y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第二个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 180) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] - tdkd * 0.6;
            Cjkvoldata4y[j] = Cjkvolxq4y[j] - tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] - tdkd * 0.6;
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] - tdkd * 0.5;
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata4y[j] = Cjkvolxq4y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] + tdkd * 0.5;
            Cjkvoldata4y[j] = Cjkvolxq4y[j] - tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] + tdkd * 0.5;
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] - tdkd * 0.6;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata4x[j] = Cjkvolxq4x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata4y[j] = Cjkvolxq4y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata4x[j] = Cjkpdcdxq4x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata4y[j] = Cjkpdcdxq4y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          }
        }
      } else if (p == 4) {
        for (var j = 0; j < Ctdj[p]; j++) {
          if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] + tdkd * 0.6;
            Cjkvoldata5y[j] = Cjkvolxq5y[j] + tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] + tdkd * 0.6;
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] + tdkd * 0.5;
          } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata5y[j] = Cjkvolxq5y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] + Math.cos(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] + Math.sin(Math.atan(5 / 6) + Cpzjd[p] * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 90) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] - tdkd * 0.5;
            Cjkvoldata5y[j] = Cjkvolxq5y[j] + tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] - tdkd * 0.5;
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] + tdkd * 0.6;
          } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
            // 第二个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata5y[j] = Cjkvolxq5y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第二个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] + Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 90) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 180) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] - tdkd * 0.6;
            Cjkvoldata5y[j] = Cjkvolxq5y[j] - tdkd * 0.5;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] - tdkd * 0.6;
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] - tdkd * 0.5;
          } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata5y[j] = Cjkvolxq5y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] - Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 180) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          } else if (Cpzjd[p] == 270) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] + tdkd * 0.5;
            Cjkvoldata5y[j] = Cjkvolxq5y[j] - tdkd * 0.6;
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] + tdkd * 0.5;
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] - tdkd * 0.6;
          } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
            // 第一个进口流量数据坐标
            Cjkvoldata5x[j] = Cjkvolxq5x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkvoldata5y[j] = Cjkvolxq5y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            // 第一个进口排队长度数据坐标S
            Cjkpdcddata5x[j] = Cjkpdcdxq5x[j] + Math.sin(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
            Cjkpdcddata5y[j] = Cjkpdcdxq5y[j] - Math.cos(Math.atan(5 / 6) + (Cpzjd[p] - 270) * Math.PI / 180) * Math.sqrt(0.5 * tdkd * 0.5 * tdkd + 0.6 * tdkd * 0.6 * tdkd);
          }
        }
      }
    }
  }
  // 若showtype类型为2或3 则计算 流向配置相关坐标
  if (showtype == 9 || showtype == 8 || showtype == 7 || showtype == 2 || showtype == 3 || showtype == 4 || showtype == 6) {
    // 计算流向配置白底坐标
    for (var p = 0; p < pzjd.length; p++) {
      // 流向配置白底四个点坐标
      if (tdj[p] < 2) {
        lxbdpoint1x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]);
        lxbdpoint1y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]);

        lxbdpoint4x[p] = zxxvsfootx[p];
        lxbdpoint4y[p] = zxxvsfooty[p];
      } else {
        lxbdpoint1x[p] = jkhxdx[p];
        lxbdpoint1y[p] = jkhxdy[p];

        lxbdpoint4x[p] = zxxvsfootx[p];
        lxbdpoint4y[p] = zxxvsfooty[p];
      }
      if (pzjd[p] == 0 || pzjd[p] == 360) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) + tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]);

          lxbdpoint3x[p] = zxxvsfootx[p] + tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p];
        } else {
          lxbdpoint2x[p] = jkhxdx[p] + tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p];

          lxbdpoint3x[p] = zxxvsfootx[p] + tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p];
        }
      } else if (pzjd[p] > 0 && pzjd[p] < 90) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] + Math.cos(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] + Math.sin(pzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
        }
      } else if (pzjd[p] == 90) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]);
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) + tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p];
          lxbdpoint3y[p] = zxxvsfooty[p] + tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p];
          lxbdpoint2y[p] = jkhxdy[p] + tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p];
          lxbdpoint3y[p] = zxxvsfooty[p] + tdkd * 2;
        }
      } else if (pzjd[p] > 90 && pzjd[p] < 180) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] - Math.sin((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] + Math.cos((pzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
        }
      } else if (pzjd[p] == 180) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) - tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]);

          lxbdpoint3x[p] = zxxvsfootx[p] - tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p];
        } else {
          lxbdpoint2x[p] = jkhxdx[p] - tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p];

          lxbdpoint3x[p] = zxxvsfootx[p] - tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p];
        }
      } else if (pzjd[p] > 180 && pzjd[p] < 270) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] - Math.cos((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] - Math.sin((pzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
        }
      } else if (pzjd[p] == 270) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]);
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) - tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p];
          lxbdpoint3y[p] = zxxvsfooty[p] - tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p];
          lxbdpoint2y[p] = jkhxdy[p] - tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p];
          lxbdpoint3y[p] = zxxvsfooty[p] - tdkd * 2;
        }
      } else if (pzjd[p] > 270 && pzjd[p] < 360) {
        if (tdj[p] < 2) {
          lxbdpoint2x[p] = jkhxdx[p] + (jkhxdx[p] - zxxvsfootx[p]) + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] + (jkhxdy[p] - zxxvsfooty[p]) - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        } else {
          lxbdpoint2x[p] = jkhxdx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint2y[p] = jkhxdy[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;

          lxbdpoint3x[p] = zxxvsfootx[p] + Math.sin((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          lxbdpoint3y[p] = zxxvsfooty[p] - Math.cos((pzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
        }
      }
    }

    // 初始化流向个数
    for (var p = 0; p < jkid.length; p++) {
      jkliuxiangcount[p] = 0;
    }
    // 找出每个进口除开人行还有多少流向
    for (var t = 0; t < liuxianghao.length; t++) {
      for (var p = 0; p < jkid.length; p++) {
        if (jinkouid[t] == jkid[p]) {
          if (iscontrl[t] != 0 && liuxiangpz[t] != 4 && liuxiangpz[t] != 10 && liuxiangpz[t] != 11 && liuxiangpz[t] != 12 && liuxiangpz[t] != 13 && liuxiangpz[t] != 14) {
            jkliuxiangcount[p] = jkliuxiangcount[p] + 1;
          }
        }
      }
    }
    // 初始化矩形坐标值
    for (var t = 0; t < liuxianghao.length; t++) {
      jxpoint1x[t] = 0;
      jxpoint1y[t] = 0;

      jxpoint2x[t] = 0;
      jxpoint2y[t] = 0;

      jxpoint3x[t] = 0;
      jxpoint3y[t] = 0;

      jxpoint4x[t] = 0;
      jxpoint4y[t] = 0;
    }
    // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
    // 计算非人行线流向箭头坐标和点击事件矩形相关4个点坐标
    for (var d = 0; d < jkid.length; d++) { // dff
      var j = 0;
      for (var t = 0; t < liuxianghao.length; t++) {
        if (iscontrl[t] == 1 && jkid[d] == jinkouid[t] && liuxiangshunxu.indexOf(liuxiangpz[t]) != -1) {
          // 矩形四个点坐标
          jxpoint1x[t] = lxbdpoint1x[d] + (lxbdpoint4x[d] - lxbdpoint1x[d]) * (jkliuxiangcount[d] - j - 1) / jkliuxiangcount[d];
          jxpoint1y[t] = lxbdpoint1y[d] + (lxbdpoint4y[d] - lxbdpoint1y[d]) * (jkliuxiangcount[d] - j - 1) / jkliuxiangcount[d];

          jxpoint2x[t] = lxbdpoint2x[d] + (lxbdpoint3x[d] - lxbdpoint2x[d]) * (jkliuxiangcount[d] - j - 1) / jkliuxiangcount[d];
          jxpoint2y[t] = lxbdpoint2y[d] + (lxbdpoint3y[d] - lxbdpoint2y[d]) * (jkliuxiangcount[d] - j - 1) / jkliuxiangcount[d];

          jxpoint3x[t] = lxbdpoint2x[d] + (lxbdpoint3x[d] - lxbdpoint2x[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          jxpoint3y[t] = lxbdpoint2y[d] + (lxbdpoint3y[d] - lxbdpoint2y[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];

          jxpoint4x[t] = lxbdpoint1x[d] + (lxbdpoint4x[d] - lxbdpoint1x[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          jxpoint4y[t] = lxbdpoint1y[d] + (lxbdpoint4y[d] - lxbdpoint1y[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          j = j + 1;
        }
      }
    }
    // 重新计算人行线流向箭头坐标和点击事件矩形相关4个点坐标
    for (var t = 0; t < liuxianghao.length; t++) {
      // 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2,12-非机动车左，13-非机动车直，14-非机动车左直
      if (liuxiangpz[t] == 4) { // 人行
        for (var d = 0; d < jkid.length; d++) {
          if (jkid[d] == jinkouid[t]) {
            // 矩形四个点坐标
            jxpoint1x[t] = jfootline1x[d];
            jxpoint1y[t] = jfootline1y[d];

            jxpoint2x[t] = jfootline2x[d];
            jxpoint2y[t] = jfootline2y[d];

            jxpoint3x[t] = jfootline2x[d] + (cfootline2x[d] - jfootline2x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint3y[t] = jfootline2y[d] + (cfootline2y[d] - jfootline2y[d]) * tdj[d] / (tdj[d] + tdc[d]);

            jxpoint4x[t] = jfootline1x[d] + (cfootline1x[d] - jfootline1x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint4y[t] = jfootline1y[d] + (cfootline1y[d] - jfootline1y[d]) * tdj[d] / (tdj[d] + tdc[d]);
          }
        }
      } else if (liuxiangpz[t] == 10) { // 人行1
        for (var d = 0; d < jkid.length; d++) {
          if (jkid[d] == jinkouid[t]) {
            // 矩形四个点坐标
            jxpoint1x[t] = jfootline1x[d];
            jxpoint1y[t] = jfootline1y[d];

            jxpoint2x[t] = jfootline2x[d];
            jxpoint2y[t] = jfootline2y[d];

            jxpoint3x[t] = jfootline2x[d] + (cfootline2x[d] - jfootline2x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint3y[t] = jfootline2y[d] + (cfootline2y[d] - jfootline2y[d]) * tdj[d] / (tdj[d] + tdc[d]);

            jxpoint4x[t] = jfootline1x[d] + (cfootline1x[d] - jfootline1x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint4y[t] = jfootline1y[d] + (cfootline1y[d] - jfootline1y[d]) * tdj[d] / (tdj[d] + tdc[d]);
          }
        }
      } else if (liuxiangpz[t] == 11) { // 人行2
        for (var d = 0; d < jkid.length; d++) {
          if (jkid[d] == jinkouid[t]) {
            // 矩形四个点坐标
            jxpoint1x[t] = jfootline1x[d] + (cfootline1x[d] - jfootline1x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint1y[t] = jfootline1y[d] + (cfootline1y[d] - jfootline1y[d]) * tdj[d] / (tdj[d] + tdc[d]);

            jxpoint2x[t] = jfootline2x[d] + (cfootline2x[d] - jfootline2x[d]) * tdj[d] / (tdj[d] + tdc[d]);
            jxpoint2y[t] = jfootline2y[d] + (cfootline2y[d] - jfootline2y[d]) * tdj[d] / (tdj[d] + tdc[d]);

            jxpoint3x[t] = cfootline2x[d];
            jxpoint3y[t] = cfootline2y[d];

            jxpoint4x[t] = cfootline1x[d];
            jxpoint4y[t] = cfootline1y[d];
          }
        }
      }
    }

    // 重新计算非机动车流向箭头坐标和点击事件矩形相关4个点坐标
    for (var d = 0; d < jkid.length; d++) { // dff
      var j = tdj[d] + 0.2;
      for (var t = 0; t < liuxianghao.length; t++) {
        if (iscontrl[t] == 1 && jkid[d] == jinkouid[t] && (liuxiangpz[t] == 12 || liuxiangpz[t] == 13 || liuxiangpz[t] == 14)) { // 非机动车左,直行,左直
          // 矩形四个点坐标
          jxpoint1x[t] = lxbdpoint1x[d] + (lxbdpoint4x[d] - lxbdpoint1x[d]) * (jkliuxiangcount[d] - j - 0.6) / jkliuxiangcount[d];
          jxpoint1y[t] = lxbdpoint1y[d] + (lxbdpoint4y[d] - lxbdpoint1y[d]) * (jkliuxiangcount[d] - j - 0.6) / jkliuxiangcount[d];

          jxpoint2x[t] = lxbdpoint2x[d] + (lxbdpoint3x[d] - lxbdpoint2x[d]) * (jkliuxiangcount[d] - j - 0.6) / jkliuxiangcount[d];
          jxpoint2y[t] = lxbdpoint2y[d] + (lxbdpoint3y[d] - lxbdpoint2y[d]) * (jkliuxiangcount[d] - j - 0.6) / jkliuxiangcount[d];

          jxpoint3x[t] = lxbdpoint2x[d] + (lxbdpoint3x[d] - lxbdpoint2x[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          jxpoint3y[t] = lxbdpoint2y[d] + (lxbdpoint3y[d] - lxbdpoint2y[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];

          jxpoint4x[t] = lxbdpoint1x[d] + (lxbdpoint4x[d] - lxbdpoint1x[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          jxpoint4y[t] = lxbdpoint1y[d] + (lxbdpoint4y[d] - lxbdpoint1y[d]) * (jkliuxiangcount[d] - j) / jkliuxiangcount[d];
          j = j + 0.6;
        }
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 若showtype类型为2或3 则计算 流向配置相关坐标
    if (showtype == 9 || showtype == 8 || showtype == 7 || showtype == 2 || showtype == 3 || showtype == 4 || showtype == 6) {
      // 计算流向配置白底坐标
      for (var p = 0; p < Cpzjd.length; p++) {
        // 流向配置白底四个点坐标
        if (Ctdj[p] < 2) {
          Clxbdpoint1x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]);
          Clxbdpoint1y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]);

          Clxbdpoint4x[p] = Czxxvsfootx[p];
          Clxbdpoint4y[p] = Czxxvsfooty[p];
        } else {
          Clxbdpoint1x[p] = Cjkhxdx[p];
          Clxbdpoint1y[p] = Cjkhxdy[p];

          Clxbdpoint4x[p] = Czxxvsfootx[p];
          Clxbdpoint4y[p] = Czxxvsfooty[p];
        }
        if (Cpzjd[p] == 0 || Cpzjd[p] == 360) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) + tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]);

            Clxbdpoint3x[p] = Czxxvsfootx[p] + tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p];
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] + tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p];

            Clxbdpoint3x[p] = Czxxvsfootx[p] + tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p];
          }
        } else if (Cpzjd[p] > 0 && Cpzjd[p] < 90) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] + Math.cos(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] + Math.sin(Cpzjd[p] * Math.PI * 2 / 360) * tdkd * 2;
          }
        } else if (Cpzjd[p] == 90) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]);
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) + tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p];
            Clxbdpoint3y[p] = Czxxvsfooty[p] + tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p];
            Clxbdpoint2y[p] = Cjkhxdy[p] + tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p];
            Clxbdpoint3y[p] = Czxxvsfooty[p] + tdkd * 2;
          }
        } else if (Cpzjd[p] > 90 && Cpzjd[p] < 180) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] - Math.sin((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] + Math.cos((Cpzjd[p] - 90) * Math.PI * 2 / 360) * tdkd * 2;
          }
        } else if (Cpzjd[p] == 180) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) - tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]);

            Clxbdpoint3x[p] = Czxxvsfootx[p] - tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p];
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] - tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p];

            Clxbdpoint3x[p] = Czxxvsfootx[p] - tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p];
          }
        } else if (Cpzjd[p] > 180 && Cpzjd[p] < 270) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] - Math.cos((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] - Math.sin((Cpzjd[p] - 180) * Math.PI * 2 / 360) * tdkd * 2;
          }
        } else if (Cpzjd[p] == 270) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]);
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) - tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p];
            Clxbdpoint3y[p] = Czxxvsfooty[p] - tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p];
            Clxbdpoint2y[p] = Cjkhxdy[p] - tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p];
            Clxbdpoint3y[p] = Czxxvsfooty[p] - tdkd * 2;
          }
        } else if (Cpzjd[p] > 270 && Cpzjd[p] < 360) {
          if (Ctdj[p] < 2) {
            Clxbdpoint2x[p] = Cjkhxdx[p] + (Cjkhxdx[p] - Czxxvsfootx[p]) + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] + (Cjkhxdy[p] - Czxxvsfooty[p]) - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          } else {
            Clxbdpoint2x[p] = Cjkhxdx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint2y[p] = Cjkhxdy[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;

            Clxbdpoint3x[p] = Czxxvsfootx[p] + Math.sin((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
            Clxbdpoint3y[p] = Czxxvsfooty[p] - Math.cos((Cpzjd[p] - 270) * Math.PI * 2 / 360) * tdkd * 2;
          }
        }
      }

      // 初始化流向个数
      for (var p = 0; p < Cjkid.length; p++) {
        Cjkliuxiangcount[p] = 0;
      }
      // 找出每个进口除开人行和非机动车道还有多少流向
      for (var t = 0; t < Cliuxianghao.length; t++) {
        for (var p = 0; p < Cjkid.length; p++) {
          if (Cjinkouid[t] == Cjkid[p]) {
            if (Ciscontrl[t] != 0 && Cliuxiangpz[t] != 4 && Cliuxiangpz[t] != 10 && Cliuxiangpz[t] != 11 && Cliuxiangpz[t] != 12 && Cliuxiangpz[t] != 13 && Cliuxiangpz[t] != 14) {
              Cjkliuxiangcount[p] = Cjkliuxiangcount[p] + 1;
            }
          }
        }
      }

      // 初始化矩形坐标值
      for (var t = 0; t < Cliuxianghao.length; t++) {
        Cjxpoint1x[t] = 0;
        Cjxpoint1y[t] = 0;

        Cjxpoint2x[t] = 0;
        Cjxpoint2y[t] = 0;

        Cjxpoint3x[t] = 0;
        Cjxpoint3y[t] = 0;

        Cjxpoint4x[t] = 0;
        Cjxpoint4y[t] = 0;
      }
      // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
      // 计算非人行线流向箭头坐标和点击事件矩形相关4个点坐标
      for (var d = 0; d < Cjkid.length; d++) {
        var j = 0;
        for (var t = 0; t < Cliuxianghao.length; t++) {
          if (Ciscontrl[t] == 1 && Cjkid[d] == Cjinkouid[t] && liuxiangshunxu.indexOf(Cliuxiangpz[t]) != -1) {
            // 矩形四个点坐标
            Cjxpoint1x[t] = Clxbdpoint1x[d] + (Clxbdpoint4x[d] - Clxbdpoint1x[d]) * (Cjkliuxiangcount[d] - j - 1) / Cjkliuxiangcount[d];
            Cjxpoint1y[t] = Clxbdpoint1y[d] + (Clxbdpoint4y[d] - Clxbdpoint1y[d]) * (Cjkliuxiangcount[d] - j - 1) / Cjkliuxiangcount[d];

            Cjxpoint2x[t] = Clxbdpoint2x[d] + (Clxbdpoint3x[d] - Clxbdpoint2x[d]) * (Cjkliuxiangcount[d] - j - 1) / Cjkliuxiangcount[d];
            Cjxpoint2y[t] = Clxbdpoint2y[d] + (Clxbdpoint3y[d] - Clxbdpoint2y[d]) * (Cjkliuxiangcount[d] - j - 1) / Cjkliuxiangcount[d];

            Cjxpoint3x[t] = Clxbdpoint2x[d] + (Clxbdpoint3x[d] - Clxbdpoint2x[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            Cjxpoint3y[t] = Clxbdpoint2y[d] + (Clxbdpoint3y[d] - Clxbdpoint2y[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];

            Cjxpoint4x[t] = Clxbdpoint1x[d] + (Clxbdpoint4x[d] - Clxbdpoint1x[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            Cjxpoint4y[t] = Clxbdpoint1y[d] + (Clxbdpoint4y[d] - Clxbdpoint1y[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            j = j + 1;
          }
        }
      }

      // 重新计算人行线流向箭头坐标和点击事件矩形相关4个点坐标
      for (var t = 0; t < Cliuxianghao.length; t++) {
        // 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2
        if (Cliuxiangpz[t] == 4) {
          for (var d = 0; d < Cjkid.length; d++) {
            if (Cjkid[d] == Cjinkouid[t]) {
              // 矩形四个点坐标
              Cjxpoint1x[t] = Cjfootline1x[d];
              Cjxpoint1y[t] = Cjfootline1y[d];

              Cjxpoint2x[t] = Cjfootline2x[d];
              Cjxpoint2y[t] = Cjfootline2y[d];

              Cjxpoint3x[t] = Cjfootline2x[d] + (Ccfootline2x[d] - Cjfootline2x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint3y[t] = Cjfootline2y[d] + (Ccfootline2y[d] - Cjfootline2y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);

              Cjxpoint4x[t] = Cjfootline1x[d] + (Ccfootline1x[d] - Cjfootline1x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint4y[t] = Cjfootline1y[d] + (Ccfootline1y[d] - Cjfootline1y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
            }
          }
        } else if (Cliuxiangpz[t] == 10) {
          for (var d = 0; d < Cjkid.length; d++) {
            if (Cjkid[d] == Cjinkouid[t]) {
              // 矩形四个点坐标
              Cjxpoint1x[t] = Cjfootline1x[d];
              Cjxpoint1y[t] = Cjfootline1y[d];

              Cjxpoint2x[t] = Cjfootline2x[d];
              Cjxpoint2y[t] = Cjfootline2y[d];

              Cjxpoint3x[t] = Cjfootline2x[d] + (Ccfootline2x[d] - Cjfootline2x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint3y[t] = Cjfootline2y[d] + (Ccfootline2y[d] - Cjfootline2y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);

              Cjxpoint4x[t] = Cjfootline1x[d] + (Ccfootline1x[d] - Cjfootline1x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint4y[t] = Cjfootline1y[d] + (Ccfootline1y[d] - Cjfootline1y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
            }
          }
        } else if (Cliuxiangpz[t] == 11) {
          for (var d = 0; d < Cjkid.length; d++) {
            if (Cjkid[d] == Cjinkouid[t]) {
              // 矩形四个点坐标
              Cjxpoint1x[t] = Cjfootline1x[d] + (Ccfootline1x[d] - Cjfootline1x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint1y[t] = Cjfootline1y[d] + (Ccfootline1y[d] - Cjfootline1y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);

              Cjxpoint2x[t] = Cjfootline2x[d] + (Ccfootline2x[d] - Cjfootline2x[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);
              Cjxpoint2y[t] = Cjfootline2y[d] + (Ccfootline2y[d] - Cjfootline2y[d]) * Ctdj[d] / (Ctdj[d] + Ctdc[d]);

              Cjxpoint3x[t] = Ccfootline2x[d];
              Cjxpoint3y[t] = Ccfootline2y[d];

              Cjxpoint4x[t] = Ccfootline1x[d];
              Cjxpoint4y[t] = Ccfootline1y[d];
            }
          }
        }
      }

      // 重新计算非机动车流向箭头坐标和点击事件矩形相关4个点坐标
      for (var d = 0; d < Cjkid.length; d++) { // dff
        var j = Ctdj[d] + 0.2;
        for (var t = 0; t < Cliuxianghao.length; t++) {
          if (Ciscontrl[t] == 1 && Cjkid[d] == Cjinkouid[t] && (Cliuxiangpz[t] == 12 || Cliuxiangpz[t] == 13 || Cliuxiangpz[t] == 14)) { // 非机动车左,直行,左直
            // 矩形四个点坐标
            Cjxpoint1x[t] = Clxbdpoint1x[d] + (Clxbdpoint4x[d] - Clxbdpoint1x[d]) * (Cjkliuxiangcount[d] - j - 0.6) / Cjkliuxiangcount[d];
            Cjxpoint1y[t] = Clxbdpoint1y[d] + (Clxbdpoint4y[d] - Clxbdpoint1y[d]) * (Cjkliuxiangcount[d] - j - 0.6) / Cjkliuxiangcount[d];

            Cjxpoint2x[t] = Clxbdpoint2x[d] + (Clxbdpoint3x[d] - Clxbdpoint2x[d]) * (Cjkliuxiangcount[d] - j - 0.6) / Cjkliuxiangcount[d];
            Cjxpoint2y[t] = Clxbdpoint2y[d] + (Clxbdpoint3y[d] - Clxbdpoint2y[d]) * (Cjkliuxiangcount[d] - j - 0.6) / Cjkliuxiangcount[d];

            Cjxpoint3x[t] = Clxbdpoint2x[d] + (Clxbdpoint3x[d] - Clxbdpoint2x[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            Cjxpoint3y[t] = Clxbdpoint2y[d] + (Clxbdpoint3y[d] - Clxbdpoint2y[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];

            Cjxpoint4x[t] = Clxbdpoint1x[d] + (Clxbdpoint4x[d] - Clxbdpoint1x[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            Cjxpoint4y[t] = Clxbdpoint1y[d] + (Clxbdpoint4y[d] - Clxbdpoint1y[d]) * (Cjkliuxiangcount[d] - j) / Cjkliuxiangcount[d];
            j = j + 0.6;
          }
        }
      }
    }
  }
  // ------------
  // 计算实时信息流向坐标点位信息
  for (var t = 0; t < pzjd.length; t++) {
    // 中心线点位
    zxxdwx[t] = jjcdx[t] + (cjcdx[t] - jjcdx[t]) * tdj[t] / (tdj[t] + tdc[t]);
    zxxdwy[t] = jjcdy[t] + (cjcdy[t] - jjcdy[t]) * tdj[t] / (tdj[t] + tdc[t]);
    // 进口左转画线点坐标
    sslxleftx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) / 6;
    sslxlefty[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) / 6;
    // 进口直行画线点坐标
    sslxzhixingx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) / 3;
    sslxzhixingy[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) / 3;
    // 进口右转画线点坐标
    sslxrightx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) / 2;
    sslxrighty[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) / 2;
    // 非机动车直行画线点坐标
    sslxfjdczxx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) * 9 / 9;
    sslxfjdczxy[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) * 9 / 9;
    // 非机动车左转画线点坐标
    sslxfjdcleftx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) * 7 / 9;
    sslxfjdclefty[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) * 7 / 9;
    // 非机动车左直画线点坐标
    sslxfjdcleftAndzxx[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) * 8 / 9;
    sslxfjdcleftAndzxy[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) * 8 / 9;
    // 人行线4画线点坐标
    sslxfootline4x[t] = zxxdwx[t];
    sslxfootline4y[t] = zxxdwy[t];
    // 人行线10画线点坐标
    sslxfootline10x[t] = zxxdwx[t] + (jjcdx[t] - zxxdwx[t]) / 2;
    sslxfootline10y[t] = zxxdwy[t] + (jjcdy[t] - zxxdwy[t]) / 2;
    // 人行线11画线点坐标
    sslxfootline11x[t] = zxxdwx[t] + (cjcdx[t] - zxxdwx[t]) / 2;
    sslxfootline11y[t] = zxxdwy[t] + (cjcdy[t] - zxxdwy[t]) / 2;
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 计算实时信息流向坐标点位信息
    for (var t = 0; t < Cpzjd.length; t++) {
      // 中心线点位
      Czxxdwx[t] = Cjjcdx[t] + (Ccjcdx[t] - Cjjcdx[t]) * Ctdj[t] / (Ctdj[t] + Ctdc[t]);
      Czxxdwy[t] = Cjjcdy[t] + (Ccjcdy[t] - Cjjcdy[t]) * Ctdj[t] / (Ctdj[t] + Ctdc[t]);
      // 进口左转画线点坐标
      Csslxleftx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) / 6;
      Csslxlefty[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) / 6;
      // 进口直行画线点坐标
      Csslxzhixingx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) / 3;
      Csslxzhixingy[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) / 3;
      // 进口右转画线点坐标
      Csslxrightx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) / 2;
      Csslxrighty[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) / 2;
      // 非机动车直行画线点坐标
      Csslxfjdczxx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) * 9 / 9;
      Csslxfjdczxy[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) * 9 / 9;
      // 非机动车左转画线点坐标
      Csslxfjdcleftx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) * 7 / 9;
      Csslxfjdclefty[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) * 7 / 9;
      // 非机动车左直画线点坐标
      CsslxfjdcleftAndzxx[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) * 8 / 9;
      CsslxfjdcleftAndzxy[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) * 8 / 9;
      // 人行线4画线点坐标
      Csslxfootline4x[t] = Czxxdwx[t];
      Csslxfootline4y[t] = Czxxdwy[t];
      // 人行线10画线点坐标
      Csslxfootline10x[t] = Czxxdwx[t] + (Cjjcdx[t] - Czxxdwx[t]) / 2;
      Csslxfootline10y[t] = Czxxdwy[t] + (Cjjcdy[t] - Czxxdwy[t]) / 2;
      // 人行线11画线点坐标
      Csslxfootline11x[t] = Czxxdwx[t] + (Ccjcdx[t] - Czxxdwx[t]) / 2;
      Csslxfootline11y[t] = Czxxdwy[t] + (Ccjcdy[t] - Czxxdwy[t]) / 2;
    }
  }
  // 计算各进口待转区点位信息
  for (var t = 0; t < pzjd.length; t++) {
    var startx = leftlightx[t] + (zhixinglightx[t] - leftlightx[t]) / 2;
    var starty = leftlighty[t] + (zhixinglighty[t] - leftlighty[t]) / 2;

    var endx = zhixinglightx[t] + (rightlightx[t] - zhixinglightx[t]) / 2;
    var endy = zhixinglighty[t] + (rightlighty[t] - zhixinglighty[t]) / 2;

    if (endx == startx && endy < starty) {
      // 待转区第一个点位坐标
      dzqpoint1x[t] = startx - tdkd * 3 / 4;
      dzqpoint1y[t] = starty;
      // 待转区第二个点位坐标
      dzqpoint2x[t] = startx - tdkd * 4 / 4;
      dzqpoint2y[t] = starty;
      // 待转区第三个点位坐标
      dzqpoint3x[t] = endx - tdkd * 4 / 4;
      dzqpoint3y[t] = endy;
      // 待转区第四个点位坐标
      dzqpoint4x[t] = endx - tdkd * 3 / 4;
      dzqpoint4y[t] = endy;
    } else if (endx > startx && endy < starty) {

    } else if (endx > startx && endy == starty) {
      // 待转区第一个点位坐标
      dzqpoint1x[t] = startx;
      dzqpoint1y[t] = starty - tdkd * 3 / 4;
      // 待转区第二个点位坐标
      dzqpoint2x[t] = startx;
      dzqpoint2y[t] = starty - tdkd * 4 / 4;
      // 待转区第三个点位坐标
      dzqpoint3x[t] = endx;
      dzqpoint3y[t] = endy - tdkd * 4 / 4;
      // 待转区第四个点位坐标
      dzqpoint4x[t] = endx;
      dzqpoint4y[t] = endy - tdkd * 3 / 4;
    } else if (endx > startx && endy > starty) {
    } else if (endx == startx && endy > starty) {
      // 待转区第一个点位坐标
      dzqpoint1x[t] = startx + tdkd * 3 / 4;
      dzqpoint1y[t] = starty;
      // 待转区第二个点位坐标
      dzqpoint2x[t] = startx + tdkd * 4 / 4;
      dzqpoint2y[t] = starty;
      // 待转区第三个点位坐标
      dzqpoint3x[t] = endx + tdkd * 4 / 4;
      dzqpoint3y[t] = endy;
      // 待转区第四个点位坐标
      dzqpoint4x[t] = endx + tdkd * 3 / 4;
      dzqpoint4y[t] = endy;
    } else if (endx < startx && endy > starty) {

    } else if (endx < startx && endy == starty) {
      // 待转区第一个点位坐标
      dzqpoint1x[t] = startx;
      dzqpoint1y[t] = starty + tdkd * 3 / 4;
      // 待转区第二个点位坐标
      dzqpoint2x[t] = startx;
      dzqpoint2y[t] = starty + tdkd * 4 / 4;
      // 待转区第三个点位坐标
      dzqpoint3x[t] = endx;
      dzqpoint3y[t] = endy + tdkd * 4 / 4;
      // 待转区第四个点位坐标
      dzqpoint4x[t] = endx;
      dzqpoint4y[t] = endy + tdkd * 3 / 4;
    } else if (endx < startx && endy < starty) {
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 计算各进口待转区点位信息
    for (var t = 0; t < Cpzjd.length; t++) {
      var startx = Cleftlightx[t] + (Czhixinglightx[t] - Cleftlightx[t]) / 2;
      var starty = Cleftlighty[t] + (Czhixinglighty[t] - Cleftlighty[t]) / 2;

      var endx = Czhixinglightx[t] + (Crightlightx[t] - Czhixinglightx[t]) / 2;
      var endy = Czhixinglighty[t] + (Crightlighty[t] - Czhixinglighty[t]) / 2;

      if (endx == startx && endy < starty) {
        // 待转区第一个点位坐标
        Cdzqpoint1x[t] = startx - tdkd * 3 / 4;
        Cdzqpoint1y[t] = starty;
        // 待转区第二个点位坐标
        Cdzqpoint2x[t] = startx - tdkd * 4 / 4;
        Cdzqpoint2y[t] = starty;
        // 待转区第三个点位坐标
        Cdzqpoint3x[t] = endx - tdkd * 4 / 4;
        Cdzqpoint3y[t] = endy;
        // 待转区第四个点位坐标
        Cdzqpoint4x[t] = endx - tdkd * 3 / 4;
        Cdzqpoint4y[t] = endy;
      } else if (endx > startx && endy < starty) {

      } else if (endx > startx && endy == starty) {
        // 待转区第一个点位坐标
        Cdzqpoint1x[t] = startx;
        Cdzqpoint1y[t] = starty - tdkd * 3 / 4;
        // 待转区第二个点位坐标
        Cdzqpoint2x[t] = startx;
        Cdzqpoint2y[t] = starty - tdkd * 4 / 4;
        // 待转区第三个点位坐标
        Cdzqpoint3x[t] = endx;
        Cdzqpoint3y[t] = endy - tdkd * 4 / 4;
        // 待转区第四个点位坐标
        Cdzqpoint4x[t] = endx;
        Cdzqpoint4y[t] = endy - tdkd * 3 / 4;
      } else if (endx > startx && endy > starty) {

      } else if (endx == startx && endy > starty) {
        // 待转区第一个点位坐标
        Cdzqpoint1x[t] = startx + tdkd * 3 / 4;
        Cdzqpoint1y[t] = starty;
        // 待转区第二个点位坐标
        Cdzqpoint2x[t] = startx + tdkd * 4 / 4;
        Cdzqpoint2y[t] = starty;
        // 待转区第三个点位坐标
        Cdzqpoint3x[t] = endx + tdkd * 4 / 4;
        Cdzqpoint3y[t] = endy;
        // 待转区第四个点位坐标
        Cdzqpoint4x[t] = endx + tdkd * 3 / 4;
        Cdzqpoint4y[t] = endy;
      } else if (endx < startx && endy > starty) {

      } else if (endx < startx && endy == starty) {
        // 待转区第一个点位坐标
        Cdzqpoint1x[t] = startx;
        Cdzqpoint1y[t] = starty + tdkd * 3 / 4;
        // 待转区第二个点位坐标
        Cdzqpoint2x[t] = startx;
        Cdzqpoint2y[t] = starty + tdkd * 4 / 4;
        // 待转区第三个点位坐标
        Cdzqpoint3x[t] = endx;
        Cdzqpoint3y[t] = endy + tdkd * 4 / 4;
        // 待转区第四个点位坐标
        Cdzqpoint4x[t] = endx;
        Cdzqpoint4y[t] = endy + tdkd * 3 / 4;
      } else if (endx < startx && endy < starty) {

      }
    }
  }
}

// 绘制路口模型图
function drawlkmxpic(g) {
  if (showtype != 8 && showtype != 9 && showtype != 10) {
	    // 画背景颜色
	    var c2 = document.getElementById(myCanvas);
	    var cxt2 = c2.getContext("2d");
	    cxt2.fillStyle = loadbgcolor;
	    cxt2.fillRect(lk1x, lk1y, lk3x, lk3y);
  }

  // 清除左左边相位信息
  lkmxfgleft();
  // 清除左侧相位区覆盖div
  if (showtype != 1 && showtype != 7 && showtype != 9) {
    clearLeftCavAddDiv(addDivId);
  }
  // 画道路
  lkmxroad(g);
  // 画车道
  lkmxcdx(g);
  // 画人行线
  lkmxfootline();
  // 画进口名称
  lkmxname();
  // showtype类型 1 为实时信息显示含左边相位信息  2为实时信息显示含配置相位信息 3 为配置相位信息 4 配置相位信息不可点击
  if (showtype == 1) {
    // 画流向 排队长度数据
    // lkmxdrawvolpdcddata();
    // 画流量线圈、排队长度线圈
    // lkmxdrawxq();
    // 画车道流向
    lkmxcdliuxiang(showtype);
    // nearxhj(1);
    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 2) {
    // 画流向 排队长度数据
    // lkmxdrawvolpdcddata();
    // 画流量线圈、排队长度线圈
    // lkmxdrawxq();
    // 流向图标
    liuxiangtb();
    // set相位预设值
    var index = qcanvasid.indexOf(myCanvas);
    if (index != -1) {
      if (lkmxtype == 0) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      } else if (lkmxtype == 1) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      }
    }
  } else if (showtype == 3) {
    // 画车道流向
    lkmxcdliuxiang(showtype);
    // 给画布添加点击事件
    addclick(flowIsClick);

    // 流向图标
    liuxiangtb();

    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 4) {
    // 画车道流向
    lkmxcdliuxiang(showtype);
    // 流向图标
    liuxiangtb();
    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 5) {
    // 画车道流向
    lkmxcdliuxiang(showtype);
    nearxhj(0);
    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 6) {
    // 画流向 排队长度数据
    // lkmxdrawvolpdcddata();
    // 画流量线圈、排队长度线圈
    // lkmxdrawxq();
    // 给画布添加点击事件
    addclick(flowIsClick);
    // 流向图标
    liuxiangtb();
    // set相位预设值
    var index = qcanvasid.indexOf(myCanvas);
    if (index != -1) {
      if (lkmxtype == 0) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      } else if (lkmxtype == 1) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      }
    }
  } else if (showtype == 7) { // 用于特勤监控页面显示预设
    // 画车道流向
    lkmxcdliuxiang(showtype);
    // 流向图标
    liuxiangtb();
    // set相位预设值
    var index = qcanvasid.indexOf(myCanvas);
    if (index != -1) {
      if (lkmxtype == 0) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      } else if (lkmxtype == 1) {
        initSetPhaseInfo(qcanvasid[index], qprexw[index]);
      }
    }
    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 8) { // 用于显示饱和度

  } else if (showtype == 9) { // 用于显示饱和度+实时信息
    // 将过线的图像覆盖
    lkmxfgleft();
  } else if (showtype == 10) { // 用于绘制子区道路协调
    	// 画车道流向
    lkmxcdliuxiang(showtype);
    nearxhj(0);
    // 将过线的图像覆盖
    lkmxfgleft();
  }
}

// 加载相邻图片
function loadimage() {
  nearimg.src = imgurl;
}

// 画相邻路口图标 img
function drawnearimage(jd, x, y, son) {
  var c = document.getElementById(myCanvas);
  var cxt = c.getContext("2d");
  cxt.translate(x, y);
  cxt.rotate(jd * Math.PI / 180);
  if (son == 1) {
    nearimg.isson = 1;// 子路口的相邻路口图标
  } else {
    nearimg.isson = 0;// 父路口的相邻路口图标
  }
  cxt.drawImage(nearimg, -nearimg.width, -nearimg.height / 2);
  cxt.rotate((360 - jd) * Math.PI / 180);
  cxt.translate(-x, -y);
  cxt.restore();
}

// 画相邻路口图标
function drawneartb(x1, y1, x2, y2, x3, y3, x4, y4) {
  var c5 = document.getElementById(myCanvas);
  var cxt5 = c5.getContext("2d");
  cxt5.fillStyle = "#0fe4f2";
  cxt5.beginPath();
  cxt5.moveTo(x1, y1);// 第一个点
  cxt5.lineTo(x1 + (x2 - x1) * 2 / 4, y1 + (y2 - y1) * 2 / 4);// 第二个点
  cxt5.lineTo(x2 + (x3 - x2) * 2 / 4, y2 + (y3 - y2) * 2 / 4);// 第三个点
  cxt5.lineTo(x4 + (x3 - x4) * 2 / 4, y4 + (y3 - y4) * 2 / 4);// 第四个点
  cxt5.lineTo(x4, y4);// 第五个点
  cxt5.lineTo(x1 + (x3 - x1) * 2 / 4, y1 + (y3 - y1) * 2 / 4);// 第六个点
  cxt5.lineTo(x1, y1);// 第一个点
  cxt5.closePath();
  cxt5.fill();
}

// 绘制相邻路口箭头 isclicktype 0表示不可点击 1表示可以点击
function nearxhj(isclicktype) {
  // 相邻路口画图片点坐标
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    for (var i = 0; i < pzjd.length; i++) {
      if (nearxhjid[i] != "" && typeof (nearxhjid[i]) !== "undefined") {
        // 绘制相邻路口
        drawnearimage(pzjd[i], nearimgpointx[i], nearimgpointy[i]);
      }
    }
  } else if (lkmxtype == 1) {
    for (var i = 0; i < pzjd.length; i++) {
      if (nearxhjid[i] != "" && typeof (nearxhjid[i]) !== "undefined") {
        // 绘制相邻路口
        drawnearimage(pzjd[i], nearimgpointx[i], nearimgpointy[i]);
      }
    }

    for (var i = 0; i < Cpzjd.length; i++) {
      if (Cnearxhjid[i] != "" && typeof (Cnearxhjid[i]) !== "undefined") {
        // 绘制相邻路口
        drawnearimage(Cpzjd[i], Cnearimgpointx[i], Cnearimgpointy[i], 1);
      }
    }
  }
  if (isclicktype == 1) {
    var img1 = new Image();
    img1.src = imgurl;
    // 添加相邻路口点击事件
    addnearlkclick(img1.width);
    addnearlkmous(img1.width);
  }
}

// 画实时信息
function drawInfoEx() {
  // 画流向 排队长度数据
  // lkmxdrawvolpdcddata();
  // 将过线的图像覆盖
  lkmxfgleft();
  // 绘制实时信息
  SetRtInfoEx();
  // 红绿灯背景图
  if(showtype !== 8 && showtype !== 9){
    lkmxtrafficlightbj();
  }
  // 绘制左边相位信息
  drawleftinfoEx();
}

/**
 * 画左边相位信息
 * 首页面大小限制，现在实时信息的页面只显示包含当前相位的四个相位信息
 */
function drawleftinfoEx() {
  // 清除左左边相位信息
  lkmxfgleft();
  // 左侧相位区覆盖div以解决滚动条问题
  lkmxLeftCavAddDiv();
  // 左侧相位边框高度总和
  realHeight = 0;
  // 总相位数
  var phaseCount = advanceset.length;
  var startPhaseNum = 0;
  var endPhaseNum = phaseCount;
  if (phaseCount > 4) {
    var nowsetnumIndex = parseInt((nowsetnum - 1) / 4);
    startPhaseNum = nowsetnumIndex * 4;
    if (startPhaseNum + 4 > phaseCount) {
      endPhaseNum = phaseCount;
    } else {
      endPhaseNum = startPhaseNum + 4;
    }
  }
  // 当左侧相位边框高度总和大于画布高度时，会显示滚动条
  if (lkmxtype == 0) {
    realHeight = lkmxleftx * advanceset.length;
  } else if (lkmxtype == 1) {
    realHeight = lkmxleftx / 2 * (advanceset.length + Cadvanceset.length);
  }
  if (realHeight > lk4y) {
    cavAdd.height = realHeight;
  } else {
    cavAdd.height = lk4y - 4;
  }
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    for (var i = 0; i < advanceset.length; i++) {
      // for (var i = startPhaseNum; i < endPhaseNum; i++) {
      SetleftInfoEx(i, nowsetnum, advanceset[i], 1);
      // SetleftInfoEx(i%4, nowsetnum, advanceset[i], 1);
    }
  } else if (lkmxtype == 1) {
    for (var i = 0; i < advanceset.length; i++) {
      // for (var i = startPhaseNum; i < advanceset.length; i++) {
      // SetleftInfoEx(i%4, nowsetnum, advanceset[i], 2);
      SetleftInfoEx(i, nowsetnum, advanceset[i], 2);
    }
    for (var i = 0; i < Cadvanceset.length; i++) {
      // for (var i = startPhaseNum; i < endPhaseNum; i++) {
      // SetleftInfoEx(i%4, Cnowsetnum, Cadvanceset[i], 3);
      SetleftInfoEx(i, Cnowsetnum, Cadvanceset[i], 3);
    }
  }
}

/**
 * 绘制单个相位信息  num第一个相位从0开始  nowsetnum当前相位号 val第num个相位的值
 */
function SetleftInfoEx(num, dqnowsetnum, val, fzlktype) {
  if (fzlktype == 1) {
    var strokeStyle = "#87cffb";
    // if ((dqnowsetnum - 1)%4 == num) {
    if (dqnowsetnum - 1 == num) {
      strokeStyle = "#FF0000";
    }
    // 画相位边框
    var c4 = document.getElementById(addDivCavId);
    var cxt4 = c4.getContext("2d");
    cxt4.strokeStyle = strokeStyle;
    cxt4.beginPath();
    cxt4.moveTo(2, lkmxleftx * num + 2);
    cxt4.lineTo(lkmxleftx - 2, lkmxleftx * num + 2);
    cxt4.lineTo(lkmxleftx - 2, lkmxleftx * num + lkmxleftx - 2);
    cxt4.lineTo(2, lkmxleftx * num + lkmxleftx - 2);
    cxt4.lineTo(2, lkmxleftx * num + 2);
    cxt4.closePath();
    cxt4.stroke();
    // 进口中心线坐标
    var lszxxdwx = [];
    var lszxxdwy = [];
    // 进口左转画线点坐标
    var lssslxleftx = [];
    var lssslxlefty = [];
    // 进口直行画线点坐标
    var lssslxzhixingx = [];
    var lssslxzhixingy = [];
    // 进口右转画线点坐标
    var lssslxrightx = [];
    var lssslxrighty = [];
    // 非机动车直行画线点坐标
    var lssslxfjdczxx = [];
    var lssslxfjdczxy = [];
    // 非机动车左转画线点坐标
    var lssslxfjdcleftx = [];
    var lssslxfjdclefty = [];
    // 非机动车左直画线点坐标
    var lssslxfjdcleftAndZhixingx = [];
    var lssslxfjdcleftAndZhixingy = [];
    // 人行线4画线点
    var lsfootleft4x = [];
    var lsfootleft4y = [];
    // 人行线10画线点
    var lsfootleft10x = [];
    var lsfootleft10y = [];
    // 人行线11画线点
    var lsfootleft11x = [];
    var lsfootleft11y = [];

    // 找出每个进口画线点
    for (var t = 0; t < pzjd.length; t++) {
      var standard_x = 0;
      var standard_y = 0;
      var standard_len = 0;
      var cos_value = Math.cos(pzjd[t] / 180 * Math.PI);
      var sin_value = Math.sin(pzjd[t] / 180 * Math.PI);
      var percent_a = 32;
      var percent_b = 16;
      // 标准点位
      standard_x = lkmxleftx / 2 + 0.85 * lkmxleftx / 2 * cos_value;
      standard_y = lkmxleftx / 2 + 0.85 * lkmxleftx / 2 * sin_value;
      // 根據 y = kx+b 計算b的值
      var line_b;
      var k_value;
      var tan_value;
      // 點位計算模型
      // 垂直或平行于x軸的情況
      if (pzjd[t] == 0 || pzjd[t] == 180 || pzjd[t] == 90 || pzjd[t] == 270 || pzjd[t] == 360) {
        // TODO 有缘人看到优化一下
      } else { // 非特殊角度情况
        tan_value = Math.tan(pzjd[t] / 180 * Math.PI);
        k_value = -1 / tan_value;
        line_b = lkmxleftx * num + standard_y - k_value * standard_x;
        if (sin_value > 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x + lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x - lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
        if (sin_value < 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x - lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x + lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
      }
      // 进口中心线坐标
      lszxxdwx[t] = lkmxleftx * 7 / 8;
      lszxxdwy[t] = lkmxleftx * num + lkmxleftx / 2;
      if (pzjd[t] >= 0 && pzjd[t] < 45 || pzjd[t] >= 315 && pzjd[t] <= 360) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x - lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x - lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x - lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x - lkmxleftx / percent_a;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x - lkmxleftx / percent_a;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 0 || pzjd[t] == 360) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
        } else {

        }
      } else if (pzjd[t] >= 45 && pzjd[t] < 135) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x - lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x + lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 90) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x + lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x - lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      } else if (pzjd[t] >= 135 && pzjd[t] < 225) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x + lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x + lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x + lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 180) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
        }
      } else if (pzjd[t] >= 225 && pzjd[t] < 315) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x + lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x - lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 270) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x - lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x + lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      }
    }
    // 将相位数据格式化
    var LeftInfoEx = dec2bin(val);
    // 相位
    var leftMovementsState = [];
    for (var j = 0; j < LeftInfoEx.length; j++) {
      if (j < LeftInfoEx.length) {
        // 从二进制的后面往前取字符
        var q = LeftInfoEx.charAt(LeftInfoEx.length - 1 - j);
        if (q == "1") {
          leftMovementsState[j] = 1;
        } else {
          leftMovementsState[j] = 0;
        }
      } else {
        leftMovementsState[j] = 0;
      }
    }

    for (var p = 0; p < leftMovementsState.length; p++) {
      if (leftMovementsState[p] == 1) {
        var xuhao = 0;
        var bfindlx = false;
        for (var s = 0; s < liuxianghao.length; s++) {
          if (liuxianghao[s] == p + 1) {
            xuhao = s;
            bfindlx = true;
          }
        }
        if (!bfindlx) {
          continue;
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (iscontrl[xuhao] == 1 && typeof (jinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[xuhao] == jkid[j]) {
              q = j;
            }
          }

          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (liuxiangpz[xuhao] == 1 && jinkoufx[xuhao] != 15) {
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 2 && jinkoufx[xuhao] != 15) {
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 3 && jinkoufx[xuhao] != 15) {
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 4 && jinkoufx[xuhao] != 15) {
            // 人行4
            drawfootline(lsfootleft4x[q], lsfootleft4y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 5 && jinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 6 && jinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 7 && jinkoufx[xuhao] != 15) {
            // 通行
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 8 && jinkoufx[xuhao] != 15) {
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 9 && jinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 10 && jinkoufx[xuhao] != 15) {
            // 人行10
            drawfootline(lsfootleft10x[q], lsfootleft10y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 11 && jinkoufx[xuhao] != 15) {
            // 人行11
            drawfootline(lsfootleft11x[q], lsfootleft11y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 12 && jinkoufx[xuhao] != 15) {
            // 非机动车左
            leftxwdrawfjdcleft(lssslxfjdcleftx[q], lssslxfjdclefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 13 && jinkoufx[xuhao] != 15) {
            // 非机动车直
            leftxwdrawfjdczhixing(lssslxfjdczxx[q], lssslxfjdczxy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 14 && jinkoufx[xuhao] != 15) {
            // 非机动车左直
            leftxwdrawfjdcleftAndZhixing(lssslxfjdcleftAndZhixingx[q], lssslxfjdcleftAndZhixingy[q], pzjd[q], 3);
          }
        }
      }
    }
  } else if (fzlktype == 2) {
    // 画父子路口左侧路口
    var strokeStyle = "#87cffb";
    // 画相位边框
    if (dqnowsetnum - 1 == num) {
      strokeStyle = "#FF0000";
    }
    var c4 = document.getElementById(addDivCavId);
    var cxt4 = c4.getContext("2d");
    cxt4.strokeStyle = strokeStyle;
    cxt4.beginPath();
    cxt4.moveTo(2, lkmxleftx / 2 * num + 2);
    cxt4.lineTo(lkmxleftx / 2 - 2, lkmxleftx / 2 * num + 2);
    cxt4.lineTo(lkmxleftx / 2 - 2, lkmxleftx / 2 * num + lkmxleftx / 2 - 2);
    cxt4.lineTo(2, lkmxleftx / 2 * num + lkmxleftx / 2 - 2);
    cxt4.lineTo(2, lkmxleftx / 2 * num + 2);
    cxt4.closePath();
    cxt4.stroke();
    // 进口中心线坐标
    var lszxxdwx = [];
    var lszxxdwy = [];
    // 进口左转画线点坐标
    var lssslxleftx = [];
    var lssslxlefty = [];
    // 进口直行画线点坐标
    var lssslxzhixingx = [];
    var lssslxzhixingy = [];
    // 进口右转画线点坐标
    var lssslxrightx = [];
    var lssslxrighty = [];
    // 非机动车直行画线点坐标
    var lssslxfjdczxx = [];
    var lssslxfjdczxy = [];
    // 非机动车左转画线点坐标
    var lssslxfjdcleftx = [];
    var lssslxfjdclefty = [];
    // 非机动车左直画线点坐标
    var lssslxfjdcleftAndZhixingx = [];
    var lssslxfjdcleftAndZhixingy = [];
    // 人行线4画线点
    var lsfootleft4x = [];
    var lsfootleft4y = [];
    // 人行线10画线点
    var lsfootleft10x = [];
    var lsfootleft10y = [];
    // 人行线11画线点
    var lsfootleft11x = [];
    var lsfootleft11y = [];
    // 找出每个进口画线点lkmxleftx出2
    lkmxleftx = lkmxleftx / 2;
    // 画父子路口左侧路口将
    // 找出每个进口画线点
    for (var t = 0; t < pzjd.length; t++) {
      var standard_x = 0;
      var standard_y = 0;
      var standard_len = 0;
      var cos_value = Math.cos(pzjd[t] / 180 * Math.PI);
      var sin_value = Math.sin(pzjd[t] / 180 * Math.PI);
      var percent_a = 32;
      var percent_b = 16;
      // 标准点位
      standard_x = lkmxleftx / 2 + 0.9 * lkmxleftx / 2 * cos_value;
      standard_y = lkmxleftx / 2 + 0.9 * lkmxleftx / 2 * sin_value;
      // 根據 y = kx+b 計算b的值
      var line_b;
      var k_value;
      var tan_value;
      // 點位計算模型
      // 垂直或平行于x軸的情況
      if (pzjd[t] == 0 || pzjd[t] == 180 || pzjd[t] == 90 || pzjd[t] == 270 || pzjd[t] == 360) {
        // TODO 有缘人看到优化一下
      } else { // 非特殊角度情况
        tan_value = Math.tan(pzjd[t] / 180 * Math.PI);
        k_value = -1 / tan_value;
        line_b = lkmxleftx * num + standard_y - k_value * standard_x;
        if (sin_value > 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x + lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x - lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
        if (sin_value < 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x - lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x + lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
      }
      // 进口中心线坐标
      lszxxdwx[t] = lkmxleftx * 7 / 8;
      lszxxdwy[t] = lkmxleftx * num + lkmxleftx / 2;
      if (pzjd[t] >= 0 && pzjd[t] < 45 || pzjd[t] >= 315 && pzjd[t] <= 360) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x - lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x - lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x - lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x - lkmxleftx / percent_a;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x - lkmxleftx / percent_a;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 0 || pzjd[t] == 360) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
        }
      } else if (pzjd[t] >= 45 && pzjd[t] < 135) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x - lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x + lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 90) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x + lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x - lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      } else if (pzjd[t] >= 135 && pzjd[t] < 225) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x + lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x + lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x + lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 180) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
        }
      } else if (pzjd[t] >= 225 && pzjd[t] < 315) {
        // 进口左转画线点坐标
        lssslxleftx[t] = standard_x + lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = standard_x - lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (pzjd[t] == 270) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x - lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x + lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      }
    }
    // 将lkmxleft还原
    lkmxleftx = lkmxleftx * 2;
    // 将相位数据格式化
    var LeftInfoEx = dec2bin(val);
    // 相位
    var leftMovementsState = [];
    for (var j = 0; j < LeftInfoEx.length; j++) {
      if (j < LeftInfoEx.length) {
        // 从二进制的后面往前取字符
        var q = LeftInfoEx.charAt(LeftInfoEx.length - 1 - j);
        if (q == "1") {
          leftMovementsState[j] = 1;
        } else {
          leftMovementsState[j] = 0;
        }
      } else {
        leftMovementsState[j] = 0;
      }
    }

    for (var p = 0; p < leftMovementsState.length; p++) {
      if (leftMovementsState[p] == 1) {
        var xuhao = 0;
        var bfindlx = false;
        for (var s = 0; s < liuxianghao.length; s++) {
          if (liuxianghao[s] == p + 1) {
            xuhao = s;
            bfindlx = true;
          }
        }
        if (!bfindlx) {
          continue;
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (iscontrl[xuhao] == 1 && typeof (jinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[xuhao] == jkid[j]) {
              q = j;
            }
          }

          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (liuxiangpz[xuhao] == 1 && jinkoufx[xuhao] != 15) {
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 2 && jinkoufx[xuhao] != 15) {
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 3 && jinkoufx[xuhao] != 15) {
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 4 && jinkoufx[xuhao] != 15) {
            // 人行4
            drawfootline(lsfootleft4x[q], lsfootleft4y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 5 && jinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 6 && jinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 7 && jinkoufx[xuhao] != 15) {
            // 通行
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], pzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 8 && jinkoufx[xuhao] != 15) {
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 9 && jinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 10 && jinkoufx[xuhao] != 15) {
            // 人行10
            drawfootline(lsfootleft10x[q], lsfootleft10y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 11 && jinkoufx[xuhao] != 15) {
            // 人行11
            drawfootline(lsfootleft11x[q], lsfootleft11y[q], pzjd[q]);
          } else if (liuxiangpz[xuhao] == 12 && jinkoufx[xuhao] != 15) {
            // 非机动车左
            leftxwdrawfjdcleft(lssslxfjdcleftx[q], lssslxfjdclefty[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 13 && jinkoufx[xuhao] != 15) {
            // 非机动车直
            leftxwdrawfjdczhixing(lssslxfjdczxx[q], lssslxfjdczxy[q], pzjd[q], 3);
          } else if (liuxiangpz[xuhao] == 14 && jinkoufx[xuhao] != 15) {
            // 非机动车左直
            leftxwdrawfjdcleftAndZhixing(lssslxfjdcleftAndZhixingx[q], lssslxfjdcleftAndZhixingy[q], pzjd[q], 3);
          }
        }
      }
    }
  } else if (fzlktype == 3) { // 画父子路口右边路口信息
    var strokeStyle = "#87cffb";
    // 画相位边框
    if (dqnowsetnum - 1 == num) {
      strokeStyle = "#FF0000";
    }
    var c4 = document.getElementById(addDivCavId);
    var cxt4 = c4.getContext("2d");
    cxt4.strokeStyle = strokeStyle;
    cxt4.beginPath();
    cxt4.moveTo(lkmxleftx / 2 + 2, lkmxleftx / 2 * num + 2);
    cxt4.lineTo(lkmxleftx / 2 + lkmxleftx / 2 - 2, lkmxleftx / 2 * num + 2);
    cxt4.lineTo(lkmxleftx / 2 + lkmxleftx / 2 - 2, lkmxleftx / 2 * num + lkmxleftx / 2 - 2);
    cxt4.lineTo(lkmxleftx / 2 + 2, lkmxleftx / 2 * num + lkmxleftx / 2 - 2);
    cxt4.lineTo(lkmxleftx / 2 + 2, lkmxleftx / 2 * num + 2);
    cxt4.closePath();
    cxt4.stroke();
    // 进口中心线坐标
    var lszxxdwx = [];
    var lszxxdwy = [];
    // 进口左转画线点坐标
    var lssslxleftx = [];
    var lssslxlefty = [];
    // 进口直行画线点坐标
    var lssslxzhixingx = [];
    var lssslxzhixingy = [];
    // 进口右转画线点坐标
    var lssslxrightx = [];
    var lssslxrighty = [];
    // 非机动车直行画线点坐标
    var lssslxfjdczxx = [];
    var lssslxfjdczxy = [];
    // 非机动车左转画线点坐标
    var lssslxfjdcleftx = [];
    var lssslxfjdclefty = [];
    // 非机动车左直画线点坐标
    var lssslxfjdcleftAndZhixingx = [];
    var lssslxfjdcleftAndZhixingy = [];
    // 人行线4画线点
    var lsfootleft4x = [];
    var lsfootleft4y = [];
    // 人行线10画线点
    var lsfootleft10x = [];
    var lsfootleft10y = [];
    // 人行线11画线点
    var lsfootleft11x = [];
    var lsfootleft11y = [];
    // 画右边路口信息，先将lkmxleftx除2
    lkmxleftx = lkmxleftx / 2;
    // 找出每个进口画线点
    for (var t = 0; t < Cpzjd.length; t++) {
      var standard_x = 0;
      var standard_y = 0;
      var standard_len = 0;
      var cos_value = Math.cos(Cpzjd[t] / 180 * Math.PI);
      var sin_value = Math.sin(Cpzjd[t] / 180 * Math.PI);
      var percent_a = 32;
      var percent_b = 16;
      // 标准点位
      standard_x = lkmxleftx / 2 + 0.9 * lkmxleftx / 2 * cos_value;
      standard_y = lkmxleftx / 2 + 0.9 * lkmxleftx / 2 * sin_value;
      // 根據 y = kx+b 計算b的值
      var line_b;
      var k_value;
      var tan_value;
      // 點位計算模型
      // 垂直或平行于x軸的情況
      if (Cpzjd[t] == 0 || Cpzjd[t] == 180 || Cpzjd[t] == 90 || Cpzjd[t] == 270 || Cpzjd[t] == 360) {
        // TODO 有缘人看到优化一下
      } else { // 非特殊角度情况
        tan_value = Math.tan(Cpzjd[t] / 180 * Math.PI);
        k_value = -1 / tan_value;
        line_b = lkmxleftx * num + standard_y - k_value * standard_x;
        if (sin_value > 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x + lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x - lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
        if (sin_value < 0) {
          // 人行线10画线点
          lsfootleft10x[t] = standard_x - lkmxleftx / 10;
          lsfootleft10y[t] = k_value * lsfootleft10x[t] + line_b;
          // 人行线11画线点
          lsfootleft11x[t] = standard_x + lkmxleftx / 10;
          lsfootleft11y[t] = k_value * lsfootleft11x[t] + line_b;
        }
      }
      // 进口中心线坐标
      lszxxdwx[t] = lkmxleftx * 7 / 8;
      lszxxdwy[t] = lkmxleftx * num + lkmxleftx / 2;
      if (Cpzjd[t] >= 0 && Cpzjd[t] < 45 || Cpzjd[t] >= 315 && Cpzjd[t] <= 360) {
        // 进口左转画线点坐标
        lssslxleftx[t] = lkmxleftx + standard_x - lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = lkmxleftx + standard_x - lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = lkmxleftx + standard_x - lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = lkmxleftx + standard_x - lkmxleftx / percent_a;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = lkmxleftx + standard_x - lkmxleftx / percent_a;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = lkmxleftx + standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = lkmxleftx + standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (Cpzjd[t] == 0 || Cpzjd[t] == 360) {
          // 人行线10画线点
          lsfootleft10x[t] = lkmxleftx + standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = lkmxleftx + standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
        }
      } else if (Cpzjd[t] >= 45 && Cpzjd[t] < 135) {
        // 进口左转画线点坐标
        lssslxleftx[t] = lkmxleftx + standard_x - lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = lkmxleftx + standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = lkmxleftx + standard_x + lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = lkmxleftx + standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = lkmxleftx + standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = lkmxleftx + standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = lkmxleftx + standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (Cpzjd[t] == 90) {
          // 人行线10画线点
          lsfootleft10x[t] = lkmxleftx + standard_x + lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = lkmxleftx + standard_x - lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      } else if (Cpzjd[t] >= 135 && Cpzjd[t] < 225) {
        // 进口左转画线点坐标
        lssslxleftx[t] = lkmxleftx + standard_x + lkmxleftx / percent_a;
        lssslxlefty[t] = lkmxleftx * num + standard_y - lkmxleftx / percent_b;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = lkmxleftx + standard_x + lkmxleftx / percent_a;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y;
        // 进口右转画线点坐标
        lssslxrightx[t] = lkmxleftx + standard_x + lkmxleftx / percent_a;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_b;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = lkmxleftx + standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = lkmxleftx + standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = lkmxleftx + standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = lkmxleftx + standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (Cpzjd[t] == 180) {
          // 人行线10画线点
          lsfootleft10x[t] = lkmxleftx + standard_x;
          lsfootleft10y[t] = lkmxleftx * num + standard_y + lkmxleftx / 6;
          // 人行线11画线点
          lsfootleft11x[t] = lkmxleftx + standard_x;
          lsfootleft11y[t] = lkmxleftx * num + standard_y - lkmxleftx / 6;
        }
      } else if (Cpzjd[t] >= 225 && Cpzjd[t] < 315) {
        // 进口左转画线点坐标
        lssslxleftx[t] = lkmxleftx + standard_x + lkmxleftx / percent_b;
        lssslxlefty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口直行画线点坐标
        lssslxzhixingx[t] = lkmxleftx + standard_x;
        lssslxzhixingy[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 进口右转画线点坐标
        lssslxrightx[t] = lkmxleftx + standard_x - lkmxleftx / percent_b;
        lssslxrighty[t] = lkmxleftx * num + standard_y + lkmxleftx / percent_a;
        // 非机动车直行画线点坐标
        lssslxfjdczxx[t] = lkmxleftx + standard_x;
        lssslxfjdczxy[t] = lkmxleftx * num + standard_y;
        // 非机动车左转画线点坐标
        lssslxfjdcleftx[t] = lkmxleftx + standard_x;
        lssslxfjdclefty[t] = lkmxleftx * num + standard_y;
        // 非机动车左直画线点坐标
        lssslxfjdcleftAndZhixingx[t] = lkmxleftx + standard_x;
        lssslxfjdcleftAndZhixingy[t] = lkmxleftx * num + standard_y;
        // 人行线4画线点
        lsfootleft4x[t] = lkmxleftx + standard_x;
        lsfootleft4y[t] = lkmxleftx * num + standard_y;
        if (Cpzjd[t] == 0 || Cpzjd[t] == 360) {
          // 人行线10画线点
          lsfootleft10x[t] = lkmxleftx + standard_x - lkmxleftx / 6;
          lsfootleft10y[t] = lkmxleftx * num + standard_y;
          // 人行线11画线点
          lsfootleft11x[t] = lkmxleftx + standard_x + lkmxleftx / 6;
          lsfootleft11y[t] = lkmxleftx * num + standard_y;
        }
      }
    }
    // 计算完成后将lkmxleftx恢复原来的值
    lkmxleftx = lkmxleftx * 2;
    // 将相位数据格式化
    var LeftInfoEx = dec2bin(val);
    // 相位
    var leftMovementsState = [];
    for (var j = 0; j < LeftInfoEx.length; j++) {
      if (j < LeftInfoEx.length) {
        // 从二进制的后面往前取字符
        var q = LeftInfoEx.charAt(LeftInfoEx.length - 1 - j);
        if (q == "1") {
          leftMovementsState[j] = 1;
        } else {
          leftMovementsState[j] = 0;
        }
      } else {
        leftMovementsState[j] = 0;
      }
    }

    for (var p = 0; p < leftMovementsState.length; p++) {
      if (leftMovementsState[p] == 1) {
        var xuhao = 0;
        var bfindlx = false;
        for (var s = 0; s < Cliuxianghao.length; s++) {
          if (Cliuxianghao[s] == p + 1) {
            xuhao = s;
            bfindlx = true;
          }
        }
        if (!bfindlx) {
          continue;
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (Ciscontrl[xuhao] == 1 && typeof (Cjinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < Cjkid.length; j++) {
            if (Cjinkouid[xuhao] == Cjkid[j]) {
              q = j;
            }
          }

          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (Cliuxiangpz[xuhao] == 1 && Cjinkoufx[xuhao] != 15) {
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 2 && Cjinkoufx[xuhao] != 15) {
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 3 && Cjinkoufx[xuhao] != 15) {
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 4 && Cjinkoufx[xuhao] != 15) {
            // 人行4
            drawfootline(lsfootleft4x[q], lsfootleft4y[q], Cpzjd[q]);
          } else if (Cliuxiangpz[xuhao] == 5 && Cjinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 6 && Cjinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], Cpzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 7 && Cjinkoufx[xuhao] != 15) {
            // 通行
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
            // 直行
            leftxwdrawRtInfoExzhixing(lssslxzhixingx[q], lssslxzhixingy[q], Cpzjd[q], 3);
            // 右转
            leftxwdrawRtInfoExright(lssslxrightx[q], lssslxrighty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 8 && Cjinkoufx[xuhao] != 15) {
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 9 && Cjinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            leftxwdrawRtInfoExleft(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
            // 掉头
            leftxwdrawRtInfoExdiaotou(lssslxleftx[q], lssslxlefty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 10 && Cjinkoufx[xuhao] != 15) {
            // 人行10
            drawfootline(lsfootleft10x[q], lsfootleft10y[q], Cpzjd[q]);
          } else if (Cliuxiangpz[xuhao] == 11 && Cjinkoufx[xuhao] != 15) {
            // 人行11
            drawfootline(lsfootleft11x[q], lsfootleft11y[q], Cpzjd[q]);
          } else if (Cliuxiangpz[xuhao] == 12 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左
            leftxwdrawfjdcleft(lssslxfjdcleftx[q], lssslxfjdclefty[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 13 && Cjinkoufx[xuhao] != 15) {
            // 非机动车直
            leftxwdrawfjdczhixing(lssslxfjdczxx[q], lssslxfjdczxy[q], Cpzjd[q], 3);
          } else if (Cliuxiangpz[xuhao] == 14 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左直
            leftxwdrawfjdcleftAndZhixing(lssslxfjdcleftAndZhixingx[q], lssslxfjdcleftAndZhixingy[q], Cpzjd[q], 3);
          }
        }
      }
    }
  }
  // 绘制相位号标识（A/B/C...）
  setleftInfoNum(num, fzlktype);
}

/**
 * 绘制相位号标识（A/B/C...）
 * @params num 从0开始，第几个相位
 * @params fzlktype  1 普通路口，2 父子路口-父路口，3 父子路口-子路口
 */
function setleftInfoNum(num, fzlktype) {
  const canvas = document.getElementById(addDivCavId);
  const context2D = canvas.getContext("2d");
  // 绘制相位号坐标
  let x = 0;
  let y = 0;
  context2D.save();
  context2D.fillStyle = "#FFFFFF";
  context2D.font = namesize + "px Arial";
  context2D.beginPath();
  if (fzlktype == 1) {
    x = 4;
    y = lkmxleftx * num + lkmxleftx - 4;
  } else if (fzlktype == 2) {
    x = 4;
    y = lkmxleftx / 2 * num + lkmxleftx / 2 - 4;
  } else if (fzlktype == 3) {
    x = lkmxleftx / 2 + 4;
    y = lkmxleftx / 2 * num + lkmxleftx / 2 - 4;
  }
  context2D.fillText(phaseArr[num], x, y);
  context2D.closePath();
  context2D.restore();
}

// 画相位人行线
function drawfootline(x, y, jd) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var jd2 = jd - 90;
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd2 * Math.PI / 180);
  cxt4.fillStyle = "#00EC00";
  cxt4.beginPath();
  cxt4.moveTo(0, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 2, 0);
  cxt4.lineTo(tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 / 2, -tdkd / 2 / 8);
  cxt4.lineTo(0, -tdkd / 2 / 8);
  cxt4.lineTo(-tdkd / 2 / 2, -tdkd / 2 / 8);
  cxt4.lineTo(-tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(-tdkd / 2 / 2 - tdkd / 2 / 2, 0);
  cxt4.lineTo(-tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(-tdkd / 2 / 2, tdkd / 2 / 8);
  cxt4.lineTo(0, tdkd / 2 / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位左边非机动车左转
function leftxwdrawfjdcleft(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, -tdkd / 2 / 16);
  cxt4.lineTo(tdkd / 2 / 2, -tdkd / 2 / 16);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8, -tdkd / 2 / 8 - tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8 - tdkd / 2 / 8, -tdkd / 2 / 8 - tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8 + (tdkd / 2 / 8 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 8) / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2 - tdkd / 2 / 8, -tdkd / 2 / 8 - tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2 - tdkd / 2 / 4, -tdkd / 2 / 8 - tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 8 / Math.tan(67.5 * Math.PI / 180), tdkd / 2 / 16);
  cxt4.lineTo(0, tdkd / 2 / 16);
  cxt4.lineTo(0, -tdkd / 2 / 16);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位左边非机动车直行
function leftxwdrawfjdczhixing(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, tdkd / 2 / 16);
  cxt4.lineTo(tdkd / 2 * 3 / 4, tdkd / 2 / 16);
  cxt4.lineTo(tdkd / 2 * 3 / 4, tdkd / 2 / 16 + tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 * 3 / 4 + tdkd / 2 / 4, 0);
  cxt4.lineTo(tdkd / 2 * 3 / 4, -tdkd / 2 / 16 - tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 * 3 / 4, -tdkd / 2 / 16);
  cxt4.lineTo(0, -tdkd / 2 / 16);
  cxt4.lineTo(0, tdkd / 2 / 16);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位左边非机动车左直
function leftxwdrawfjdcleftAndZhixing(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, -tdkd / 32);
  cxt4.lineTo(tdkd * 3 / 8, -tdkd / 32);
  cxt4.lineTo(tdkd * 3 / 8, -tdkd / 32 + tdkd / 14);
  cxt4.lineTo(tdkd * 3 / 8 + tdkd / 5, -tdkd * 2 / 48);
  cxt4.lineTo(tdkd * 3 / 8, -tdkd * 5 / 32 - tdkd / 28);
  cxt4.lineTo(tdkd * 3 / 8, -tdkd * 5 / 48);
  cxt4.lineTo(tdkd * 1 / 4, -tdkd * 5 / 48);
  cxt4.lineTo(tdkd * 17 / 48, -tdkd * 11 / 48);
  cxt4.lineTo(tdkd * 7 / 16, -tdkd * 11 / 48);
  cxt4.lineTo(tdkd * 5 / 16, -tdkd / 3);
  cxt4.lineTo(tdkd * 1 / 6, -tdkd * 11 / 48);
  cxt4.lineTo(tdkd * 13 / 48, -tdkd * 11 / 48);
  cxt4.lineTo(tdkd * 2 / 12, -tdkd * 5 / 48);
  cxt4.lineTo(0, -tdkd * 5 / 48);
  cxt4.lineTo(0, -tdkd / 24);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位左边左转流向
function leftxwdrawRtInfoExleft(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, -tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2, -tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 - tdkd / 2 / 4, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 + (tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 4) / 2, -tdkd / 2 / 4 - tdkd / 2 / 2);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2 + tdkd / 2 / 4, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180), tdkd / 2 / 8);
  cxt4.lineTo(0, tdkd / 2 / 8);
  cxt4.lineTo(0, -tdkd / 2 / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位左边直行流向
function leftxwdrawRtInfoExzhixing(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 2, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 2 + tdkd / 2 / 2, 0);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 2, -tdkd / 2 / 8);
  cxt4.lineTo(0, -tdkd / 2 / 8);
  cxt4.lineTo(0, tdkd / 2 / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位右转流向
function leftxwdrawRtInfoExright(x, y, jd, color) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  }
  cxt4.beginPath();
  cxt4.moveTo(0, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 - tdkd / 2 / 4, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 + (tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 4) / 2, tdkd / 2 / 4 + tdkd / 2 / 2);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2 + tdkd / 2 / 4, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180) + tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 + tdkd / 2 / 4 / Math.tan(67.5 * Math.PI / 180), -tdkd / 2 / 8);
  cxt4.lineTo(0, -tdkd / 2 / 8);
  cxt4.lineTo(0, tdkd / 2 / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 画左侧相位掉头流向
function leftxwdrawRtInfoExdiaotou(x, y, jd, color, fzlktype) {
  if (pzjd.length == 5) {
    tdkd = 0.7 * tdkd;
  }
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(addDivCavId);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(0, -kd / 2 / 8);
  cxt4.lineTo(0, -kd / 2 / 8 + kd / 8);
  cxt4.lineTo(kd / 2, -kd / 2 / 8 + kd / 8);
  cxt4.lineTo(kd / 2, -kd / 2 / 8 + kd / 8 - 4 * kd / 8);
  cxt4.lineTo(kd / 4, -kd / 2 / 8 + kd / 8 - 4 * kd / 8);
  cxt4.lineTo(kd / 4, -kd / 2 / 8 + kd / 8 - 5 * kd / 8);
  cxt4.lineTo(kd / 4 - 3 * kd / 16, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 3 * kd / 16);
  cxt4.lineTo(kd / 4, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 3 * kd / 8);
  cxt4.lineTo(kd / 4, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 2 * kd / 8);
  cxt4.lineTo(kd / 4 + kd / 8, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 2 * kd / 8);
  cxt4.lineTo(kd / 4 + kd / 8, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 2 * kd / 8 + kd / 4);
  cxt4.lineTo(0, -kd / 2 / 8 + kd / 8 - 4 * kd / 8 - kd / 8 + 2 * kd / 8 + kd / 4);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
  if (pzjd.length == 5) {
    tdkd = tdkd / 0.7;
  }
}

// 绘制实时信息
function SetRtInfoEx() {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    // 绘制相位剩余时间
    if (showtype != 8 && showtype != 9) {
        	drawsytime(centerPointX, centerPointY, 0);
    }
    for (var p = 0; p < byMovementsState.length; p++) {
      // 绘制实时信息
      if (byMovementsState[p] == 2 || byMovementsState[p] == 3) {
        var xuhao = -1;
        for (var s = 0; s < liuxianghao.length; s++) {
          if (liuxianghao[s] == p + 1) {
            xuhao = s;
          }
        }

        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        // alert(typeof(jinkouid[p])!="undefined");
        if (xuhao != -1 && iscontrl[xuhao] == 1 && typeof (jinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[xuhao] == jkid[j]) {
              q = j;
            }
          }

          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直 15可变车道
          if (liuxiangpz[xuhao] == 1 && jinkoufx[xuhao] != 15) {
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 2 && jinkoufx[xuhao] != 15) {
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 3 && jinkoufx[xuhao] != 15) {
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 4 && jinkoufx[xuhao] != 15) {
            // 人行4

            drawRtInfoExfootline(sslxfootline4x[q], sslxfootline4y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 5 && jinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 6 && jinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 7 && jinkoufx[xuhao] != 15) {
            // 通行
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 8 && jinkoufx[xuhao] != 15) {
            // 掉头
            drawRtInfoExdiaotou(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 9 && jinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 掉头
            drawRtInfoExdiaotou(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 10 && jinkoufx[xuhao] != 15) {
            // 人行10
            drawRtInfoExfootline(sslxfootline10x[q], sslxfootline10y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 11 && jinkoufx[xuhao] != 15) {
            // 人行11
            drawRtInfoExfootline(sslxfootline11x[q], sslxfootline11y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 12 && jinkoufx[xuhao] != 15) {
            // 非机动车左
            drawfjdcleft(sslxfjdcleftx[q], sslxfjdclefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 13 && jinkoufx[xuhao] != 15) {
            // 非机动车直
            drawfjdczhixing(sslxfjdczxx[q], sslxfjdczxy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 14 && jinkoufx[xuhao] != 15) {
            // 非机动车左直
            drawfjdcleftAndZhixing(sslxfjdcleftAndzxx[q], sslxfjdcleftAndzxy[q], pzjd[q], byMovementsState[p], 0);
          }
        }
      }
    }
    // 绘制可变车道
    if (showtype == 9 || showtype == 7 || showtype == 1 || showtype == 2 || showtype == 6) {
      for (var kb = 0; kb < all_qkbcddata_arr.length; kb++) { // 循环遍历当前路口模型可变车道数组
        // 查找路口模型中可变车道所在的进口 和车道以及状态数组
        var jknums = all_qkbcddata_arr[kb].entrance_id;
        var cdnums = all_qkbcddata_arr[kb].motor_lane_id;
        var kbcd_states = all_qkbcddata_arr[kb].states;
        var lxh = 0;// 可变车道流向号，确定可变车道状态值
        var xhz = 0;// 可变车道流向状态值
        for (var m = 0; m < current_movements_paras.length; m++) { // 查找流向标签中参与控制的可变车道信息
          if (current_movements_paras[m].enter_port_direction == 15) {
            var fixed_grn_time = current_movements_paras[m].fixed_grn_time;
            if (fixed_grn_time && (fixed_grn_time >> 4) == jknums && (fixed_grn_time & 0x0f) == cdnums) {
              lxh = current_movements_paras[m].num_movements;
              break;
            }
          }
        }
        if (lxh > 0) {
          if (byMovementsState[lxh - 1] == 0) {
            xhz = 4;
          } else if (byMovementsState[lxh - 1] == 1) {
            xhz = 1;
          } else if (byMovementsState[lxh - 1] == 2) {
            xhz = 3;
          } else if (byMovementsState[lxh - 1] == 3) {
            xhz = 2;
          }
          var kbcd_lx = 0;// 可变车道具体方向值
          if (kbcd_states.length >= xhz) {
            kbcd_lx = kbcd_states[xhz - 1];
            // 绘制可变车道信息
            changechedao(myCanvas, jknums - 1, cdnums - 1, parseInt(kbcd_lx), 0);
          }
        }
      }
    }
  } else if (lkmxtype == 1) {
    // 绘制相位剩余时间
    if (showtype != 8) {
        	drawsytime(centerPointX, centerPointY, 0);
    }
    for (var p = 0; p < byMovementsState.length; p++) {
      // 绘制实时信息
      if (byMovementsState[p] == 2 || byMovementsState[p] == 3) {
        var xuhao = -1;
        for (var s = 0; s < liuxianghao.length; s++) {
          if (liuxianghao[s] == p + 1) {
            xuhao = s;
          }
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (xuhao != -1 && iscontrl[xuhao] == 1 && typeof (jinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[xuhao] == jkid[j]) {
              q = j;
            }
          }
          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直 15可变车道
          if (liuxiangpz[xuhao] == 1 && jinkoufx[xuhao] != 15) {
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 2 && jinkoufx[xuhao] != 15) {
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 3 && jinkoufx[xuhao] != 15) {
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 4 && jinkoufx[xuhao] != 15) {
            // 人行4

            drawRtInfoExfootline(sslxfootline4x[q], sslxfootline4y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 5 && jinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 6 && jinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 7 && jinkoufx[xuhao] != 15) {
            // 通行

            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 直行
            drawRtInfoExzhixing(sslxzhixingx[q], sslxzhixingy[q], pzjd[q], byMovementsState[p], 0);
            // 右转
            drawRtInfoExright(sslxrightx[q], sslxrighty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 8 && jinkoufx[xuhao] != 15) {
            // 掉头
            drawRtInfoExdiaotou(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 9 && jinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            drawRtInfoExleft(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
            // 掉头
            drawRtInfoExdiaotou(sslxleftx[q], sslxlefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 10 && jinkoufx[xuhao] != 15) {
            // 人行10
            drawRtInfoExfootline(sslxfootline10x[q], sslxfootline10y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 11 && jinkoufx[xuhao] != 15) {
            // 人行11
            drawRtInfoExfootline(sslxfootline11x[q], sslxfootline11y[q], pzjd[q], byMovementsState[p]);
          } else if (liuxiangpz[xuhao] == 12 && jinkoufx[xuhao] != 15) {
            // 非机动车左
            drawfjdcleft(sslxfjdcleftx[q], sslxfjdclefty[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 13 && jinkoufx[xuhao] != 15) {
            // 非机动车直
            drawfjdczhixing(sslxfjdczxx[q], sslxfjdczxy[q], pzjd[q], byMovementsState[p], 0);
          } else if (liuxiangpz[xuhao] == 14 && jinkoufx[xuhao] != 15) {
            // 非机动车左直
            drawfjdcleftAndZhixing(sslxfjdcleftAndzxx[q], sslxfjdcleftAndzxy[q], pzjd[q], byMovementsState[p], 0);
          }
        }
      }

      // 绘制可变车道
      if (showtype == 9 || showtype == 7 || showtype == 1 || showtype == 2 || showtype == 6) {
        for (var kb = 0; kb < all_qkbcddata_arr.length; kb++) { // 循环遍历当前路口模型可变车道数组
          // 查找路口模型中可变车道所在的进口 和车道以及状态数组
          var jknums = all_qkbcddata_arr[kb].entrance_id;
          var cdnums = all_qkbcddata_arr[kb].motor_lane_id;
          var kbcd_states = all_qkbcddata_arr[kb].states;
          var lxh = 0;// 可变车道流向号，确定可变车道状态值
          var xhz = 0;// 可变车道流向状态值
          for (var m = 0; m < current_movements_paras.length; m++) { // 查找流向标签中参与控制的可变车道信息
            if (current_movements_paras[m].enter_port_direction == 15) {
              var fixed_grn_time = current_movements_paras[m].fixed_grn_time;
              if (fixed_grn_time && (fixed_grn_time >> 4) == jknums && (fixed_grn_time & 0x0f) == cdnums) {
                lxh = current_movements_paras[m].num_movements;
                break;
              }
            }
          }
          if (lxh > 0) {
            if (byMovementsState[lxh - 1] == 0) {
              xhz = 4;
            } else if (byMovementsState[lxh - 1] == 1) {
              xhz = 1;
            } else if (byMovementsState[lxh - 1] == 2) {
              xhz = 3;
            } else if (byMovementsState[lxh - 1] == 3) {
              xhz = 2;
            }
            var kbcd_lx = 0;// 可变车道具体方向值
            if (kbcd_states.length >= xhz) {
              kbcd_lx = kbcd_states[xhz - 1];
              // 绘制可变车道信息
              changechedao(myCanvas, jknums - 1, cdnums - 1, parseInt(kbcd_lx), 0);
            }
          }
        }
      }
    }

    // 绘制子路口
    // 绘制相位剩余时间
    if (showtype != 8) {
	        drawsytime(CcenterPointX, CcenterPointY, 1);
    }
    for (var p = 0; p < CbyMovementsState.length; p++) {
      // 绘制实时信息
      if (CbyMovementsState[p] == 2 || CbyMovementsState[p] == 3) {
        var xuhao = -1;
        for (var s = 0; s < Cliuxianghao.length; s++) {
          if (Cliuxianghao[s] == p + 1) {
            xuhao = s;
          }
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        // alert(typeof(jinkouid[p])!="undefined");
        if (xuhao != -1 && Ciscontrl[xuhao] == 1 && typeof (Cjinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < Cjkid.length; j++) {
            if (Cjinkouid[xuhao] == Cjkid[j]) {
              q = j;
            }
          }
          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直 15可变车道
          if (Cliuxiangpz[xuhao] == 1 && Cjinkoufx[xuhao] != 15) {
            // 左转
            drawRtInfoExleft(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 2 && Cjinkoufx[xuhao] != 15) {
            // 直行
            drawRtInfoExzhixing(Csslxzhixingx[q], Csslxzhixingy[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 3 && Cjinkoufx[xuhao] != 15) {
            // 右转
            drawRtInfoExright(Csslxrightx[q], Csslxrighty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 4 && Cjinkoufx[xuhao] != 15) {
            // 人行4

            drawRtInfoExfootline(Csslxfootline4x[q], Csslxfootline4y[q], Cpzjd[q], CbyMovementsState[p]);
          } else if (Cliuxiangpz[xuhao] == 5 && Cjinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            drawRtInfoExleft(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
            // 直行
            drawRtInfoExzhixing(Csslxzhixingx[q], Csslxzhixingy[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 6 && Cjinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            drawRtInfoExzhixing(Csslxzhixingx[q], Csslxzhixingy[q], Cpzjd[q], CbyMovementsState[p], 1);
            // 右转
            drawRtInfoExright(Csslxrightx[q], Csslxrighty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 7 && Cjinkoufx[xuhao] != 15) {
            // 通行

            // 左转
            drawRtInfoExleft(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
            // 直行
            drawRtInfoExzhixing(Csslxzhixingx[q], Csslxzhixingy[q], Cpzjd[q], CbyMovementsState[p], 1);
            // 右转
            drawRtInfoExright(Csslxrightx[q], Csslxrighty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 8 && Cjinkoufx[xuhao] != 15) {
            // 掉头
            drawRtInfoExdiaotou(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 9 && Cjinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            drawRtInfoExleft(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
            // 掉头
            drawRtInfoExdiaotou(Csslxleftx[q], Csslxlefty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 10 && Cjinkoufx[xuhao] != 15) {
            // 人行10
            drawRtInfoExfootline(Csslxfootline10x[q], Csslxfootline10y[q], Cpzjd[q], CbyMovementsState[p]);
          } else if (Cliuxiangpz[xuhao] == 11 && Cjinkoufx[xuhao] != 15) {
            // 人行11
            drawRtInfoExfootline(Csslxfootline11x[q], Csslxfootline11y[q], Cpzjd[q], CbyMovementsState[p]);
          } else if (Cliuxiangpz[xuhao] == 12 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左
            drawfjdcleft(Csslxfjdcleftx[q], Csslxfjdclefty[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 13 && Cjinkoufx[xuhao] != 15) {
            // 非机动车直
            drawfjdczhixing(Csslxfjdczxx[q], Csslxfjdczxy[q], Cpzjd[q], CbyMovementsState[p], 1);
          } else if (Cliuxiangpz[xuhao] == 14 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左直
            drawfjdcleftAndZhixing(CsslxfjdcleftAndzxx[q], CsslxfjdcleftAndzxy[q], Cpzjd[q], CbyMovementsState[p], 1);
          }
        }
      }

      // 绘制可变车道
      if (showtype == 9 || showtype == 7 || showtype == 1 || showtype == 2 || showtype == 6) {
        for (var kb = 0; kb < all_qkbcddata_arr.length; kb++) { // 循环遍历当前路口模型可变车道数组
          // 查找路口模型中可变车道所在的进口 和车道以及状态数组
          var jknums = all_qkbcddata_arr[kb].entrance_id;
          var cdnums = all_qkbcddata_arr[kb].motor_lane_id;
          var kbcd_states = all_qkbcddata_arr[kb].states;
          var lxh = 0;// 可变车道流向号，确定可变车道状态值
          var xhz = 0;// 可变车道流向状态值
          for (var m = 0; m < current_movements_paras.length; m++) { // 查找流向标签中参与控制的可变车道信息
            if (current_movements_paras[m].enter_port_direction == 15) {
              var fixed_grn_time = current_movements_paras[m].fixed_grn_time;
              if (fixed_grn_time && (fixed_grn_time >> 4) == jknums && (fixed_grn_time & 0x0f) == cdnums) {
                lxh = current_movements_paras[m].num_movements;
                break;
              }
            }
          }
          if (lxh > 0) {
            if (byMovementsState[lxh - 1] == 0) {
              xhz = 4;
            } else if (byMovementsState[lxh - 1] == 1) {
              xhz = 1;
            } else if (byMovementsState[lxh - 1] == 2) {
              xhz = 3;
            } else if (byMovementsState[lxh - 1] == 3) {
              xhz = 2;
            }
            var kbcd_lx = 0;// 可变车道具体方向值
            if (kbcd_states.length >= xhz) {
              kbcd_lx = kbcd_states[xhz - 1];
              // 绘制可变车道信息
              changechedao(myCanvas, jknums - 1, cdnums - 1, parseInt(kbcd_lx), 1);
            }
          }
        }
      }
    }
  }
}

// 画当前相位剩余时间
function drawsytime(x, y, fztypes) {
  // 判断是否存在父子路口
  if (fztypes == 0) {
    var c = document.getElementById(myCanvas);
    var cxt = c.getContext("2d");
    cxt.fillStyle = loadcolor;
    cxt.beginPath();
    cxt.arc(x, y, tdkd * 2 / 3, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();
    var c6 = document.getElementById(myCanvas);
    var cxt6 = c6.getContext("2d");
    cxt6.fillStyle = "#FFFFFF";
    cxt6.font = namesize + "px Arial";
    cxt6.beginPath();
    cxt6.fillText(sytime, x - tdkd / 3, y + tdkd / 3);
    cxt6.closePath();
  } else if (fztypes == 1) {
    var c = document.getElementById(myCanvas);
    var cxt = c.getContext("2d");
    cxt.fillStyle = loadcolor;
    cxt.beginPath();
    cxt.arc(x, y, tdkd * 2 / 3, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();
    var c6 = document.getElementById(myCanvas);
    var cxt6 = c6.getContext("2d");
    cxt6.fillStyle = "#FFFFFF";
    cxt6.font = namesize + "px Arial";
    cxt6.beginPath();
    cxt6.fillText(Csytime, x - tdkd / 3, y + tdkd / 3);
    cxt6.closePath();
  }
}

// 画非机动车左转
function drawfjdcleft(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, -kd / 16);
  cxt4.lineTo(kd / 2, -kd / 16);
  cxt4.lineTo(kd / 2 + kd / 8, -kd / 8 - kd / 8);
  cxt4.lineTo(kd / 2 + kd / 8 - kd / 8, -kd / 8 - kd / 8);
  cxt4.lineTo(kd / 2 + kd / 8 + (kd / 8 / Math.tan(67.5 * Math.PI / 180) + kd / 8) / 2, -kd / 8 - kd / 4);
  cxt4.lineTo(kd / 2 + kd / 8 / Math.tan(67.5 * Math.PI / 180) + kd / 2 - kd / 8, -kd / 8 - kd / 8);
  cxt4.lineTo(kd / 2 + kd / 8 / Math.tan(67.5 * Math.PI / 180) + kd / 2 - kd / 4, -kd / 8 - kd / 8);
  cxt4.lineTo(kd / 2 + kd / 8 / Math.tan(67.5 * Math.PI / 180), kd / 16);
  cxt4.lineTo(kd * 3 / 16, kd / 16);
  cxt4.lineTo(kd * 3 / 16, -kd / 16);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画非机动车直行
function drawfjdczhixing(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }

  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, kd / 16);
  cxt4.lineTo(kd * 3 / 4, kd / 16);
  cxt4.lineTo(kd * 3 / 4, kd / 16 + kd / 8);
  cxt4.lineTo(kd * 3 / 4 + kd / 4, 0);
  cxt4.lineTo(kd * 3 / 4, -kd / 16 - kd / 8);
  cxt4.lineTo(kd * 3 / 4, -kd / 16);
  cxt4.lineTo(kd * 3 / 16, -kd / 16);
  cxt4.lineTo(kd * 3 / 16, kd / 16);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画非机动车左直
function drawfjdcleftAndZhixing(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  // 先画直行
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, kd / 16);
  cxt4.lineTo(kd * 3 / 4, kd / 16);
  cxt4.lineTo(kd * 3 / 4, kd / 16 + kd / 8);
  cxt4.lineTo(kd * 3 / 4 + kd / 4, 0);
  cxt4.lineTo(kd * 3 / 4, -kd / 16 - kd / 8);
  cxt4.lineTo(kd * 3 / 4, -kd / 16);
  cxt4.lineTo(kd * 9 / 16, -kd / 16);
  cxt4.lineTo(kd * 23 / 32, -kd * 4 / 16);
  cxt4.lineTo(kd * 27 / 32, -kd * 4 / 16);
  cxt4.lineTo(kd * 21 / 32, -kd * 13 / 32);
  cxt4.lineTo(kd * 14 / 32, -kd * 4 / 16);
  cxt4.lineTo(kd * 19 / 32, -kd * 4 / 16);
  cxt4.lineTo(kd * 7 / 16, -kd / 16);
  cxt4.lineTo(kd * 3 / 16, -kd / 16);
  cxt4.lineTo(kd * 3 / 16, kd / 16);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画左转流向
function drawRtInfoExleft(x, y, jd, color, fzlktype) {
  var mix = 3;

  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }

  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }

  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, -kd / 8);
  cxt4.lineTo(kd, -kd / 8);
  cxt4.lineTo(kd + kd / 4, -kd / 8 - kd / 4);
  cxt4.lineTo(kd + kd / 4 - kd / 4, -kd / 8 - kd / 4);
  cxt4.lineTo(kd + kd / 4 + (kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 4) / 2, -kd / 4 - kd / 2);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 2 + kd / 4, -kd / 8 - kd / 4);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 2, -kd / 8 - kd / 4);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180), kd / 8);
  cxt4.lineTo(kd * 3 / 16, kd / 8);
  cxt4.lineTo(kd * 3 / 16, -kd / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画直行流向
function drawRtInfoExzhixing(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, kd / 8);
  cxt4.lineTo(kd + kd / 2, kd / 8);
  cxt4.lineTo(kd + kd / 2, kd / 8 + kd / 4);
  cxt4.lineTo(kd + kd / 2 + kd / 2, 0);
  cxt4.lineTo(kd + kd / 2, -kd / 8 - kd / 4);
  cxt4.lineTo(kd + kd / 2, -kd / 8);
  cxt4.lineTo(kd * 3 / 16, -kd / 8);
  cxt4.lineTo(kd * 3 / 16, kd / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画右转流向
function drawRtInfoExright(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(kd * 3 / 16, kd / 8);
  cxt4.lineTo(kd, kd / 8);
  cxt4.lineTo(kd + kd / 4, kd / 8 + kd / 4);
  cxt4.lineTo(kd + kd / 4 - kd / 4, kd / 8 + kd / 4);
  cxt4.lineTo(kd + kd / 4 + (kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 4) / 2, kd / 4 + kd / 2);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 2 + kd / 4, kd / 8 + kd / 4);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180) + kd / 2, kd / 8 + kd / 4);
  cxt4.lineTo(kd + kd / 4 / Math.tan(67.5 * Math.PI / 180), -kd / 8);
  cxt4.lineTo(kd * 3 / 16, -kd / 8);
  cxt4.lineTo(kd * 3 / 16, kd / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画掉头流向
function drawRtInfoExdiaotou(x, y, jd, color, fzlktype) {
  var mix = 3;
  if (fzlktype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (tdj[t] <= mix) {
        mix = tdj[t];
      }
    }
  } else if (fzlktype == 1) {
    for (var t = 0; t < Cpzjd.length; t++) {
      if (Ctdj[t] <= mix) {
        mix = Ctdj[t];
      }
    }
  }
  var kd = 0;
  if (mix == 1) {
    kd = tdkd / 3;
  } else if (mix == 2) {
    kd = tdkd / 2;
  } else if (mix == 3) {
    kd = tdkd;
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate((jd + 180) * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = "#E1E100";
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  // 起点坐标偏移量
  var x1 = kd * 3 / 16;
  var y1 = -kd / 8;
  cxt4.moveTo(x1, y1);
  cxt4.lineTo(x1, y1 + kd / 4);
  cxt4.lineTo(x1 + 3 * kd / 4 + kd / 8, y1 + kd / 4);
  cxt4.lineTo(x1 + 3 * kd / 4 + kd / 8, y1 + kd / 4 - kd);
  cxt4.lineTo(x1 + kd / 4 + kd / 8, y1 + kd / 4 - kd);
  cxt4.lineTo(x1 + kd / 4 + kd / 8, y1 - kd);
  cxt4.lineTo(x1 + kd / 4 - 2 * kd / 8, y1 - kd + 3 * kd / 8);
  cxt4.lineTo(x1 + kd / 4 + kd / 8, y1 - kd + 3 * kd / 4);
  cxt4.lineTo(x1 + kd / 4 + kd / 8, y1 - kd + kd / 2);
  cxt4.lineTo(x1 + kd / 2 + kd / 8, y1 - kd + kd / 2);
  cxt4.lineTo(x1 + kd / 2 + kd / 8, y1);
  cxt4.lineTo(x1, y1);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 画相位人行线
function drawRtInfoExfootline(x, y, jd, color) {
  jd = jd - 90;
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd * Math.PI / 180);
  if (color == 2) {
    cxt4.fillStyle = loadcolor;
  } else if (color == 3) {
    cxt4.fillStyle = "#00EC00";// 路口模型横向标
  } else if (color == 0) {
    cxt4.fillStyle = loadcolor;
  }
  cxt4.beginPath();
  cxt4.moveTo(0, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2, tdkd / 2 / 8);
  cxt4.lineTo(tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 / 2 + tdkd / 2 / 2, 0);
  cxt4.lineTo(tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(tdkd / 2 / 2, -tdkd / 2 / 8);
  cxt4.lineTo(0, -tdkd / 2 / 8);
  cxt4.lineTo(-tdkd / 2 / 2, -tdkd / 2 / 8);
  cxt4.lineTo(-tdkd / 2 / 2, -tdkd / 2 / 8 - tdkd / 2 / 4);
  cxt4.lineTo(-tdkd / 2 / 2 - tdkd / 2 / 2, 0);
  cxt4.lineTo(-tdkd / 2 / 2, tdkd / 2 / 8 + tdkd / 2 / 4);
  cxt4.lineTo(-tdkd / 2 / 2, tdkd / 2 / 8);
  cxt4.lineTo(0, tdkd / 2 / 8);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 道路进口流向图标初始化
function liuxiangtb() {
  // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
  for (var t = 0; t < liuxianghao.length; t++) {
    if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
      var z = 0;
      for (var p = 0; p < jkid.length; p++) {
        if (jkid[p] == jinkouid[t]) {
          z = p;
        }
      }
      if (zdygdbj) {
        var lxqz1 = liuxiangpz[t];
        if (lxqz1 == 3) {
          drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, myCanvas, 0);
        }
        isclick[t] = 0;
      } else {
        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, myCanvas, 0);
        isclick[t] = 0;
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
    for (var t = 0; t < Cliuxianghao.length; t++) {
      if (Ciscontrl[t] == 1 && typeof (Cjinkouid[t]) !== "undefined") {
        var z = 0;
        for (var p = 0; p < Cjkid.length; p++) {
          if (Cjkid[p] == Cjinkouid[t]) {
            z = p;
          }
        }
        if (zdygdbj) {
          var lxqz2 = Cliuxiangpz[t];
          if (lxqz2 == 3) {
            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 0, Cjinkouid[t], 1, myCanvas, 1);
            Cisclick[t] = 0;
          }
          isclick[t] = 0;
        } else {
          drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 0, Cjinkouid[t], 1, myCanvas, 1);
          Cisclick[t] = 0;
        }
      }
    }
  }
}

// 道路进口流向图标初始化
function liuxiangtbsetdata() {
  // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
  for (var t = 0; t < liuxianghao.length; t++) {
    if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined" && jinkouid[t] != 0) {
      var z = 0;
      for (var p = 0; p < jkid.length; p++) {
        if (jkid[p] == jinkouid[t]) {
          z = p;
        }
      }
      if (zdygdbj) {
        var lxqz1 = liuxiangpz[t];
        if (lxqz1 == 3) {
          drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], isclick[t], jinkouid[t], 1, myCanvas, 0);
        }
      } else {
        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], isclick[t], jinkouid[t], 1, myCanvas, 0);
      }
    }
  }
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // liuxiangpz流向配置 jinkouid进口id iscontrl是否参与控制 liuxianghao流向号 jkid进口ID顺序
    for (var t = 0; t < Cliuxianghao.length; t++) {
      if (Ciscontrl[t] == 1 && typeof (Cjinkouid[t]) !== "undefined" && Cjinkouid[t] != 0) {
        var z = 0;
        for (var p = 0; p < Cjkid.length; p++) {
          if (Cjkid[p] == Cjinkouid[t]) {
            z = p;
          }
        }
        if (zdygdbj) {
          var lxqz2 = Cliuxianghao[t];
          if (lxqz2 == 3) {
            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], Cisclick[t], Cjinkouid[t], 1, myCanvas, 1);
          }
        } else {
          drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], Cisclick[t], Cjinkouid[t], 1, myCanvas, 1);
        }
      }
    }
  }
}

// 画配置流向箭头(t 流向号,types 流向配置1-11,jiaodu 偏转角度,isselect 是否已经是绿色（选中）,jinkouids 进口ID,isdraw 0 清除 1画图)
function drawliuxiangjiantou(t, types, jiaodu, isselect, jinkouids, isdraw, canvasid, isfzlknum) {
  var x1 = 0;
  var y1 = 0;

  var x2 = 0;
  var y2 = 0;

  var x3 = 0;
  var y3 = 0;

  var x4 = 0;
  var y4 = 0;

  var z = 0;
  var lsy = 0;
  if (isfzlknum == 0) {
    x1 = jxpoint1x[t];
    y1 = jxpoint1y[t];

    x2 = jxpoint2x[t];
    y2 = jxpoint2y[t];

    x3 = jxpoint3x[t];
    y3 = jxpoint3y[t];

    x4 = jxpoint4x[t];
    y4 = jxpoint4y[t];

    for (var p = 0; p < jkid.length; p++) {
      if (jkid[p] == jinkouids) {
        z = p;
      }
    }
    lsy = tdj[z] * tdkd / jkliuxiangcount[z];
  } else if (isfzlknum == 1) {
    x1 = Cjxpoint1x[t];
    y1 = Cjxpoint1y[t];

    x2 = Cjxpoint2x[t];
    y2 = Cjxpoint2y[t];

    x3 = Cjxpoint3x[t];
    y3 = Cjxpoint3y[t];

    x4 = Cjxpoint4x[t];
    y4 = Cjxpoint4y[t];

    for (var p = 0; p < Cjkid.length; p++) {
      if (Cjkid[p] == jinkouids) {
        z = p;
      }
    }
    lsy = Ctdj[z] * tdkd / Cjkliuxiangcount[z];
  }
  var color = "";
  // console.log(qcanvasid);
  if (isdraw == 0 || showtype == 8 || showtype == 9) {
    color = "#FFFFFF";
  } else if (isdraw == 1) {
    if (isselect == 0) {
      color = "#008aaf";
    } else if (isselect == 1) {
      color = "#00EC00";
    }
  } else if (isdraw == 2) { // 清除
    color = "#222e3e";
  }
  var canva = document.getElementById(canvasid);
  var context2D = canva.getContext("2d");
  if (types == 1) { // 左转
    flowControlToLeftArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 2) { // 直行
    flowControlToStraightArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 3) { // 右转
    flowControlToRightArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 4) { // 人行
    flowControlToPavementArrow(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color);
  } else if (types == 5) { // 左直
    flowControlToLeftStraightArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 6) { // 直右
    flowControlToStraightRightArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 7) { // 通行
    flowControlToPassageArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 8) { // 掉头
    flowControlToTurnAroundArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 9) { // 左掉头
    flowControlToLeftTurnAroundArrow(context2D, x1, y1, jiaodu, color, lsy);
  } else if (types == 10) {
    flowControlToPavementArrowOne(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color);
  } else if (types == 11) {
    flowControlToPavementArrowTwo(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color);
  } else if (types == 12) { // 非机动车左转
    if (isselect == 0) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#008aaf";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
      cxt4.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    } else if (isselect == 1) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#00EC00";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 2 - tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
      cxt4.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2 + tdkd / 16, (lsy - tdkd * 3 / 4) / 2);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    }
  } else if (types == 13) { // 非机动车直行
    if (isselect == 0) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#008aaf";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy) / 2 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 4 + tdkd / 2, (lsy) / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 4 + tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    } else if (isselect == 1) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#00EC00";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy) / 2 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 4 + tdkd / 2, (lsy) / 2);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 4 + tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    }
  } else if (types == 14) { // 非机动车左直
    if (isselect == 0) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#008aaf";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 4 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 4 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    } else if (isselect == 1) {
      var c4 = document.getElementById(canvasid);
      var cxt4 = c4.getContext("2d");
      cxt4.save();
      cxt4.translate(x1, y1);
      cxt4.rotate(jiaodu * Math.PI / 180);
      cxt4.fillStyle = "#00EC00";
      cxt4.beginPath();
      cxt4.moveTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 16);
      cxt4.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 4 - tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 4 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 16 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 + tdkd / 8 - tdkd / 16);
      cxt4.lineTo(tdkd / 2 - tdkd / 4 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2 - tdkd / 8 + tdkd / 16);
      cxt4.lineTo(tdkd / 2 + tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
      cxt4.closePath();
      cxt4.fill();
      cxt4.restore();
    }
  }
}

// 画流向控制左转箭头
function flowControlToLeftArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd / 2 - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制直行箭头
function flowControlToStraightArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy) / 2 - tdkd / 8);
  context2D.lineTo(tdkd * 15 / 8, (lsy) / 2 - tdkd / 8);
  context2D.lineTo(tdkd * 15 / 8, (lsy) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 - tdkd / 4, (lsy) / 2);
  context2D.lineTo(tdkd / 2, (lsy) / 2 - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy) / 2 - tdkd / 8);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制右转箭头
function flowControlToRightArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd / 2 - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制人行道箭头
function flowControlToPavementArrow(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color) {
  var xx1 = x1 + (x4 - x1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var yy1 = y1 + (y4 - y1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var xx2 = x2 + (x3 - x2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy2 = y2 + (y3 - y2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx3 = x3 + (x2 - x3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy3 = y3 + (y2 - y3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx4 = x4 + (x1 - x4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));
  var yy4 = y4 + (y1 - y4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));

  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.lineTo(xx2, yy2);
  context2D.lineTo(xx2 + (xx1 - xx2) / 4, yy2 + (yy1 - yy2) / 4);
  context2D.lineTo(xx3 + (xx4 - xx3) / 4, yy3 + (yy4 - yy3) / 4);
  context2D.lineTo(xx3, yy3);
  context2D.lineTo(x4 + (x3 - x4) / 2, y4 + (y3 - y4) / 2);
  context2D.lineTo(xx4, yy4);
  context2D.lineTo(xx4 + (xx3 - xx4) / 4, yy4 + (yy3 - yy4) / 4);
  context2D.lineTo(xx1 + (xx2 - xx1) / 4, yy1 + (yy2 - yy1) / 4);
  context2D.lineTo(xx1, yy1);
  context2D.lineTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.closePath();
  context2D.fill();
}
// 画流向控制左直转箭头
function flowControlToLeftStraightArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4 + tdkd / 8);
  context2D.lineTo(tdkd / 2 - tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 - tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制直右转箭头
function flowControlToStraightRightArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.strokeStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 - tdkd / 8);
  context2D.lineTo(tdkd / 2 - tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 + tdkd / 8);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.closePath();
  context2D.stroke();
  context2D.restore();
}
// 画流向控制通行转箭头
function flowControlToPassageArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.strokeStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4);
  context2D.lineTo(tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4);
  context2D.lineTo(tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 + tdkd / 8);
  context2D.lineTo(tdkd * 3 / 4 - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 + tdkd / 8);
  context2D.lineTo(tdkd - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 + tdkd / 8);
  context2D.lineTo(tdkd * 5 / 4 - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 + tdkd / 8);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 + tdkd / 8);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 4);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 - tdkd / 4 + tdkd / 8);
  context2D.lineTo(tdkd / 2 - tdkd / 8 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 2 / 4 - tdkd / 8 - tdkd / 4);
  context2D.lineTo(tdkd / 2 - tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 8 - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 + tdkd / 8 - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 4);
  context2D.closePath();
  context2D.stroke();
  context2D.restore();
}
// 画流向控制掉头转箭头
function flowControlToTurnAroundArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 8);
  context2D.lineTo(tdkd / 4 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 8);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 8);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制左掉头转箭头
function flowControlToLeftTurnAroundArrow(context2D, x, y, angle, color, lsy) {
  context2D.save();
  context2D.translate(x, y);
  context2D.rotate(angle * Math.PI / 180);
  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2);
  context2D.lineTo(tdkd * 15 / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd * 3 / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2 - tdkd / 8);
  context2D.lineTo(tdkd * 3 / 4 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4 - tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 8);
  context2D.lineTo(tdkd / 2 + tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 4);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd - tdkd / 4);
  context2D.lineTo(tdkd, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 4);
  context2D.lineTo(tdkd / 2 + tdkd / 4, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 4 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2 + tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd * 3 / 4);
  context2D.lineTo(tdkd / 2 - tdkd / 8, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2 + tdkd / 2);
  context2D.lineTo(tdkd / 2, (lsy - tdkd * 3 / 4) / 2);
  context2D.closePath();
  context2D.fill();
  context2D.restore();
}
// 画流向控制人行1箭头(二次过街)
function flowControlToPavementArrowOne(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color) {
  var xx1 = x1 + (x4 - x1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var yy1 = y1 + (y4 - y1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var xx2 = x2 + (x3 - x2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy2 = y2 + (y3 - y2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx3 = x3 + (x2 - x3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy3 = y3 + (y2 - y3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx4 = x4 + (x1 - x4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));
  var yy4 = y4 + (y1 - y4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));

  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.lineTo(xx2, yy2);
  context2D.lineTo(xx2 + (xx1 - xx2) / 4, yy2 + (yy1 - yy2) / 4);
  context2D.lineTo(xx3 + (xx4 - xx3) / 4, yy3 + (yy4 - yy3) / 4);
  context2D.lineTo(xx3, yy3);
  context2D.lineTo(x4 + (x3 - x4) / 2, y4 + (y3 - y4) / 2);
  context2D.lineTo(xx4, yy4);
  context2D.lineTo(xx4 + (xx3 - xx4) / 4, yy4 + (yy3 - yy4) / 4);
  context2D.lineTo(xx1 + (xx2 - xx1) / 4, yy1 + (yy2 - yy1) / 4);
  context2D.lineTo(xx1, yy1);
  context2D.lineTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.closePath();
  context2D.fill();
}
// 画流向控制人行2箭头(二次过街)
function flowControlToPavementArrowTwo(context2D, x1, y1, x2, y2, x3, y3, x4, y4, color) {
  var xx1 = x1 + (x4 - x1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var yy1 = y1 + (y4 - y1) * tdkd / 4 / (Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1)));
  var xx2 = x2 + (x3 - x2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy2 = y2 + (y3 - y2) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx3 = x3 + (x2 - x3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var yy3 = y3 + (y2 - y3) * tdkd / 4 / (Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)));
  var xx4 = x4 + (x1 - x4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));
  var yy4 = y4 + (y1 - y4) * tdkd / 4 / (Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4)));

  context2D.fillStyle = color;
  context2D.beginPath();
  context2D.moveTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.lineTo(xx2, yy2);
  context2D.lineTo(xx2 + (xx1 - xx2) / 4, yy2 + (yy1 - yy2) / 4);
  context2D.lineTo(xx3 + (xx4 - xx3) / 4, yy3 + (yy4 - yy3) / 4);
  context2D.lineTo(xx3, yy3);
  context2D.lineTo(x4 + (x3 - x4) / 2, y4 + (y3 - y4) / 2);
  context2D.lineTo(xx4, yy4);
  context2D.lineTo(xx4 + (xx3 - xx4) / 4, yy4 + (yy3 - yy4) / 4);
  context2D.lineTo(xx1 + (xx2 - xx1) / 4, yy1 + (yy2 - yy1) / 4);
  context2D.lineTo(xx1, yy1);
  context2D.lineTo(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2);
  context2D.closePath();
  context2D.fill();
}

// 如果b在a和c之间，返回true
// 当a==b或者b==c时排除结果，返回false
function isInBetween(a, b, c) {
  // 如果b几乎等于a或c，返回false.为了避免浮点运行时两值几乎相等，但存在相差0.00000...0001的这种情况出现使用下面方式进行避免
  if (Math.abs(a - b) < 0.000001 || Math.abs(b - c) < 0.000001) {
    return false;
  }
  return (a < b && b < c) || (c < b && b < a);
}

// 判断两条线是否相交
function isIntersect(x1, y1, x11, y11, x2, y2, x22, y22) {
  // 转换成一般式: Ax+By = C
  var a1 = y11 - y1;
  var b1 = x1 - x11;
  var c1 = a1 * x1 + b1 * y1;
  // 转换成一般式: Ax+By = C
  var a2 = y22 - y2;
  var b2 = x2 - x22;
  var c2 = a2 * x2 + b2 * y2;
  // 计算交点
  var d = a1 * b2 - a2 * b1;
  // 当d==0时，两线平行
  if (d == 0) {
    return false;
  } else {
    var x = (b2 * c1 - b1 * c2) / d;
    var y = (a1 * c2 - a2 * c1) / d;
    // 检测交点是否在两条线段上
    if ((isInBetween(x1, x, x11) || isInBetween(y1, y, y11)) && (isInBetween(x2, x, x22) || isInBetween(y2, y, y22))) {
      return true;
    }
  }
  return false;
}

// 判断浏览器是否是IE8
function isIE8() {
  if (document.all) {
    return navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 8.0") != "-1";
  } else {
    return false;
  }
}

// 设置流向是否可选择，canid画布ID  1是可点击，0 是不可点击， 2 仅可变车道可点击， 3仅可变车道不可点击
export function SetEnable(istrue) {
  if (istrue == 0) {
    document.getElementById(myCanvas).onclick = "";
  } else {
    document.getElementById(myCanvas).onclick = function() {
      addclick(istrue);
    };
  }
}
// 获取路口所有流向预设值
function GetAll(canvasid) {
  var result = "";
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canvasid) {
      // showtype类型
      showtype = qtype[i];
      // 格式化路口模型数据
      gshdata(qinitdata[i]);
      // 初始化特征参数信息
      inittzcsdata(qtzcsdata[i]);
      // 格式化相邻路口数据
      nearlkdata(qnearlkdata[i]);
      // 格式化可变车道信息
      initkbcddata(qinitkbcddatas[i]);
      // 预设流向号是否参加控制
      var ysxw = qprexw[i];
      var ysxw2bin = dec2bin(ysxw);
      // 类型1|进口ＩＤ｜值
      // 所有流向值
      for (var j = 0; j < ysxw2bin.length; j++) {
        var zm = ysxw2bin.charAt(ysxw2bin.length - 1 - j);
        if (zm == "0") {
        } else if (zm == "1") {
          var lsre = "1|" + jinkouid[j] + "|" + liuxiangpz[j];
          if (result == "") {
            result = lsre;
          } else {
            result = result + "," + lsre;
          }
        }
      }
      // 类型2|进口ＩＤ｜车道号|值
      // alert(qkbcddata[i]+"=="+qkbcdsetvalues[i]);
      // 获取所有可变车道预设值
      var lskbcd = qkbcddata[i].split(";");
      for (var k = 0; k < lskbcd.length; k++) {
        var lsda = lskbcd[k].split("|");
        if (lsda[4] != "0") {
          var lsre = "2|" + lsda[2] + "|" + lsda[3] + "|" + lsda[4];
          if (result == "") {
            result = lsre;
          } else {
            result = result + "," + lsre;
          }
        }
      }
    }
  }
  return result;
}
function addnearlkmous(clickjl) {
  document.getElementById(myCanvas).onmousemove = function() {
    var idobj = event.srcElement;
    var canvasid = "";
    if (isIE8()) {
      canvasid = idobj.parentElement.id;// ie8
    } else {
      canvasid = idobj.id;// ie9或其他不支持火狐
    }
    var p = getEventPosition(event);
    var xllkid = getLkId(clickjl, p);
    if (xllkid) {
      var name = getLkName(xllkid);
      drawLkName(canvasid, name);
    }
  };
}
// 相邻路口点击事件
function addnearlkclick(clickjl) {
  document.getElementById(myCanvas).onclick = function() {
    var p = getEventPosition(event);
    var xllkid = getLkId(clickjl, p);
    if (xllkid) {
      nextcrossid(xllkid);
    }
  };
}
function getLkId(clickjl, p) {
  // 点击的相邻路口ID，扩展父子路口发现点击子路口相邻路口图标无法判断，所以采用判断变量是否存在的方法
  var xllkid = null;
  for (var i = 0; i < pzjd.length; i++) {
    if (nearxhjid[i] != "") {
      // 绘制相邻路口
      var jl = Math.sqrt((p.x - nearimgpointx[i]) * (p.x - nearimgpointx[i]) + (p.y - nearimgpointy[i]) * (p.y - nearimgpointy[i]));
      if (jl <= clickjl) {
        xllkid = nearxhjid[i];
      }
    }
  }
  if (!xllkid) { // 在父路口没有找到点击的相邻路口ID，并且路口为父子路口，则从子路口里查找
    for (var i = 0; i < Cpzjd.length; i++) {
      if (Cnearxhjid[i] != "") {
        // 绘制相邻路口
        var jl = Math.sqrt((p.x - Cnearimgpointx[i]) * (p.x - Cnearimgpointx[i]) + (p.y - Cnearimgpointy[i]) * (p.y - Cnearimgpointy[i]));
        if (jl <= clickjl) {
          xllkid = Cnearxhjid[i];
        }
      }
    }
  }
  return xllkid;
}
// var xllkNameMap = new ticcFn.Map();
// 获得相邻路口名称
function getLkName(lkid) {
  if (!lkid) {
    return null;
  }
  var name = xllkNameMap.get(lkid);
  if (name == null) {
    $.ajax({
      url: contextPath + "/jcdevicelkmx/getsinglelkmx",
      type: "post",
      data: { id: lkid },
      async: false,
      success: function(data) {
        if (data) {
          xllkNameMap.put(data.inter_id, data.name);
          name = data.name;
        }
      }, error: function() {
        console.log("接口异常:/jcdevicelkmx/getsinglelkmx");
      }
    });
  }
  return name;
}
// 画相邻路口名称
function drawLkName(canvasid, name) {
  var c6 = document.getElementById(canvasid);
  var cxt6 = c6.getContext("2d");
  cxt6.fillStyle = "#ADADAD";
  cxt6.font = "15px Arial";
  cxt6.beginPath();
  cxt6.fillText(name, c6.clientWidth - 150, c6.clientHeight - 10);
  cxt6.closePath();
}
// 相邻路口点击事件
function nextcrossid(lkid) {
  if (!lkid) {
    return;
  }
  $.ajax({
    url: contextPath + "/jcdevicerelate/getLkDeviceRelate",
    type: "post",
    data: { type: "acs_device", id: lkid },
    async: true,
    success: function(data) {
      if (!data) {
        notify("该路口尚未关联信号机！", "warn", true, true);
      } else {
        var data = eval("(" + data + ")");
        if (data.acs_id > 0) {
          var url = contextPath + "/signalctrl/signal?acsId=" + data.acs_id + "&comType=supcon";
          var id = "xhkz_" + data.acs_id;
          quick_dialog(id, "信号机控制(" + data.name + ":" + data.acs_id + ")", url, 900, 600, "", true, true, false);
        } else {
          notify("该路口尚未关联信号机！", "warn", true, true);
        }
      }
    }, error: function() {
      console.log("接口异常:/jcdevicerelate/getLkDeviceRelate！");
    }
  });
}

// 给画布添加点击事件
function addclick(flowIsClick) {
  document.getElementById(myCanvas).onclick = function() {
    var p = getEventPosition(event);
    var idobj = event.srcElement;
    var canvasid = "";
    if (isIE8()) {
      canvasid = idobj.parentElement.id;// ie8
    } else {
      canvasid = idobj.id;// ie9或其他不支持火狐
    }
    if (flowIsClick != 2) {
	        for (var i = 0; i < qcanvasid.length; i++) {
	            if (qcanvasid[i] == canvasid) {
	                // showtype类型
	                showtype = qtype[i];
	                // 格式化路口模型数据
	                gshdata(qinitdata[i]);
	                // 初始化特征参数信息
	                inittzcsdata(qtzcsdata[i]);
	                // 格式化相邻路口数据
	                nearlkdata(qnearlkdata[i]);
	                // 格式化可变车道信息
	                initkbcddata(qinitkbcddatas[i]);
	                // 初始化路口模型
	                lkmxinit(qtype[i], canvasid);
	                // 1画道路边线
	                lkmxroadline();
	                // 计算路口模型点位数据
	                drawlkmxdata(i);

	                // 判断是否存在父子路口
	                if (lkmxtype == 0) {
	                    // 预设流向号是否参加控制
	                    var ysxw = qprexw[i];
	                    var ysxw2bin = dec2bin(ysxw);
	                    for (var j = 0; j < liuxianghao.length; j++) {
	                        if (j < ysxw2bin.length) {
	                            var liux = liuxianghao[j];
	                            // 从二进制的后面往前取字符
	                            // var q = ysxw2bin.charAt(ysxw2bin.length - 1 - j);可能中间间断了某些流向号，所以不能按顺序取值MMP
	                            var q = ysxw2bin.charAt(ysxw2bin.length - liux);// 这是按照流向号下标反向取值
	                            if (q == "1") {
	                                isclick[j] = 1;
	                            } else {
	                                isclick[j] = 0;
	                            }
	                        } else {
	                            isclick[j] = 0;
	                        }
	                    }

	                    // 与每一个控制流向计算 是否被点击
	                    for (var t = 0; t < liuxianghao.length; t++) {
	                        if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
	                            var xiangjiaocount = 0;
	                            // 计算与每边是否相交
	                            var result1 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint1x[t], jxpoint1y[t], jxpoint2x[t], jxpoint2y[t]);
	                            var result2 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint2x[t], jxpoint2y[t], jxpoint3x[t], jxpoint3y[t]);
	                            var result3 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint3x[t], jxpoint3y[t], jxpoint4x[t], jxpoint4y[t]);
	                            var result4 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint4x[t], jxpoint4y[t], jxpoint1x[t], jxpoint1y[t]);
	                            // 计算交点个数
	                            if (result1) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result2) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result3) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result4) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }

	                            // 根据交点个数判断是否在范围内
	                            if (xiangjiaocount == 1 || xiangjiaocount == 3) {
	                                // T流向被点击
	                                if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
	                                    var z = 0;
	                                    for (var p1 = 0; p1 < jkid.length; p1++) {
	                                        if (jkid[p1] == jinkouid[t]) {
	                                            z = p1;
	                                        }
	                                    }
	                                }
	                                if (zdygdbj) {
	                                    if (t == 2 || t == 6 || t == 10 || t == 14 || t == 18) {
	                                        // 判断是否已经变绿
	                                        if (isclick[t] == 0) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 1, canvasid, 0);
	                                            isclick[t] = 1;
	                                            GetSingal("1|1|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                        } else if (isclick[t] == 1) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, canvasid, 0);
	                                            GetSingal("1|0|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                            isclick[t] = 0;
	                                        }
	                                    }
	                                } else {
	                                    // 判断是否已经变绿
	                                    if (isclick[t] == 0) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 1, canvasid, 0);
	                                        isclick[t] = 1;
	                                        GetSingal("1|1|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                    } else if (isclick[t] == 1) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, canvasid, 0);
	                                        GetSingal("1|0|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                        isclick[t] = 0;
	                                    }
	                                }
	                            }
	                        }
	                    }

	                    // 将二进制数组组合成二进制字符串
	                    var zfc2bin = "";
	                    for (var r = 0; r < maxLiuxiangNum; r++) {
	                        var inx = liuxianghao.indexOf((r + 1));
	                        if (inx != -1 && isclick[inx] == 1) {
	                            zfc2bin = "1" + zfc2bin;
	                        } else {
	                            zfc2bin = "0" + zfc2bin;
	                        }
	                    }
	                    // 将预设值转换成十进制保存到Map中
	                    var num = dec10bin(zfc2bin);
	                    qprexw[i] = num;
	                } else if (lkmxtype == 1) {
	                    var all_liuxianghao = liuxianghao.concat(Cliuxianghao);
	                    var all_isclick = new Array(32);
	                    // 预设流向号是否参加控制
	                    var ysxw = qprexw[i];
	                    var ysxw2bin = dec2bin(ysxw);
	                    for (var j = 0; j < all_liuxianghao.length; j++) {
	                        if (j < ysxw2bin.length) {
	                            var liux = all_liuxianghao[j];
	                            // 从二进制的后面往前取字符
	                            // var q = ysxw2bin.charAt(ysxw2bin.length - 1 - j);可能中间间断了某些流向号，所以不能按顺序取值MMP
	                            var q = ysxw2bin.charAt(ysxw2bin.length - liux);// 这是按照流向号下标反向取值
	                            if (q == "1") {
	                                all_isclick[j] = 1;
	                            } else {
	                                all_isclick[j] = 0;
	                            }
	                        } else {
	                            all_isclick[j] = 0;
	                        }
	                    }
	                    // 拆分all_isclick
	                    isclick = all_isclick.slice(0, liuxianghao.length);
	                    Cisclick = all_isclick.slice(liuxianghao.length);
	                    // 与每一个控制流向计算 是否被点击
	                    for (var t = 0; t < liuxianghao.length; t++) {
	                        if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
	                            var xiangjiaocount = 0;
	                            // 计算与每边是否相交
	                            var result1 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint1x[t], jxpoint1y[t], jxpoint2x[t], jxpoint2y[t]);
	                            var result2 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint2x[t], jxpoint2y[t], jxpoint3x[t], jxpoint3y[t]);
	                            var result3 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint3x[t], jxpoint3y[t], jxpoint4x[t], jxpoint4y[t]);
	                            var result4 = isIntersect(centerPointX, centerPointY, p.x, p.y, jxpoint4x[t], jxpoint4y[t], jxpoint1x[t], jxpoint1y[t]);
	                            // 计算交点个数
	                            if (result1) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result2) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result3) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result4) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (zdygdbj) {
	                                if (t == 2 || t == 6 || t == 10 || t == 14) {
	                                    // 根据交点个数判断是否在范围内
	                                    if (xiangjiaocount == 1 || xiangjiaocount == 3) {
	                                        // T流向被点击
	                                        if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
	                                            var z = 0;
	                                            for (var p1 = 0; p1 < jkid.length; p1++) {
	                                                if (jkid[p1] == jinkouid[t]) {
	                                                    z = p1;
	                                                }
	                                            }
	                                        }
	                                        // 判断是否已经变绿
	                                        if (isclick[t] == 0) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 1, canvasid, 0);
	                                            isclick[t] = 1;
	                                            GetSingal("1|1|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                        } else if (isclick[t] == 1) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, canvasid, 0);
	                                            GetSingal("1|0|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                            isclick[t] = 0;
	                                        }
	                                    }
	                                }
	                            } else {
	                                // 根据交点个数判断是否在范围内
	                                if (xiangjiaocount == 1 || xiangjiaocount == 3) {
	                                    // T流向被点击
	                                    if (iscontrl[t] == 1 && typeof (jinkouid[t]) !== "undefined") {
	                                        var z = 0;
	                                        for (var p1 = 0; p1 < jkid.length; p1++) {
	                                            if (jkid[p1] == jinkouid[t]) {
	                                                z = p1;
	                                            }
	                                        }
	                                    }
	                                    // 判断是否已经变绿
	                                    if (isclick[t] == 0) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 1, canvasid, 0);
	                                        isclick[t] = 1;
	                                        GetSingal("1|1|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                    } else if (isclick[t] == 1) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 1, jinkouid[t], 0, canvasid, 0);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, liuxiangpz[t], pzjd[z], 0, jinkouid[t], 1, canvasid, 0);
	                                        GetSingal("1|0|" + jinkouid[t] + "|" + liuxianghao[t] + "|" + liuxiangpz[t]);
	                                        isclick[t] = 0;
	                                    }
	                                }
	                            }
	                        }
	                    }

	                    // 与每一个控制流向计算 是否被点击
	                    for (var t = 0; t < Cliuxianghao.length; t++) {
	                        if (Ciscontrl[t] == 1 && typeof (Cjinkouid[t]) !== "undefined") {
	                            var xiangjiaocount = 0;
	                            // 计算与每边是否相交
	                            var result1 = isIntersect(CcenterPointX, CcenterPointY, p.x, p.y, Cjxpoint1x[t], Cjxpoint1y[t], Cjxpoint2x[t], Cjxpoint2y[t]);
	                            var result2 = isIntersect(CcenterPointX, CcenterPointY, p.x, p.y, Cjxpoint2x[t], Cjxpoint2y[t], Cjxpoint3x[t], Cjxpoint3y[t]);
	                            var result3 = isIntersect(CcenterPointX, CcenterPointY, p.x, p.y, Cjxpoint3x[t], Cjxpoint3y[t], Cjxpoint4x[t], Cjxpoint4y[t]);
	                            var result4 = isIntersect(CcenterPointX, CcenterPointY, p.x, p.y, Cjxpoint4x[t], Cjxpoint4y[t], Cjxpoint1x[t], Cjxpoint1y[t]);
	                            // 计算交点个数
	                            if (result1) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result2) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result3) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }
	                            if (result4) {
	                                xiangjiaocount = xiangjiaocount + 1;
	                            }

	                            // 根据交点个数判断是否在范围内
	                            if (xiangjiaocount == 1 || xiangjiaocount == 3) {
	                                // T流向被点击
	                                if (Ciscontrl[t] == 1 && typeof (Cjinkouid[t]) !== "undefined") {
	                                    var z = 0;
	                                    for (var p1 = 0; p1 < Cjkid.length; p1++) {
	                                        if (Cjkid[p1] == Cjinkouid[t]) {
	                                            z = p1;
	                                        }
	                                    }
	                                }
	                                if (zdygdbj) {
	                                    if (t == 2 || t == 6 || t == 10 || t == 14) {
	                                        // 判断是否已经变绿
	                                        if (Cisclick[t] == 0) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 0, canvasid, 1);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 1, canvasid, 1);
	                                            GetSingal("1|1|" + Cjinkouid[t] + "|" + Cliuxianghao[t] + "|" + Cliuxiangpz[t]);
	                                            Cisclick[t] = 1;
	                                        } else if (Cisclick[t] == 1) {
	                                            // 清除
	                                            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 0, canvasid, 1);
	                                            // 画箭头
	                                            drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 0, Cjinkouid[t], 1, canvasid, 1);
	                                            GetSingal("1|0|" + Cjinkouid[t] + "|" + Cliuxianghao[t] + "|" + Cliuxiangpz[t]);
	                                            Cisclick[t] = 0;
	                                        }
	                                    }
	                                } else {
	                                    // 判断是否已经变绿
	                                    if (Cisclick[t] == 0) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 0, canvasid, 1);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 1, canvasid, 1);
	                                        GetSingal("1|1|" + Cjinkouid[t] + "|" + Cliuxianghao[t] + "|" + Cliuxiangpz[t]);
	                                        Cisclick[t] = 1;
	                                    } else if (Cisclick[t] == 1) {
	                                        // 清除
	                                        drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 1, Cjinkouid[t], 0, canvasid, 1);
	                                        // 画箭头
	                                        drawliuxiangjiantou(t, Cliuxiangpz[t], Cpzjd[z], 0, Cjinkouid[t], 1, canvasid, 1);
	                                        GetSingal("1|0|" + Cjinkouid[t] + "|" + Cliuxianghao[t] + "|" + Cliuxiangpz[t]);
	                                        Cisclick[t] = 0;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    // 求相位值，需要合并isclick，Cisclick
	                    var all_isclick = isclick.concat(Cisclick);
	                    // 将二进制数组组合成二进制字符串
	                    var zfc2bin = "";
	                    for (var r = 0; r < maxLiuxiangNum; r++) {
	                        var inx = all_liuxianghao.indexOf((r + 1));
	                        if (inx != -1 && all_isclick[inx] == 1) {
	                            zfc2bin = "1" + zfc2bin;
	                        } else {
	                            zfc2bin = "0" + zfc2bin;
	                        }
	                    }
	                    // 将预设值转换成十进制保存到Map中
	                    var num = dec10bin(zfc2bin);
	                    qprexw[i] = num;
	                }

	                // 点击的点判断是否在可变车道圈内
	            }
	        }
    }
    // 根据坐标点位计算 onclick点是否在可变车道圆圈内
    kbcddata(canvasid, p.x, p.y);
  };
}

// 根据坐标点位计算 onclick点是否在可变车道圆圈内
function kbcddata(canvasid, x, y) {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    var num = qcanvasid.indexOf(canvasid);
    var datas = qkbcddata[num].split(";");
    for (var kb = 0; kb < datas.length; kb++) {
      var kd = datas[kb].split("|");
      var x2 = parseInt(kd[0]);
      var y2 = parseInt(kd[1]);
      // 进口num
      var jkn = parseInt(kd[2]);
      // 车道num
      var cdn = parseInt(kd[3]);

      // 计算直径
      var zj = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
      if (zj <= 6) {
        // 找出当前路口的可变车道预设值
        // 查询qkbcdsetvalues[num]可变车道预设数据信息
        var lsd = [];
        if (num != -1) {
          if (qkbcdsetvalues[num] != "") {
            lsd = qkbcdsetvalues[num].split(";");
          }
        }

        var kbcdlx = [];
        if (jkn == 0) {
          kbcdlx = kbcdztlx1[cdn];
        } else if (jkn == 1) {
          kbcdlx = kbcdztlx2[cdn];
        } else if (jkn == 2) {
          kbcdlx = kbcdztlx3[cdn];
        } else if (jkn == 3) {
          kbcdlx = kbcdztlx4[cdn];
        } else if (jkn == 4) {
          kbcdlx = kbcdztlx5[cdn];
        }

        var qsetnum = 10000;
        for (var w = 0; w < lsd.length; w++) {
          var lskbcd = lsd[w].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var lscdns = tdj[lsjkn] - lscdn - 1;
          if (lsjkn == jkn && lscdns == cdn) {
            qsetnum = w;
          }
        }
        if (qsetnum == 10000) {
          // 若onclick点在可变车道圆圈内则绘制可变车道
          var lscd = tdj[jkn] - cdn - 1;
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          if (nextxh == "undefined") {
            nextxh = 404;
          }
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[0]), 0, true, nextxh);
        } else {
          var lskbcd = lsd[qsetnum].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          var lscd = tdj[jkn] - cdn - 1;
          if (nextxh == "undefined") {
            nextxh = 404;
          }
          // 若onclick点在可变车道圆圈内则绘制可变车道
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[nextxh]), 0, true, nextxh);
        }
      }
    }
  } else if (lkmxtype == 1) {
    var d = qcanvasid.indexOf(canvasid);
    var datas = qkbcddata[d].split(";");
    for (var kb = 0; kb < datas.length; kb++) {
      var kd = datas[kb].split("|");
      var x2 = parseInt(kd[0]);
      var y2 = parseInt(kd[1]);
      // 进口num
      var jkn = parseInt(kd[2]);
      // 车道num
      var cdn = parseInt(kd[3]);
      // 计算直径
      var zj = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
      if (zj <= 6) { // 满足这个条件必定已经在父路口中了
        var lsd = [];
        var kbcdlx = [];
        var jk_index = jkid.indexOf(jkn + 1);
        if (jk_index != -1) { // 进口是父路口
          // 找出当前路口的可变车道预设值
          // 查询qkbcdsetvalues[d]可变车道预设数据信息
          if (d != -1) {
            if (qkbcdsetvalues[d] != "") {
              lsd = qkbcdsetvalues[d].split(";");
            }
          }
          if (jk_index == 0) {
            kbcdlx = kbcdztlx1[cdn];
          } else if (jk_index == 1) {
            kbcdlx = kbcdztlx2[cdn];
          } else if (jk_index == 2) {
            kbcdlx = kbcdztlx3[cdn];
          } else if (jk_index == 3) {
            kbcdlx = kbcdztlx4[cdn];
          } else if (jk_index == 4) {
            kbcdlx = kbcdztlx5[cdn];
          }
        }

        var qsetnum = 10000;
        for (var w = 0; w < lsd.length; w++) {
          var lskbcd = lsd[w].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var lscdns = tdj[lsjkn] - lscdn - 1;
          if (lsjkn == jkn && lscdns == cdn) {
            qsetnum = w;
          }
        }
        if (qsetnum == 10000) {
          // 若onclick点在可变车道圆圈内则绘制可变车道
          var lscd = tdj[jkn] - cdn - 1;
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          var lscd = tdj[jkn] - cdn - 1;
          if (nextxh == "undefined") {
            nextxh = 404;
          }
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[0]), lkmxtype, true, nextxh);
        } else {
          var lskbcd = lsd[qsetnum].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          var lscd = tdj[jkn] - cdn - 1;
          // 若onclick点在可变车道圆圈内则绘制可变车道
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[nextxh]), lkmxtype, true, nextxh);
        }
      }
    }

    // 判断子路口可变车道配置
    var Cdatas = Cqkbcddata[d].split(";");

    for (var kb = 0; kb < Cdatas.length; kb++) {
      var kd = Cdatas[kb].split("|");
      var x2 = parseInt(kd[0]);
      var y2 = parseInt(kd[1]);
      // 进口num
      var jkn = parseInt(kd[2]);
      // 车道num
      var cdn = parseInt(kd[3]);
      // 计算直径
      var zj = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
      if (zj <= 6) { // 满足这个条件必定在子路口了
        // 找出当前路口的可变车道预设值
        // 查询qkbcdsetvalues[num]可变车道预设数据信息
        var lsd = [];
        if (d != -1) {
          if (Cqkbcdsetvalues[d] != "") {
            lsd = Cqkbcdsetvalues[d].split(";");
          }
        }
        var kbcdlx = [];
        var inx = jkn - jkid.length;
        if (inx == 0) {
          kbcdlx = Ckbcdztlx1[cdn];
        } else if (inx == 1) {
          kbcdlx = Ckbcdztlx2[cdn];
        } else if (inx == 2) {
          kbcdlx = Ckbcdztlx3[cdn];
        } else if (inx == 3) {
          kbcdlx = Ckbcdztlx4[cdn];
        } else if (inx == 4) {
          kbcdlx = Ckbcdztlx5[cdn];
        }
        var qsetnum = 10000;
        for (var w = 0; w < lsd.length; w++) {
          var lskbcd = lsd[w].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var lscdns = tdj[inx] - lscdn - 1;
          if (lsjkn == jkn && lscdns == cdn) {
            qsetnum = w;
          }
        }
        if (qsetnum == 10000) {
          var lscd = Ctdj[inx] - cdn - 1;
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          if (nextxh == "undefined") {
            nextxh = 404;
          }
          // 若onclick点在可变车道圆圈内则绘制可变车道
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[0]), lkmxtype, true, nextxh);
        } else {
          var lskbcd = lsd[qsetnum].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var lsjkn = parseInt(lskbcd[1]);
          // 车道num
          var lscdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          var xh = -1;
          var nextxh = 0;
          for (var i = 0; i < kbcdlx.length; i++) {
            if (parseInt(kbcdlx[i]) == lsty) {
              xh = i;
            }
          }
          if (xh == kbcdlx.length - 1) {
            nextxh = 0;
          } else {
            nextxh = xh + 1;
          }
          var lscd = Ctdj[inx] - cdn - 1;
          // 若onclick点在可变车道圆圈内则绘制可变车道
          pzchangechedao(canvasid, jkn, lscd, parseInt(kbcdlx[nextxh]), lkmxtype, true, nextxh);
        }
      }
    }
  }
}

// 得到点击的坐标
function getEventPosition(ev) {
  var x, y;
  // if (ev.layerX || ev.layerX == 0) {
  //     x = ev.layerX;
  //     y = ev.layerY;
  if (ev.clientX || ev.clientX == 0) {
    x = ev.clientX - document.getElementById(myCanvas).getBoundingClientRect().left;
    y = ev.clientY - document.getElementById(myCanvas).getBoundingClientRect().top;
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    x = ev.offsetX;
    y = ev.offsetY;
  }
  return { x: x, y: y };
}

// 路口模型流向配置白底
function lkmxlxpzbd() {
  for (var p = 0; p < pzjd.length; p++) {
    var c4 = document.getElementById(myCanvas);
    var cxt4 = c4.getContext("2d");
    cxt4.fillStyle = "#FFFFFF";
    cxt4.beginPath();
    cxt4.moveTo(lxbdpoint1x[p], lxbdpoint1y[p]);
    cxt4.lineTo(lxbdpoint2x[p], lxbdpoint2y[p]);
    cxt4.lineTo(lxbdpoint3x[p], lxbdpoint3y[p]);
    cxt4.lineTo(lxbdpoint4x[p], lxbdpoint4y[p]);
    cxt4.lineTo(lxbdpoint1x[p], lxbdpoint1y[p]);
    cxt4.closePath();
    cxt4.fill();
  }
}

// 画流向 排队长度数据
function lkmxdrawvolpdcddata() {
  var c6 = document.getElementById(myCanvas);
  var cxt6 = c6.getContext("2d");
  cxt6.fillStyle = "#FFFFFF";
  cxt6.font = "14px Arial";
  cxt6.beginPath();
  cxt6.fillText("1", jkvoldata1x[0] - 9, jkvoldata1y[0] + 6);
  cxt6.fillText("2", jkvoldata1x[1] - 9, jkvoldata1y[1] + 6);
  cxt6.fillText("3", jkvoldata1x[2] - 9, jkvoldata1y[2] + 6);
  cxt6.fillText("1", jkpdcddata1x[0] - 9, jkpdcddata1y[0] + 6);
  cxt6.fillText("2", jkpdcddata1x[1] - 9, jkpdcddata1y[1] + 6);
  cxt6.fillText("3", jkpdcddata1x[2] - 9, jkpdcddata1y[2] + 6);

  cxt6.fillText("1", jkvoldata2x[0] - 9, jkvoldata2y[0] + 6);
  cxt6.fillText("2", jkvoldata2x[1] - 9, jkvoldata2y[1] + 6);
  cxt6.fillText("3", jkvoldata2x[2] - 9, jkvoldata2y[2] + 6);
  cxt6.fillText("1", jkpdcddata2x[0] - 9, jkpdcddata2y[0] + 6);
  cxt6.fillText("2", jkpdcddata2x[1] - 9, jkpdcddata2y[1] + 6);
  cxt6.fillText("3", jkpdcddata2x[2] - 9, jkpdcddata2y[2] + 6);

  cxt6.fillText("1", jkvoldata3x[0] - 9, jkvoldata3y[0] + 6);
  cxt6.fillText("2", jkvoldata3x[1] - 9, jkvoldata3y[1] + 6);
  cxt6.fillText("3", jkvoldata3x[2] - 9, jkvoldata3y[2] + 6);
  cxt6.fillText("1", jkpdcddata3x[0] - 9, jkpdcddata3y[0] + 6);
  cxt6.fillText("2", jkpdcddata3x[1] - 9, jkpdcddata3y[1] + 6);
  cxt6.fillText("3", jkpdcddata3x[2] - 9, jkpdcddata3y[2] + 6);

  cxt6.fillText("1", jkvoldata4x[0] - 9, jkvoldata4y[0] + 6);
  cxt6.fillText("2", jkvoldata4x[1] - 9, jkvoldata4y[1] + 6);
  cxt6.fillText("3", jkvoldata4x[2] - 9, jkvoldata4y[2] + 6);
  cxt6.fillText("1", jkpdcddata4x[0] - 9, jkpdcddata4y[0] + 6);
  cxt6.fillText("2", jkpdcddata4x[1] - 9, jkpdcddata4y[1] + 6);
  cxt6.fillText("3", jkpdcddata4x[2] - 9, jkpdcddata4y[2] + 6);
  cxt6.closePath();
}
// 清除左侧相位区覆盖div
function clearLeftCavAddDiv(canvasid) {
  if (document.getElementById(canvasid)) {
    $("#" + canvasid).remove();
  }
}
// 左侧相位区覆盖div以解决滚动条问题
function lkmxLeftCavAddDiv() {
  var cavObj = document.getElementById(myCanvas);
  var addDivText = "<div id=\'" + addDivId + "\' style=\'position:absolute;left:0px;top:0px;overflow:auto;\'><canvas id=\'" + addDivCavId + "\' width=\'0\' height=\'0\' style=\'border:0px solid #c3c3c3;\'><\/canvas><\/div>";
  if (!document.getElementById(addDivId)) {
    	$(cavObj.parentNode).append(addDivText);
  }
  $("#" + addDivId).width(lk4x + 6);
  $("#" + addDivId).height(lk4y);
  cavAdd = document.getElementById(addDivCavId);
  cavAdd.width = lk4x;
  cavAdd.height = lk4y;
}
// 将左边过线的图像覆盖
function lkmxfgleft() {
  var c1 = document.getElementById(myCanvas);
  var cxt = c1.getContext("2d");
  cxt.beginPath();
  var grd = cxt.createLinearGradient(0, 0, lk4x, lk4y);
  grd.addColorStop(0, "#2c3c4d");
  cxt.fillStyle = grd;
  cxt.fillRect(0, 0, lk4x, lk4y);
  cxt.closePath();
  cxt.stroke();
}
// 红绿灯背景图
function lkmxtrafficlightbj() {
  var cirDis;
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    if (pzjd.length == 2) {
      for (var p = 0; p < pzjd.length; p++) {
        var z = 0;
        if (p == 0) {
          z = 1;
        } else if (p == 1) {
          z = 0;
        }
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length == 3) {
      for (var p = 0; p < pzjd.length; p++) {
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length == 4) {
      for (var p = 0; p < pzjd.length; p++) {
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length > 4) {

    }
    if (pzjd.length < 5) {
      // 判断哪几个路口有非机动车流向 绘制非机动车白色背景
      fjdcWhiteBg(liuxiangpz, jinkouid, jkid, rightlightx, rightlighty, trafficlightpzjd);
      // 非机动车道3种类型绘制次数
      var fjdcdObject = {
        zuoNum: 0, // 左
        zhiNum: 0, // 直
        zzNum: 0 // 左直
      };
      // 根据流向信息画红绿灯
      for (var p = 0; p < byMovementsState.length; p++) {
        // 如果是有效流向，继续下一次循环
        var index = liuxianghao.indexOf(p + 1);
        if (index == -1) {
          continue;
        }
        var color = "";
        if (byMovementsState[p] == 0) {
          color = "#ADADAD";
        } else if (byMovementsState[p] == 1) {
          color = "red";
        } else if (byMovementsState[p] == 2) {
          color = "yellow";
        } else if (byMovementsState[p] == 3) {
          color = "#00EC00";
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (iscontrl[index] == 1 && typeof (jinkouid[index]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[index] == jkid[j]) {
              q = j;
            }
          }
          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (liuxiangpz[index] == 1 && jinkoufx[index] != 15) {
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 2 && jinkoufx[index] != 15) {
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
          } else if (liuxiangpz[index] == 3 && jinkoufx[index] != 15) {
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 4 && jinkoufx[index] != 15) {
            // 人行4
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 5 && jinkoufx[index] != 15) {
            // 左直
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
          } else if (liuxiangpz[index] == 6 && jinkoufx[index] != 15) {
            // 直右
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 7 && jinkoufx[index] != 15) {
            // 通行
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 8 && jinkoufx[index] != 15) {
            // 掉头
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 9 && jinkoufx[index] != 15) {
            // 左掉头
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 10 && jinkoufx[index] != 15) {
            // 人行10
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 11 && jinkoufx[index] != 15) {
            // 人行11
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 12 && jinkoufx[index] != 15) {
            // 非机动车左
            // 非机动车信号灯背景
            fjdcdObject.zuoNum++;
            cirDis = fjdcdCirDis(fjdcdObject.zuoNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 1, byMovementsState[p]);
          } else if (liuxiangpz[index] == 13 && jinkoufx[index] != 15) {
            // 非机动车直
            // 非机动车信号灯背景
            fjdcdObject.zhiNum++;
            cirDis = fjdcdCirDis(fjdcdObject.zhiNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 2, byMovementsState[p]);
          } else if (liuxiangpz[index] == 14 && jinkoufx[index] != 15) {
            // 非机动车左直
            // 非机动车信号灯背景
            fjdcdObject.zzNum++;
            cirDis = fjdcdCirDis(fjdcdObject.zzNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 3, byMovementsState[p]);
          }
        }
      }
      // 根据实时信息绘制待转区
      var n = qcanvasid.indexOf(myCanvas);
      if (showtype != 3 && showtype != 8) {
        if (n != -1 && qdzwmsg[n] != "") {
          var dzqmsg = qdzwmsg[n].split(";");
          for (var j = 0; j < jkid.length; j++) {
            for (var d = 0; d < dzqmsg.length; d++) {
              var jkmsg = dzqmsg[d].split("|");
              if (jkid[j] == parseInt(jkmsg[0])) {
                drawdzqshow(j, parseInt(jkmsg[1]), 1);
              }
            }
          }
        }
      }
    }
    // ----------------
  } else if (lkmxtype == 1) {
    if (pzjd.length == 2) {
      for (var p = 0; p < pzjd.length; p++) {
        var z = 0;
        if (p == 0) {
          z = 1;
        } else if (p == 1) {
          z = 0;
        }
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length == 3) {
      for (var p = 0; p < pzjd.length; p++) {
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length == 4) {
      for (var p = 0; p < pzjd.length; p++) {
        // 背景
        trafficlightbg(trafficlightpzjd[p], trafficlightx[p], trafficlighty[p], leftlightx[p], leftlighty[p], zhixinglightx[p], zhixinglighty[p], rightlightx[p], rightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(1);
      }
    } else if (pzjd.length > 4) {
    }
    if (pzjd.length < 5) {
      // 判断哪几个路口有非机动车流向 绘制非机动车白色背景
      fjdcWhiteBg(liuxiangpz, jinkouid, jkid, rightlightx, rightlighty, trafficlightpzjd);
      // 父路口-非机动车道3种类型绘制次数
      var fjdcdObjectf = {
        zuoNum: 0, // 左
        zhiNum: 0, // 直
        zzNum: 0 // 左直
      };
      // 根据流向信息画红绿灯
      for (var p = 0; p < byMovementsState.length; p++) {
        var index = liuxianghao.indexOf(p + 1);
        if (index == -1) {
          continue;
        }
        var color = "";
        if (byMovementsState[p] == 0) {
          color = "#ADADAD";
        } else if (byMovementsState[p] == 1) {
          color = "red";
        } else if (byMovementsState[p] == 2) {
          color = "yellow";
        } else if (byMovementsState[p] == 3) {
          color = "#00EC00";
        }
        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (iscontrl[index] == 1 && liuxianghao.indexOf(p + 1) != -1 && typeof (jinkouid[index]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < jkid.length; j++) {
            if (jinkouid[index] == jkid[j]) {
              q = j;
            }
          }
          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (liuxiangpz[index] == 1 && jinkoufx[index] != 15) {
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 2 && jinkoufx[index] != 15) {
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
          } else if (liuxiangpz[index] == 3 && jinkoufx[index] != 15) {
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 4 && jinkoufx[index] != 15) {
            // 人行4
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 5 && jinkoufx[index] != 15) {
            // 左直
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
          } else if (liuxiangpz[index] == 6 && jinkoufx[index] != 15) {
            // 直右
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 7 && jinkoufx[index] != 15) {
            // 通行
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
            // 直行
            trafficolorlightzhixing(trafficlightpzjd[q], zhixinglightx[q], zhixinglighty[q], color);
            // 右转
            trafficolorlightright(trafficlightpzjd[q], rightlightx[q], rightlighty[q], color);
          } else if (liuxiangpz[index] == 8 && jinkoufx[index] != 15) {
            // 掉头
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 9 && jinkoufx[index] != 15) {
            // 左掉头
            // 左转
            trafficolorlightleft(trafficlightpzjd[q], leftlightx[q], leftlighty[q], color);
          } else if (liuxiangpz[index] == 10 && jinkoufx[index] != 15) {
            // 人行10
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 11 && jinkoufx[index] != 15) {
            // 人行11
            if (q == 0) {
              for (var z = 0; z < footlight1x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight1x[z], footlight1y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight1x[z], footlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < footlight2x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight2x[z], footlight2y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight2x[z], footlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < footlight3x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight3x[z], footlight3y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight3x[z], footlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < footlight4x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight4x[z], footlight4y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight4x[z], footlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < footlight5x.length; z++) {
                if (byMovementsState[p] == 1 || byMovementsState[p] == 0) {
                  footlightstop(footlight5x[z], footlight5y[z], byMovementsState[p]);
                } else if (byMovementsState[p] == 3 || byMovementsState[p] == 2) {
                  footlightgo(footlight5x[z], footlight5y[z]);
                }
              }
            }
          } else if (liuxiangpz[index] == 12 && jinkoufx[index] != 15) {
            // 非机动车左
            // 非机动车信号灯背景
            fjdcdObjectf.zuoNum++;
            cirDis = fjdcdCirDis(fjdcdObjectf.zuoNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 1, byMovementsState[p]);
          } else if (liuxiangpz[index] == 13 && jinkoufx[index] != 15) {
            // 非机动车直
            // 非机动车信号灯背景
            fjdcdObjectf.zhiNum++;
            cirDis = fjdcdCirDis(fjdcdObjectf.zhiNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 2, byMovementsState[p]);
          } else if (liuxiangpz[index] == 14 && jinkoufx[index] != 15) {
            // 非机动车左直
            // 非机动车信号灯背景
            fjdcdObjectf.zzNum++;
            cirDis = fjdcdCirDis(fjdcdObjectf.zzNum);
            fjdclightbg(cirDis, trafficlightpzjd[q], rightlightx[q], rightlighty[q], 3, byMovementsState[p]);
          }
        }
      }
      // 根据实时信息绘制待转区
      var n = qcanvasid.indexOf(myCanvas);
      if (showtype != 3 && showtype != 8) {
        if (n != -1 && qdzwmsg[n] != "") {
          var dzqmsg = qdzwmsg[n].split(";");
          for (var j = 0; j < jkid.length; j++) {
            for (var d = 0; d < dzqmsg.length; d++) {
              var jkmsg = dzqmsg[d].split("|");
              if (jkid[j] == parseInt(jkmsg[0])) {
                drawdzqshow(j, parseInt(jkmsg[1]), 1);
              }
            }
          }
        }
      }
    }
    // 绘制子路口红绿灯------------------------
    if (Cpzjd.length == 2) {
      for (var p = 0; p < Cpzjd.length; p++) {
        var z = 0;
        if (p == 0) {
          z = 1;
        } else if (p == 1) {
          z = 0;
        }
        // 背景
        trafficlightbg(Ctrafficlightpzjd[p], Ctrafficlightx[p], Ctrafficlighty[p], Cleftlightx[p], Cleftlighty[p], Czhixinglightx[p], Czhixinglighty[p], Crightlightx[p], Crightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(2);
      }
    } else if (Cpzjd.length == 3) {
      for (var p = 0; p < Cpzjd.length; p++) {
        // 背景
        trafficlightbg(Ctrafficlightpzjd[p], Ctrafficlightx[p], Ctrafficlighty[p], Cleftlightx[p], Cleftlighty[p], Czhixinglightx[p], Czhixinglighty[p], Crightlightx[p], Crightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(2);
      }
    } else if (Cpzjd.length == 4) {
      for (var p = 0; p < Cpzjd.length; p++) {
        // 背景
        trafficlightbg(Ctrafficlightpzjd[p], Ctrafficlightx[p], Ctrafficlighty[p], Cleftlightx[p], Cleftlighty[p], Czhixinglightx[p], Czhixinglighty[p], Crightlightx[p], Crightlighty[p]);

        // 画人行灯黑色背景
        drawfootbg(2);
      }
    } else if (Cpzjd.length > 4) {
    }
    if (Cpzjd.length < 5) {
      // 判断哪几个路口有非机动车流向 绘制非机动车白色背景
      fjdcWhiteBg(Cliuxiangpz, Cjinkouid, Cjkid, Crightlightx, Crightlighty, Ctrafficlightpzjd);
      // 子路口-非机动车道3种类型绘制次数
      var fjdcdObjectz = {
        zuoNum: 0, // 左
        zhiNum: 0, // 直
        zzNum: 0 // 左直
      };
      // 根据流向信息画红绿灯
      for (var p = 0; p < CbyMovementsState.length; p++) {
        var xuhao = -1;
        for (var s = 0; s < Cliuxianghao.length; s++) {
          if (Cliuxianghao[s] == p + 1) {
            xuhao = s;
            break;
          }
        }
        if (xuhao == -1) { // 过滤掉父路口的
          continue;
        }
        var color = "";
        if (CbyMovementsState[p] == 0) {
          color = "#ADADAD";
        } else if (CbyMovementsState[p] == 1) {
          color = "red";
        } else if (CbyMovementsState[p] == 2) {
          color = "yellow";
        } else if (CbyMovementsState[p] == 3) {
          color = "#00EC00";
        }

        // 对比特征参数该流向是否参与控制 1为参加 0为不参加
        if (Ciscontrl[xuhao] == 1 && typeof (Cjinkouid[xuhao]) !== "undefined") {
          // 判断哪个进口
          var q = 0;
          for (var j = 0; j < Cjkid.length; j++) {
            if (Cjinkouid[xuhao] == Cjkid[j]) {
              q = j;
            }
          }
          // liuxiangpz[p] 1:左,2:直,3:右,4:人行,5:左直,6:直右,7:通行,8:掉头,9:左掉头,10:人行1,11:人行2 12：非机动车左13非机动车直  14非机动车左直
          if (Cliuxiangpz[xuhao] == 1 && Cjinkoufx[xuhao] != 15) {
            // 左转
            trafficolorlightleft(Ctrafficlightpzjd[q], Cleftlightx[q], Cleftlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 2 && Cjinkoufx[xuhao] != 15) {
            // 直行
            trafficolorlightzhixing(Ctrafficlightpzjd[q], Czhixinglightx[q], Czhixinglighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 3 && Cjinkoufx[xuhao] != 15) {
            // 右转
            trafficolorlightright(Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 4 && Cjinkoufx[xuhao] != 15) {
            // 人行4
            if (q == 0) {
              for (var z = 0; z < Cfootlight1x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight1x[z], Cfootlight1y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight1x[z], Cfootlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < Cfootlight2x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight2x[z], Cfootlight2y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight2x[z], Cfootlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < Cfootlight3x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight3x[z], Cfootlight3y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight3x[z], Cfootlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < Cfootlight4x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight4x[z], Cfootlight4y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight4x[z], Cfootlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < Cfootlight5x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight5x[z], Cfootlight5y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight5x[z], Cfootlight5y[z]);
                }
              }
            }
          } else if (Cliuxiangpz[xuhao] == 5 && Cjinkoufx[xuhao] != 15) {
            // 左直
            // 左转
            trafficolorlightleft(Ctrafficlightpzjd[q], Cleftlightx[q], Cleftlighty[q], color);
            // 直行
            trafficolorlightzhixing(Ctrafficlightpzjd[q], Czhixinglightx[q], Czhixinglighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 6 && Cjinkoufx[xuhao] != 15) {
            // 直右
            // 直行
            trafficolorlightzhixing(Ctrafficlightpzjd[q], Czhixinglightx[q], Czhixinglighty[q], color);
            // 右转
            trafficolorlightright(Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 7 && Cjinkoufx[xuhao] != 15) {
            // 通行
            // 左转
            trafficolorlightleft(Ctrafficlightpzjd[q], Cleftlightx[q], Cleftlighty[q], color);
            // 直行
            trafficolorlightzhixing(Ctrafficlightpzjd[q], Czhixinglightx[q], Czhixinglighty[q], color);
            // 右转
            trafficolorlightright(Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 8 && Cjinkoufx[xuhao] != 15) {
            // 掉头
            // 左转
            trafficolorlightleft(Ctrafficlightpzjd[q], Cleftlightx[q], Cleftlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 9 && Cjinkoufx[xuhao] != 15) {
            // 左掉头
            // 左转
            trafficolorlightleft(Ctrafficlightpzjd[q], Cleftlightx[q], Cleftlighty[q], color);
          } else if (Cliuxiangpz[xuhao] == 10 && Cjinkoufx[xuhao] != 15) {
            // 人行10
            if (q == 0) {
              for (var z = 0; z < Cfootlight1x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight1x[z], Cfootlight1y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight1x[z], Cfootlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < Cfootlight2x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight2x[z], Cfootlight2y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight2x[z], Cfootlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < Cfootlight3x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight3x[z], Cfootlight3y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight3x[z], Cfootlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < Cfootlight4x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight4x[z], Cfootlight4y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight4x[z], Cfootlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < Cfootlight5x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight5x[z], Cfootlight5y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight5x[z], Cfootlight5y[z]);
                }
              }
            }
          } else if (Cliuxiangpz[xuhao] == 11 && Cjinkoufx[xuhao] != 15) {
            // 人行11
            if (q == 0) {
              for (var z = 0; z < Cfootlight1x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight1x[z], Cfootlight1y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight1x[z], Cfootlight1y[z]);
                }
              }
            } else if (q == 1) {
              for (var z = 0; z < Cfootlight2x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight2x[z], Cfootlight2y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight2x[z], Cfootlight2y[z]);
                }
              }
            } else if (q == 2) {
              for (var z = 0; z < Cfootlight3x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight3x[z], Cfootlight3y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight3x[z], Cfootlight3y[z]);
                }
              }
            } else if (q == 3) {
              for (var z = 0; z < Cfootlight4x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight4x[z], Cfootlight4y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight4x[z], Cfootlight4y[z]);
                }
              }
            } else if (q == 4) {
              for (var z = 0; z < Cfootlight5x.length; z++) {
                if (CbyMovementsState[p] == 1 || CbyMovementsState[p] == 0) {
                  footlightstop(Cfootlight5x[z], Cfootlight5y[z], CbyMovementsState[p]);
                } else if (CbyMovementsState[p] == 3 || CbyMovementsState[p] == 2) {
                  footlightgo(Cfootlight5x[z], Cfootlight5y[z]);
                }
              }
            }
          } else if (Cliuxiangpz[xuhao] == 12 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左
            // 非机动车信号灯背景
            fjdcdObjectz.zuoNum++;
            cirDis = fjdcdCirDis(fjdcdObjectz.zuoNum);
            fjdclightbg(cirDis, Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], 1, CbyMovementsState[p]);
          } else if (Cliuxiangpz[xuhao] == 13 && Cjinkoufx[xuhao] != 15) {
            // 非机动车直
            // 非机动车信号灯背景
            fjdcdObjectz.zhiNum++;
            cirDis = fjdcdCirDis(fjdcdObjectz.zhiNum);
            fjdclightbg(cirDis, Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], 2, CbyMovementsState[p]);
          } else if (Cliuxiangpz[xuhao] == 14 && Cjinkoufx[xuhao] != 15) {
            // 非机动车左直
            // 非机动车信号灯背景
            fjdcdObjectz.zzNum++;
            cirDis = fjdcdCirDis(fjdcdObjectz.zzNum);
            fjdclightbg(cirDis, Ctrafficlightpzjd[q], Crightlightx[q], Crightlighty[q], 3, CbyMovementsState[p]);
          }
        }
      }

      // 根据实时信息绘制待转区//rrr
      var n = qcanvasid.indexOf(myCanvas);
      if (showtype != 3 && showtype != 8) {
        if (n != -1 && Cqdzwmsg[n] != "") {
          var dzqmsg = Cqdzwmsg[n].split(";");
          for (var j = 0; j < Cjkid.length; j++) {
            for (var d = 0; d < dzqmsg.length; d++) {
              var jkmsg = dzqmsg[d].split("|");
              if (Cjkid[j] == parseInt(jkmsg[0])) {
                drawdzqshow(j, parseInt(jkmsg[1]), 2);
              }
            }
          }
        }
      }
    }
    // ------------------
  }
}

// 绘制待转区信息+鼠标移动事件
function drawdzqshow(t, types, fzlktype) {
  var colors = "";
  if (types == 0) {
    colors = "#ADADAD";
  } else if (types == 1) {
    colors = "#E1E100";
  } else if (types == 2) {
    colors = "#00EC00";
  } else if (types == 3) {
    colors = "#00EC00";
  } else if (types == 4) {
    colors = "#FF0000";
  }
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  if (fzlktype == 1) { // 普通路口
    cxt4.fillStyle = colors;
    cxt4.beginPath();
    cxt4.moveTo(dzqpoint1x[t], dzqpoint1y[t]);
    cxt4.lineTo(dzqpoint2x[t], dzqpoint2y[t]);
    cxt4.lineTo(dzqpoint3x[t], dzqpoint3y[t]);
    cxt4.lineTo(dzqpoint4x[t], dzqpoint4y[t]);
    cxt4.lineTo(dzqpoint1x[t], dzqpoint1y[t]);
    cxt4.closePath();
    cxt4.fill();
  } else if (fzlktype == 2) { // 父子路口
    cxt4.fillStyle = colors;
    cxt4.beginPath();
    cxt4.moveTo(Cdzqpoint1x[t], Cdzqpoint1y[t]);
    cxt4.lineTo(Cdzqpoint2x[t], Cdzqpoint2y[t]);
    cxt4.lineTo(Cdzqpoint3x[t], Cdzqpoint3y[t]);
    cxt4.lineTo(Cdzqpoint4x[t], Cdzqpoint4y[t]);
    cxt4.lineTo(Cdzqpoint1x[t], Cdzqpoint1y[t]);
    cxt4.closePath();
    cxt4.fill();
  }

  // 鼠标事件
  document.getElementById(myCanvas).onmousemove = function() {
    var p = getEventPosition(event);
    var idobj = event.srcElement;
    var canvasid = "";
    if (isIE8()) {
      canvasid = idobj.parentElement.id;// ie8
    } else {
      canvasid = idobj.id;// ie9或其他不支持火狐
    }
    for (var i = 0; i < qcanvasid.length; i++) {
      if (qcanvasid[i] == canvasid) {
        // showtype类型
        showtype = qtype[i];
        // 格式化路口模型数据
        gshdata(qinitdata[i]);
        // 初始化特征参数信息
        inittzcsdata(qtzcsdata[i]);
        // 格式化相邻路口数据
        nearlkdata(qnearlkdata[i]);
        // 格式化可变车道信息
        initkbcddata(qinitkbcddatas[i]);
        // 初始化路口模型
        lkmxinit(qtype[i], canvasid);
        // 1画道路边线
        lkmxroadline();
        // 计算路口模型点位数据
        drawlkmxdata(i);
        // 显示待转区信息
        showdzqmsg(canvasid, p.x, p.y);
      }
    }
  };
}

// 显示待转区信息
function showdzqmsg(canvasid, x, y) {
  var dqznum = decisionFocusDZQ(pzjd, 1, x, y);
  deawWaitingArea(canvasid, dqznum, dzqpoint1x, dzqpoint1y);
  // 判断是否存在父子路口
  if (lkmxtype == 1) {
    // 绘制子路口待转去点击事件
    var Cdqznum = decisionFocusDZQ(Cpzjd, lkmxtype, x, y);
    // 根据实时信息绘制待转区
    deawWaitingArea(canvasid, Cdqznum, Cdzqpoint1x, Cdzqpoint1y);
  }
}
// 判断该点是否在待转区区域内
function decisionFocusDZQ(pzjd, lkmxtype, x, y) {
  var dqznum = 10000;
  // 先判断该点是否在待转区区域内
  for (var t = 0; t < pzjd.length; t++) {
    var xiangjiaocount = 0;
    // 计算与每边是否相交
    var result1 = null;
    var result2 = null;
    var result3 = null;
    var result4 = null;
    if (lkmxtype == 1) {
      result1 = isIntersect(centerPointX, centerPointY, x, y, dzqpoint1x[t], dzqpoint1y[t], dzqpoint2x[t], dzqpoint2y[t]);
      result2 = isIntersect(centerPointX, centerPointY, x, y, dzqpoint2x[t], dzqpoint2y[t], dzqpoint3x[t], dzqpoint3y[t]);
      result3 = isIntersect(centerPointX, centerPointY, x, y, dzqpoint3x[t], dzqpoint3y[t], dzqpoint4x[t], dzqpoint4y[t]);
      result4 = isIntersect(centerPointX, centerPointY, x, y, dzqpoint4x[t], dzqpoint4y[t], dzqpoint1x[t], dzqpoint1y[t]);
    } else {
      result1 = isIntersect(CcenterPointX, CcenterPointY, x, y, Cdzqpoint1x[t], Cdzqpoint1y[t], Cdzqpoint2x[t], Cdzqpoint2y[t]);
      result2 = isIntersect(CcenterPointX, CcenterPointY, x, y, Cdzqpoint2x[t], Cdzqpoint2y[t], Cdzqpoint3x[t], Cdzqpoint3y[t]);
      result3 = isIntersect(CcenterPointX, CcenterPointY, x, y, Cdzqpoint3x[t], Cdzqpoint3y[t], Cdzqpoint4x[t], Cdzqpoint4y[t]);
      result4 = isIntersect(CcenterPointX, CcenterPointY, x, y, Cdzqpoint4x[t], Cdzqpoint4y[t], Cdzqpoint1x[t], Cdzqpoint1y[t]);
    }

    // 计算交点个数
    if (result1) {
      xiangjiaocount = xiangjiaocount + 1;
    }
    if (result2) {
      xiangjiaocount = xiangjiaocount + 1;
    }
    if (result3) {
      xiangjiaocount = xiangjiaocount + 1;
    }
    if (result4) {
      xiangjiaocount = xiangjiaocount + 1;
    }

    // 判断是否在区域中
    if (xiangjiaocount == 1) {
      dqznum = t;
    }
  }
  return dqznum;
}
// 根据实时信息绘制待转区
function deawWaitingArea(canvasid, dqznum, dzqpoint1x, dzqpoint1y) {
  // 根据实时信息绘制待转区
  var typ1 = 0;
  var n = qcanvasid.indexOf(myCanvas);
  if (showtype != 3 && showtype != 7) {
    if (n != -1) {
      var dzqmsg = qdzwmsg[n].split(";");
      for (var d = 0; d < dzqmsg.length; d++) {
        var jkmsg = dzqmsg[d].split("|");
        if (jkid[dqznum] == parseInt(jkmsg[0])) {
          typ1 = parseInt(jkmsg[1]);
        }
      }
    }
  }
  var msg = "";
  var colormsg = "";
  if (typ1 == 0) {
    msg = "";
    colormsg = "#ADADAD";
  } else if (typ1 == 1) {
    msg = "路口遇堵不得进入";
    colormsg = "#E1E100";
  } else if (typ1 == 2) {
    msg = "直行车辆进入待转区";
    colormsg = "#00EC00";
  } else if (typ1 == 3) {
    msg = "左转车辆进入待转区";
    colormsg = "#00EC00";
  } else if (typ1 == 4) {
    msg = "关灯";
    colormsg = "#FF0000";
  }

  if (dqznum != 10000) {
    var w = 0;
    var h = 0;
    var c61 = document.getElementById(canvasid);
    var cxt61 = c61.getContext("2d");
    cxt61.fillStyle = colormsg;
    cxt61.font = namesize * 0.4 + "px Arial";
    cxt61.beginPath();
    // w = cxt61.measureText(msg).width;
    w = 95;
    h = cxt61.measureText(msg).width / msg.length + 8;
    cxt61.closePath();

    var c4 = document.getElementById(canvasid);
    var cxt4 = c4.getContext("2d");
    cxt4.fillStyle = "#222e3e";
    cxt4.beginPath();
    cxt4.moveTo(dzqpoint1x[dqznum] - tdkd / 2, dzqpoint1y[dqznum] - tdkd / 3);// 1
    cxt4.lineTo(dzqpoint1x[dqznum] - tdkd / 2, dzqpoint1y[dqznum] - tdkd / 3 - h);// 2左1
    cxt4.lineTo(dzqpoint1x[dqznum] - tdkd / 2 + w, dzqpoint1y[dqznum] - tdkd / 3 - h);// 3左2
    cxt4.lineTo(dzqpoint1x[dqznum] - tdkd / 2 + w, dzqpoint1y[dqznum] - tdkd / 3);// 4
    cxt4.lineTo(dzqpoint1x[dqznum] - tdkd / 2, dzqpoint1y[dqznum] - tdkd / 3);// 5
    cxt4.closePath();
    cxt4.fill();

    var c6 = document.getElementById(canvasid);
    var cxt6 = c6.getContext("2d");
    cxt6.fillStyle = colormsg;
    cxt6.font = namesize * 0.4 + "px Arial";
    cxt6.beginPath();
    cxt6.fillText(msg, dzqpoint1x[dqznum] - tdkd / 2, dzqpoint1y[dqznum] - tdkd / 3 - 2);
    cxt6.closePath();
  }
}

// 绘制可变车道  实时信息 1 画布ID 2 进口num 3 车道num  4 流向类型 5父子路口类型
function changechedao(canvasid, jknum, lscd, types, fzlktype) {
  var jk = jknum + 1;
  var x = 0;
  var y = 0;
  var lx = types;
  var colors = "#FFA500";
  var jd = 0;
  var cd = tdj[jknum] - lscd - 1;

  if (fzlktype == 0) {
    if (jk == 1) {
      x = jkcdlxzb1x[cd];
      y = jkcdlxzb1y[cd];
    } else if (jk == 2) {
      x = jkcdlxzb2x[cd];
      y = jkcdlxzb2y[cd];
    } else if (jk == 3) {
      x = jkcdlxzb3x[cd];
      y = jkcdlxzb3y[cd];
    } else if (jk == 4) {
      x = jkcdlxzb4x[cd];
      y = jkcdlxzb4y[cd];
    } else if (jk == 5) {
      x = jkcdlxzb5x[cd];
      y = jkcdlxzb5y[cd];
    }
    jd = pzjd[jk - 1];
  } else if (fzlktype == 1) {
    if (jkid.indexOf(jk) != -1) {
      if (jk == 1) {
        x = jkcdlxzb1x[cd];
        y = jkcdlxzb1y[cd];
      } else if (jk == 2) {
        x = jkcdlxzb2x[cd];
        y = jkcdlxzb2y[cd];
      } else if (jk == 3) {
        x = jkcdlxzb3x[cd];
        y = jkcdlxzb3y[cd];
      } else if (jk == 4) {
        x = jkcdlxzb4x[cd];
        y = jkcdlxzb4y[cd];
      } else if (jk == 5) {
        x = jkcdlxzb5x[cd];
        y = jkcdlxzb5y[cd];
      }
      jd = pzjd[jk - 1];
    } else if (Cjkid.indexOf(jk) != -1) {
      var inx = Cjkid.indexOf(jk);
      if (inx == 1) {
        x = Cjkcdlxzb1x[cd];
        y = Cjkcdlxzb1y[cd];
      } else if (inx == 2) {
        x = Cjkcdlxzb2x[cd];
        y = Cjkcdlxzb2y[cd];
      } else if (inx == 3) {
        x = Cjkcdlxzb3x[cd];
        y = Cjkcdlxzb3y[cd];
      } else if (inx == 4) {
        x = Cjkcdlxzb4x[cd];
        y = Cjkcdlxzb4y[cd];
      } else if (inx == 5) {
        x = Cjkcdlxzb5x[cd];
        y = Cjkcdlxzb5y[cd];
      }
      jd = Cpzjd[inx - 1];
    }
  }

  var c71 = document.getElementById(myCanvas);
  var cxt71 = c71.getContext("2d");
  if (lx == 1) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 2) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 3) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 2, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 4) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 5) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 1 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 1 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 6) {
    // 直右转弯
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 2, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 7 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 7) {
    // 通行
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    drawchangecdDashLine(cxt71, tdkd * 5 / 4, tdkd / 2, tdkd * 3 / 4, tdkd - tdkd / 16, 4);
    cxt71.moveTo(tdkd * 3 / 4, tdkd - tdkd / 16);
    cxt71.lineTo(tdkd, tdkd * 7 / 8 - tdkd / 16);
    cxt71.moveTo(tdkd * 3 / 4, tdkd - tdkd / 16);
    cxt71.lineTo(tdkd * 7 / 8, tdkd * 3 / 4 - tdkd / 16);
    drawchangecdDashLine(cxt71, tdkd * 5 / 4, tdkd / 2, tdkd * 3 / 4, 0 + tdkd / 16, 4);
    cxt71.moveTo(tdkd * 3 / 4, 0 + tdkd / 16);
    cxt71.lineTo(tdkd * 7 / 8, tdkd / 4 + tdkd / 16);
    cxt71.moveTo(tdkd * 3 / 4, 0 + tdkd / 16);
    cxt71.lineTo(tdkd, tdkd * 1 / 8 + tdkd / 16);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 8) {
    // 掉头
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 3 / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 9) {
    // 左掉头
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 4, tdkd, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 3 / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  }
}

// 获取可变车道配置结果
export function Getpzkbcd(canvasid) {
  // 找出当前路口的可变车道预设值
  var num = qcanvasid.indexOf(canvasid);
  if (qlkmxtype[num] == 0) {
    return qkbcdsetvalues[num];
  } else if (qlkmxtype[num] == 1) {
    return qkbcdsetvalues[num] + ";" + Cqkbcdsetvalues[num];
  }
}

// 配置页面可变车道 1、画布ID 2 进口num 3、车道num 4、车道流向类型,6.onclick=true-点击可变车道绿点,7-nextxh 可变车道的可变车道牌流向(0:直行 1:左转 2:通行 3:右转)
export function pzchangechedao(canvasid, jk, cdnum, types, fzlktype, onclick, nextxh) {
  var x = 0;
  var y = 0;
  var jd = 0;
  var lx = types;
  var colors = "#FFA500";
  var num = qcanvasid.indexOf(canvasid);
  if (fzlktype == 0) {
    var cd = tdj[jk] - cdnum - 1;
    if (jk == 0) {
      x = jkvolxq1x[cd];
      y = jkvolxq1y[cd];
    } else if (jk == 1) {
      x = jkvolxq2x[cd];
      y = jkvolxq2y[cd];
    } else if (jk == 2) {
      x = jkvolxq3x[cd];
      y = jkvolxq3y[cd];
    } else if (jk == 3) {
      x = jkvolxq4x[cd];
      y = jkvolxq4y[cd];
    } else if (jk == 4) {
      x = jkvolxq5x[cd];
      y = jkvolxq5y[cd];
    }
    jd = pzjd[jk];
    // 先清理流向部分
    var c2 = document.getElementById(canvasid);
    var cxt2 = c2.getContext("2d");
    cxt2.save();
    cxt2.translate(x, y);// 重新映射0.0坐标
    cxt2.rotate((jd) * Math.PI / 180);
    cxt2.beginPath();

    cxt2.moveTo(tdkd * 0.2, 0);
    cxt2.lineTo(tdkd * 2, 0);
    cxt2.lineTo(tdkd * 2, tdkd * 0.9);
    cxt2.lineTo(tdkd * 0.2, tdkd * 0.9);
    cxt2.lineTo(tdkd * 0.2, 0);
    cxt2.lineWidth = 0.2;

    cxt2.fillStyle = loadcolor;
    cxt2.closePath();
    cxt2.fill();
    cxt2.restore();

    // 找出当前路口的可变车道预设值
    // 更新qkbcdsetvalues[num]可变车道预设数据信息
    if (num != -1) {
      if (qkbcdsetvalues[num] == "") {
        // 可变车道预设数据信息
        qkbcdsetvalues[num] = canvasid + "|" + jk + "|" + cdnum + "|" + types;
      } else {
        var lsd = qkbcdsetvalues[num].split(";");
        // 临时可变车道预设数据信息
        var zzdata = "";
        //
        var ischange = 0;
        for (var a = 0; a < lsd.length; a++) {
          var lskbcdsetvalue = "";
          var lskbcd = lsd[a].split("|");
          // 画布ID
          var hbid = parseInt(lskbcd[0]);
          // 进口num
          var jkn = parseInt(lskbcd[1]);
          // 车道num
          var cdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          if (jkn == jk && cdn == cdnum) {
            lskbcdsetvalue = canvasid + "|" + jk + "|" + cdnum + "|" + types;
            ischange = 1;
            if (zzdata == "") {
              zzdata = lskbcdsetvalue;
            } else {
              zzdata = zzdata + ";" + lskbcdsetvalue;
            }
          } else {
            if (zzdata == "") {
              zzdata = lsd[a];
            } else {
              zzdata = zzdata + ";" + lsd[a];
            }
          }
        }
        if (ischange == 0) {
          if (zzdata == "") {
            zzdata = canvasid + "|" + jk + "|" + cdnum + "|" + types;
          } else {
            zzdata = zzdata + ";" + canvasid + "|" + jk + "|" + cdnum + "|" + types;
          }
        }
        qkbcdsetvalues[num] = zzdata;
      }
    }
  } else if (fzlktype == 1) {
    var is_fzjk = 0;// 可变车道的进口在父路口还是子路口
    // 由于是父子路口，先找到此进口属于父路口还是子路口
    if (jkid.indexOf(jk + 1) != -1) { // 父路口
      var cd = tdj[jk] - cdnum - 1;
      if (jk == 0) {
        x = jkvolxq1x[cd];
        y = jkvolxq1y[cd];
      } else if (jk == 1) {
        x = jkvolxq2x[cd];
        y = jkvolxq2y[cd];
      } else if (jk == 2) {
        x = jkvolxq3x[cd];
        y = jkvolxq3y[cd];
      } else if (jk == 3) {
        x = jkvolxq4x[cd];
        y = jkvolxq4y[cd];
      } else if (jk == 4) {
        x = jkvolxq5x[cd];
        y = jkvolxq5y[cd];
      }
      jd = pzjd[jk];
    } else if (Cjkid.indexOf(jk + 1) != -1) { // 子路口
      var inx = Cjkid.indexOf(jk + 1);
      is_fzjk = 1;
      var cd = Ctdj[inx] - cdnum - 1;
      if (inx == 0) {
        x = Cjkvolxq1x[cd];
        y = Cjkvolxq1y[cd];
      } else if (inx == 1) {
        x = Cjkvolxq2x[cd];
        y = Cjkvolxq2y[cd];
      } else if (inx == 2) {
        x = Cjkvolxq3x[cd];
        y = Cjkvolxq3y[cd];
      } else if (inx == 3) {
        x = Cjkvolxq4x[cd];
        y = Cjkvolxq4y[cd];
      } else if (inx == 4) {
        x = Cjkvolxq5x[cd];
        y = Cjkvolxq5y[cd];
      }
      jd = Cpzjd[inx];
    }

    // 先清理流向部分
    var c2 = document.getElementById(canvasid);
    var cxt2 = c2.getContext("2d");
    cxt2.save();
    cxt2.translate(x, y);// 重新映射0.0坐标
    cxt2.rotate((jd) * Math.PI / 180);
    cxt2.beginPath();
    cxt2.moveTo(tdkd * 0.2, 0);
    cxt2.lineTo(tdkd * 2, 0);
    cxt2.lineTo(tdkd * 2, tdkd * 0.9);
    cxt2.lineTo(tdkd * 0.2, tdkd * 0.9);
    cxt2.lineTo(tdkd * 0.2, 0);

    cxt2.lineWidth = 0.2;
    cxt2.fillStyle = loadcolor;
    cxt2.closePath();
    cxt2.fill();
    cxt2.restore();

    // 找出当前路口的可变车道预设值
    var num = qcanvasid.indexOf(canvasid);
    // 更新qkbcdsetvalues[num]可变车道预设数据信息
    if (num != -1) {
      var qkbcdsetnew = qkbcdsetvalues[num];
      if (is_fzjk == 1) {
        qkbcdsetnew = Cqkbcdsetvalues[num];
      }
      if (qkbcdsetnew == "") {
        // 可变车道预设数据信息
        if (is_fzjk == 0) {
          qkbcdsetvalues[num] = canvasid + "|" + jk + "|" + cdnum + "|" + types;
        } else {
          Cqkbcdsetvalues[num] = canvasid + "|" + jk + "|" + cdnum + "|" + types;
        }
      } else {
        var lsd = qkbcdsetnew.split(";");
        // 临时可变车道预设数据信息
        var zzdata = "";
        var ischange = 0;
        for (var a = 0; a < lsd.length; a++) {
          var lskbcd = lsd[a].split("|");
          // 画布ID
          var hbid = lskbcd[0];
          // 进口num
          var jkn = parseInt(lskbcd[1]);
          // 车道num
          var cdn = parseInt(lskbcd[2]);
          // 流向类型
          var lsty = parseInt(lskbcd[3]);
          if (jkn == jk && cdn == cdnum) {
            var lskbcdsetvalue = canvasid + "|" + jk + "|" + cdnum + "|" + types;
            ischange = 1;
            if (zzdata == "") {
              zzdata = lskbcdsetvalue;
            } else {
              zzdata = zzdata + ";" + lskbcdsetvalue;
            }
          } else {
            if (zzdata == "") {
              zzdata = lsd[a];
            } else {
              zzdata = zzdata + ";" + lsd[a];
            }
          }
        }
        if (ischange == 0) {
          if (zzdata == "") {
            zzdata = canvasid + "|" + jk + "|" + cdnum + "|" + types;
          } else {
            zzdata = zzdata + ";" + canvasid + "|" + jk + "|" + cdnum + "|" + types;
          }
        }
        if (is_fzjk == 0) {
          qkbcdsetvalues[num] = zzdata;
        } else {
          Cqkbcdsetvalues[num] = zzdata;
        }
      }
    }
  }
  if (onclick) { // 获取可变车道数据，不可重复的,判断可变车道是否参与控制
    try { // 如果get_kbcd_set_data是个函数
      var new_select_data = [];
      if (typeof (eval("get_kbcd_set_data") == "function")) {
        new_select_data = get_kbcd_set_data();// 特征参数配置页面由于从页面获取数据，所以走特征参数页面js里的方法
      } else {
        new_select_data = get_kbcd_set_data_byNoEdit();// 单点监控是从接口获取数据，所以走本js公共方法
      }
      var kbcd_flag = false;// 未找到勾选的可变车道
      for (var k = 0; k < new_select_data.length; k++) {
        var kbcdArr = new_select_data[k].split("$5$");
        if (kbcdArr[2] == jk + 1 && kbcdArr[3] == cdnum + 1) {
          kbcd_flag = true;
          break;
        }
      }
      if (!kbcd_flag) {
        notify("进口名称" + (jk + 1) + "的车道" + (cdnum + 1) + "(可变车道)在流向标签中没有参与控制！", "warn");
        return;
      }
    } catch (e) {
    }
  }

  var c71 = document.getElementById(canvasid);
  var cxt71 = c71.getContext("2d");
  // 绘制可变车道流向信息
  if (lx == 1) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 2) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 3) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 2, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 4) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 5) {
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 1 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 1 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 6) {
    // 直右转弯
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 2, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 7 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 7) {
    // 通行
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 2, tdkd / 2, tdkd / 2, 4);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd / 2, tdkd / 2);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    drawchangecdDashLine(cxt71, tdkd * 5 / 4, tdkd / 2, tdkd * 3 / 4, tdkd - tdkd / 16, 4);
    cxt71.moveTo(tdkd * 3 / 4, tdkd - tdkd / 16);
    cxt71.lineTo(tdkd, tdkd * 7 / 8 - tdkd / 16);
    cxt71.moveTo(tdkd * 3 / 4, tdkd - tdkd / 16);
    cxt71.lineTo(tdkd * 7 / 8, tdkd * 3 / 4 - tdkd / 16);
    drawchangecdDashLine(cxt71, tdkd * 5 / 4, tdkd / 2, tdkd * 3 / 4, 0 + tdkd / 16, 4);
    cxt71.moveTo(tdkd * 3 / 4, 0 + tdkd / 16);
    cxt71.lineTo(tdkd * 7 / 8, tdkd / 4 + tdkd / 16);
    cxt71.moveTo(tdkd * 3 / 4, 0 + tdkd / 16);
    cxt71.lineTo(tdkd, tdkd * 1 / 8 + tdkd / 16);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 8) {
    // 掉头
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd * 2, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 3 / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 9) {
    // 左掉头
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    drawchangecdDashLine(cxt71, tdkd * 2, tdkd / 4, tdkd, tdkd / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    drawchangecdDashLine(cxt71, tdkd, tdkd / 4, tdkd, tdkd * 3 / 4, 4);
    drawchangecdDashLine(cxt71, tdkd, tdkd * 3 / 4, tdkd * 3 / 2, tdkd * 3 / 4, 4);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    cxt71.strokeStyle = colors;
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  }
  // 可变车道改变发送消息
  GetSingal("2|" + jk + "|" + cdnum + "|" + types + "|" + nextxh);
}

// 画虚线
function drawchangecdDashLine(context, x1, y1, x2, y2, dashLen) {
  dashLen = dashLen === undefined ? 5 : dashLen;
  // 得到斜边的总长度
  var beveling = getBeveling(x2 - x1, y2 - y1);
  // 计算有多少个线段
  var num = Math.floor(beveling / dashLen);

  for (var i = 0; i < num; i++) {
    if (i % 2 == 1) {
      context.moveTo(x1 + (x2 - x1) / num * (i - 1), y1 + (y2 - y1) / num * (i - 1));
      context.lineTo(x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i);
    }
  }
  context.strokeStyle = "#FFA500";
  context.lineWidth = 2;
  context.stroke();
}

// 左转向灯
function trafficolorlightleft(jd, x, y, color) {
  // 左转灯
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd);
  cxt4.fillStyle = color;
  cxt4.beginPath();
  cxt4.moveTo(tdkd / 3, tdkd / 3 / 5);// 1
  cxt4.lineTo(tdkd * 2 / 3 / 5 - tdkd / 3 / 10, tdkd / 3 - tdkd / 3 / 6 - tdkd / 3 / 15);// 2左1
  cxt4.lineTo(tdkd * 2 / 3 / 5 - tdkd / 3 / 10, tdkd / 3 + tdkd / 3 / 5 - tdkd / 3 / 15);// 3左2
  cxt4.lineTo(tdkd / 3 - tdkd / 3 / 6, tdkd * 4 / 3 / 5 - tdkd / 3 / 15);// 4
  cxt4.lineTo(tdkd / 3 - tdkd / 3 / 6, tdkd * 8 / 3 / 5);// 5
  cxt4.lineTo(tdkd / 3 + tdkd / 3 / 6, tdkd * 8 / 3 / 5);// 6
  cxt4.lineTo(tdkd / 3 + tdkd / 3 / 6, tdkd * 4 / 3 / 5 - tdkd / 3 / 15);// 7
  cxt4.lineTo(tdkd * 8 / 3 / 5 + tdkd / 3 / 10, tdkd / 3 + tdkd / 3 / 5 - tdkd / 3 / 15);// 8右2
  cxt4.lineTo(tdkd * 8 / 3 / 5 + tdkd / 3 / 10, tdkd / 3 - tdkd / 3 / 6 - tdkd / 3 / 15);// 9右1
  cxt4.lineTo(tdkd / 3, tdkd / 3 / 5);// 1
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 右转向灯
function trafficolorlightright(jd, x, y, color) {
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd);
  cxt4.fillStyle = color;
  cxt4.beginPath();
  cxt4.moveTo(tdkd / 3, tdkd * 9 / 3 / 5 - tdkd / 3 / 15);// 1
  cxt4.lineTo(tdkd * 2 / 3 / 5 - tdkd / 3 / 10, tdkd / 3 + tdkd / 3 / 6 + tdkd / 3 / 15);// 2左1
  cxt4.lineTo(tdkd * 2 / 3 / 5 - tdkd / 3 / 10, tdkd / 3 - tdkd / 3 / 5 + tdkd / 3 / 15);// 3左2
  cxt4.lineTo(tdkd / 3 - tdkd / 3 / 6, tdkd * 6 / 3 / 5 + tdkd / 3 / 15);// 4
  cxt4.lineTo(tdkd / 3 - tdkd / 3 / 6, tdkd * 2 / 3 / 5);// 5
  cxt4.lineTo(tdkd / 3 + tdkd / 3 / 6, tdkd * 2 / 3 / 5);// 6
  cxt4.lineTo(tdkd / 3 + tdkd / 3 / 6, tdkd * 6 / 3 / 5 + tdkd / 3 / 15);// 7
  cxt4.lineTo(tdkd * 8 / 3 / 5 + tdkd / 3 / 10, tdkd / 3 - tdkd / 3 / 5 + tdkd / 3 / 15);// 8右2
  cxt4.lineTo(tdkd * 8 / 3 / 5 + tdkd / 3 / 10, tdkd / 3 + tdkd / 3 / 6 + tdkd / 3 / 15);// 9右1
  cxt4.lineTo(tdkd / 3, tdkd * 9 / 3 / 5 - tdkd / 3 / 15);// 1
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 人行灯通行绿灯
function footlightgo(x, y) {
  var c71 = document.getElementById(myCanvas);
  var cxt71 = c71.getContext("2d");
  cxt71.fillStyle = "#000000";
  cxt71.beginPath();
  cxt71.arc(x, y, tdkd / 4, 0, Math.PI * 2);
  cxt71.closePath();
  cxt71.fill();
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(0 * Math.PI / 180);
  cxt4.fillStyle = "#00EC00";
  cxt4.beginPath();
  cxt4.moveTo(0, -tdkd / 4);
  cxt4.lineTo(-tdkd * 3 / 64, -tdkd / 4 + tdkd / 64);
  cxt4.lineTo(-tdkd / 32, -tdkd * 6 / 32);
  cxt4.lineTo(-tdkd / 64, -tdkd * 6 / 32);
  cxt4.lineTo(-tdkd / 64, -tdkd * 11 / 64);
  cxt4.lineTo(-tdkd * 3 / 64, -tdkd * 10 / 64);
  cxt4.lineTo(-tdkd * 3 / 32, -tdkd * 5 / 64);
  cxt4.lineTo(-tdkd * 11 / 64, -tdkd / 32);
  cxt4.lineTo(-tdkd * 9 / 64, -tdkd / 64);
  cxt4.lineTo(-tdkd / 16, -tdkd / 16);
  cxt4.lineTo(-tdkd * 3 / 64, -tdkd * 3 / 32);
  cxt4.lineTo(-tdkd / 64, 0);
  cxt4.lineTo(-tdkd * 15 / 128, tdkd * 17 / 128);
  cxt4.lineTo(-tdkd * 9 / 64, tdkd * 17 / 128);
  cxt4.lineTo(-tdkd * 5 / 32, tdkd * 19 / 128);
  cxt4.lineTo(-tdkd * 7 / 64, tdkd * 11 / 64);
  cxt4.lineTo(tdkd / 64, tdkd * 3 / 64);
  cxt4.lineTo(tdkd * 7 / 64, tdkd * 9 / 64);
  cxt4.lineTo(tdkd * 3 / 32, tdkd * 11 / 64);
  cxt4.lineTo(tdkd * 7 / 64, tdkd * 6 / 32);
  cxt4.lineTo(tdkd * 5 / 32, tdkd * 5 / 32);
  cxt4.lineTo(tdkd * 7 / 128, -tdkd / 128);
  cxt4.lineTo(tdkd * 7 / 128, -tdkd * 7 / 64);
  cxt4.lineTo(tdkd * 3 / 32, -tdkd * 2 / 32);
  cxt4.lineTo(tdkd * 7 / 64, tdkd / 64);
  cxt4.lineTo(tdkd * 9 / 64, 0);
  cxt4.lineTo(tdkd * 4 / 32, -tdkd * 3 / 32);
  cxt4.lineTo(tdkd * 2 / 32, -tdkd * 5 / 32);
  cxt4.lineTo(tdkd / 64, -tdkd * 11 / 64);
  cxt4.lineTo(tdkd / 64, -tdkd / 4 + tdkd / 64);
  cxt4.lineTo(0, -tdkd / 4);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 人行灯禁止通行红灯
function footlightstop(x, y, types) {
  var c71 = document.getElementById(myCanvas);
  var cxt71 = c71.getContext("2d");
  cxt71.fillStyle = "#000000";
  cxt71.beginPath();
  cxt71.arc(x, y, tdkd / 4, 0, Math.PI * 2);
  cxt71.closePath();
  cxt71.fill();
  var colors = "";
  if (types == 0) {
    colors = "#ADADAD";
  } else if (types == 1 || types == 2) { // 人行红黄显示红
    colors = "red";
  }
  // 左转灯
  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(0 * Math.PI / 180);
  cxt4.fillStyle = colors;
  cxt4.beginPath();
  cxt4.moveTo(-tdkd / 32, -tdkd / 4 + tdkd / 32);
  cxt4.lineTo(-tdkd / 32 + tdkd / 32 / 4, -tdkd * 7 / 32 + tdkd * 3 / 64);
  cxt4.lineTo(-tdkd * 5 / 64, -tdkd / 4 + tdkd * 3 / 32);
  cxt4.lineTo(-tdkd * 7 / 64, -tdkd / 4 + tdkd * 11 / 64);
  cxt4.lineTo(-tdkd * 3 / 32 - tdkd / 32 / 4, tdkd / 64);
  cxt4.lineTo(-tdkd * 5 / 64, tdkd / 32);
  cxt4.lineTo(-tdkd * 5 / 64, -tdkd * 2 / 32);
  cxt4.lineTo(-tdkd * 2 / 32, -tdkd * 4 / 32);
  cxt4.lineTo(-tdkd / 32 - tdkd / 64, -tdkd / 64);// 9
  cxt4.lineTo(-tdkd * 5 / 64, tdkd * 6 / 32);
  cxt4.arc(-tdkd * 5 / 64, tdkd * 7 / 32, tdkd / 32, Math.PI * 3 / 2, Math.PI, true);
  cxt4.lineTo(-tdkd * 7 / 64 + tdkd * 4 / 64, tdkd * 7 / 32);
  cxt4.lineTo(0, tdkd / 32);
  cxt4.lineTo(tdkd * 7 / 64 - tdkd * 4 / 64, tdkd * 7 / 32);
  cxt4.lineTo(tdkd * 7 / 64, tdkd * 7 / 32);
  cxt4.arc(tdkd * 5 / 64, tdkd * 7 / 32, tdkd / 32, 0, Math.PI * 3 / 2, true);
  cxt4.lineTo(tdkd / 32 + tdkd / 64, tdkd / 64);// -9
  cxt4.lineTo(tdkd * 2 / 32, -tdkd * 4 / 32);
  cxt4.lineTo(tdkd * 5 / 64, -tdkd * 2 / 32);
  cxt4.lineTo(tdkd * 5 / 64, tdkd / 32);
  cxt4.lineTo(tdkd * 3 / 32 + tdkd / 32 / 4, tdkd / 64);
  cxt4.lineTo(tdkd * 7 / 64, -tdkd / 4 + tdkd * 11 / 64);
  cxt4.lineTo(tdkd * 5 / 64, -tdkd / 4 + tdkd * 3 / 32);
  cxt4.lineTo(tdkd / 32 - tdkd / 32 / 4, -tdkd * 7 / 32 + tdkd * 3 / 64);
  cxt4.lineTo(tdkd / 32, -tdkd / 4 + tdkd / 32);
  cxt4.arc(0, -tdkd / 4 + tdkd / 32, tdkd / 32, 0, Math.PI, true);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();
}

// 通行灯
function trafficolorlightzhixing(jd, x, y, color) {
  // 通行灯背景
  var c1 = document.getElementById(myCanvas);
  var cxt1 = c1.getContext("2d");
  cxt1.save();
  cxt1.translate(x, y);
  cxt1.rotate(jd);
  cxt1.fillStyle = color;
  cxt1.beginPath();
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
  cxt1.closePath();
  cxt1.fill();
  cxt1.restore();
}
// 非机动车根据3种类型绘制次数判断圆心基准值（左，直，左直）
function fjdcdCirDis(num) {
  if (num === 1) {
    return tdkd;
  } else if (num === 2) {
    return tdkd * 5 / 3;
  } else if (num === 3) {
    return tdkd * 7 / 3;
  }
}
// 非机动车白色背景
function fjdcWhiteBg(liuxiangData, jinkouidData, jkidData, rightlightxData, rightlightyData, trafficlightpzjdData) {
  var fjdcdNumerArr = [];// 各个进口非机动车灯个数
  for (var j = 0; j < jkidData.length; j++) {
    var fjdcdNumer = 0;// 进口非机动车灯个数
    for (var s = 0; s < liuxiangData.length; s++) {
      if (liuxiangData[s] == 12 || liuxiangData[s] == 13 || liuxiangData[s] == 14) {
        if (jinkouidData[s] == jkidData[j]) {
          fjdcdNumer++;
        }
      }
    }
    fjdcdNumerArr.push(fjdcdNumer);
  }
  // 判断哪几个路口有非机动车流向 绘制非机动车白色背景
  for (var s = 0; s < liuxiangData.length; s++) {
    if (liuxiangData[s] == 12 || liuxiangData[s] == 13 || liuxiangData[s] == 14) {
      var q1 = 0;
      for (var j = 0; j < jkidData.length; j++) {
        if (jinkouidData[s] == jkidData[j]) {
          var fjdcdNumer = fjdcdNumerArr[j];// 进口非机动车灯个数
          var fjcd = tdkd * 5 / 3;
          switch (fjdcdNumer) {
            case 1:
              fjcd = tdkd;
              break;
            case 2:
              fjcd = tdkd * 5 / 3;
              break;
            case 3:
              fjcd = tdkd * 7 / 3;
              break;
          }
          q1 = j;
          var c77 = document.getElementById(myCanvas);
          var cxt77 = c77.getContext("2d");
          cxt77.save();
          cxt77.translate(rightlightxData[q1], rightlightyData[q1]);
          cxt77.rotate(trafficlightpzjdData[q1]);
          cxt77.fillStyle = "#FFFFFF";
          cxt77.beginPath();
          cxt77.arc(tdkd, tdkd / 3, tdkd / 3, Math.PI / 2, Math.PI * 3 / 2);
          cxt77.arc(fjcd, tdkd / 3, tdkd / 3, Math.PI * 3 / 2, Math.PI / 2);
          cxt77.closePath();
          cxt77.fill();
          cxt77.restore();
        }
      }
    }
  }
}
// 非机动车信号灯背景  cirDis为圆心坐标值的基准
function fjdclightbg(cirDis, jd, x2, y2, type, color) {
  var colors = 1;
  if (color == 0 || color == 1) {
    colors = 1;
  } else if (color == 2) {
    colors = 2;
  } else if (color == 3) {
    colors = 3;
  }
  if (type == 1) {
    // 左转灯背景
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    cxt1.fillStyle = "#000000";
    cxt1.beginPath();
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
    cxt1.closePath();
    cxt1.fill();
    cxt1.restore();
    // 左转灯
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    drawzxcleft(cirDis, tdkd / 3, 90, colors);
    cxt1.restore();
  } else if (type == 2) {
    // 直行灯背景
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    cxt1.fillStyle = "#000000";
    cxt1.beginPath();
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
    cxt1.closePath();
    cxt1.fill();
    cxt1.restore();
    // 直行灯
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    drawzxcforward(cirDis, tdkd / 3, 90, colors);
    cxt1.restore();
  } else if (type == 3) {
    // 左直转灯背景
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    cxt1.fillStyle = "#000000";
    cxt1.beginPath();
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
    cxt1.arc(cirDis, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
    cxt1.closePath();
    cxt1.fill();
    cxt1.restore();

    // 左直转灯
    var c1 = document.getElementById(myCanvas);
    var cxt1 = c1.getContext("2d");
    cxt1.save();
    cxt1.translate(x2, y2);
    cxt1.rotate(jd);
    drawzxcleftAndZhi(cirDis, tdkd / 3, 90, colors);
    cxt1.restore();

    // //直行灯背景
    // var c1 = document.getElementById(myCanvas);
    // var cxt1 = c1.getContext("2d");
    // cxt1.save();
    // cxt1.translate(x2, y2);
    // cxt1.rotate(jd);
    // cxt1.fillStyle = "#000000";
    // cxt1.beginPath();
    // cxt1.arc(tdkd * 5 / 3, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
    // cxt1.arc(tdkd * 5 / 3, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
    // cxt1.closePath();
    // cxt1.fill();
    // cxt1.restore();
    // //直行灯
    // var c1 = document.getElementById(myCanvas);
    // var cxt1 = c1.getContext("2d");
    // cxt1.save();
    // cxt1.translate(x2, y2);
    // cxt1.rotate(jd);
    // drawzxcforward(tdkd * 5 / 3, tdkd / 3, 90, colors);
    // cxt1.restore();
  }
}

// 非机动车左转图标
function drawzxcleft(x, y, jd2, color) {
  var col = "#000000";
  if (color == 1) {
    col = "red";
  } else if (color == 2) {
    col = "yellow";
  } else if (color == 3) {
    col = "#00EC00";
  }

  var c = document.getElementById(myCanvas);
  var cxt = c.getContext("2d");
  cxt.save();
  cxt.translate(x, y);
  cxt.rotate(jd2 * Math.PI / 180);
  cxt.fillStyle = col;
  cxt.beginPath();
  cxt.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt.closePath();
  cxt.fill();
  cxt.restore();

  var c2 = document.getElementById(myCanvas);
  var cxt2 = c2.getContext("2d");
  cxt2.save();
  cxt2.translate(x, y);
  cxt2.rotate(jd2 * Math.PI / 180);
  cxt2.fillStyle = "#000000";
  cxt2.beginPath();
  cxt2.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt2.closePath();
  cxt2.fill();
  cxt2.restore();

  var c3 = document.getElementById(myCanvas);
  var cxt3 = c3.getContext("2d");
  cxt3.save();
  cxt3.translate(x, y);
  cxt3.rotate(jd2 * Math.PI / 180);
  cxt3.fillStyle = col;
  cxt3.beginPath();
  cxt3.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt3.closePath();
  cxt3.fill();
  cxt3.restore();

  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd2 * Math.PI / 180);
  cxt4.fillStyle = "#000000";
  cxt4.beginPath();
  cxt4.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();

  var c5 = document.getElementById(myCanvas);
  var cxt5 = c5.getContext("2d");
  cxt5.save();
  cxt5.translate(x, y);
  cxt5.rotate(jd2 * Math.PI / 180);
  cxt5.fillStyle = col;
  cxt5.beginPath();
  cxt5.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3, -tdkd / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 3 / 64, -tdkd * 3 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5.7 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7.8 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 16 / 64, -tdkd * 13 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 11.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 128, 0);
  cxt5.lineTo(0, -tdkd * 1.2 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd * 2.5 / 64, -tdkd * 1.2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.closePath();
  cxt5.fill();
  cxt5.restore();

  var c6 = document.getElementById(myCanvas);
  var cxt6 = c6.getContext("2d");
  cxt6.save();
  cxt6.translate(x, y);
  cxt6.rotate(jd2 * Math.PI / 180);
  cxt6.fillStyle = col;
  cxt6.beginPath();
  cxt6.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.lineTo(0, -tdkd * 1.2 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt6.lineTo(tdkd / 64, -1);
  cxt6.lineTo(-tdkd / 64, 0);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 8 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.closePath();
  cxt6.fill();
  cxt6.restore();

  // 画左转向箭头
  var c7 = document.getElementById(myCanvas);
  var cxt7 = c7.getContext("2d");
  cxt7.save();
  cxt7.translate(x, y);
  cxt7.rotate(jd2 * Math.PI / 180);
  cxt7.fillStyle = col;
  cxt7.beginPath();
  cxt7.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, tdkd * 8 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, tdkd * 12 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7 / 64, tdkd * 12 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 10 / 64, tdkd * 16 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, tdkd * 16 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 1 / 64, tdkd * 10 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, tdkd * 4 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 10 / 64, tdkd * 4 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7 / 64, tdkd * 8 / 64);
  cxt7.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, tdkd * 8 / 64);
  cxt7.closePath();
  cxt7.fill();
  cxt7.restore();
}

// 非机动车直行图标
function drawzxcforward(x, y, jd2, color) {
  var col = "#000000";
  if (color == 1) {
    col = "red";
  } else if (color == 2) {
    col = "yellow";
  } else if (color == 3) {
    col = "#00EC00";
  }

  var c = document.getElementById(myCanvas);
  var cxt = c.getContext("2d");
  cxt.save();
  cxt.translate(x, y);
  cxt.rotate(jd2 * Math.PI / 180);
  cxt.fillStyle = col;
  cxt.beginPath();
  cxt.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt.closePath();
  cxt.fill();
  cxt.restore();

  var c2 = document.getElementById(myCanvas);
  var cxt2 = c2.getContext("2d");
  cxt2.save();
  cxt2.translate(x, y);
  cxt2.rotate(jd2 * Math.PI / 180);
  cxt2.fillStyle = "#000000";
  cxt2.beginPath();
  cxt2.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt2.closePath();
  cxt2.fill();
  cxt2.restore();

  var c3 = document.getElementById(myCanvas);
  var cxt3 = c3.getContext("2d");
  cxt3.save();
  cxt3.translate(x, y);
  cxt3.rotate(jd2 * Math.PI / 180);
  cxt3.fillStyle = col;
  cxt3.beginPath();
  cxt3.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt3.closePath();
  cxt3.fill();
  cxt3.restore();

  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd2 * Math.PI / 180);
  cxt4.fillStyle = "#000000";
  cxt4.beginPath();
  cxt4.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();

  var c5 = document.getElementById(myCanvas);
  var cxt5 = c5.getContext("2d");
  cxt5.save();
  cxt5.translate(x, y);
  cxt5.rotate(jd2 * Math.PI / 180);
  cxt5.fillStyle = col;
  cxt5.beginPath();
  cxt5.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3, -tdkd / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 3 / 64, -tdkd * 3 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5.7 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7.8 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 16 / 64, -tdkd * 13 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 11.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 128, 0);
  cxt5.lineTo(0, -tdkd * 1.2 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd * 2.5 / 64, -tdkd * 1.2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.closePath();
  cxt5.fill();
  cxt5.restore();

  var c6 = document.getElementById(myCanvas);
  var cxt6 = c6.getContext("2d");
  cxt6.save();
  cxt6.translate(x, y);
  cxt6.rotate(jd2 * Math.PI / 180);
  cxt6.fillStyle = col;
  cxt6.beginPath();
  cxt6.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.lineTo(0, -tdkd * 1.2 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt6.lineTo(tdkd / 64, -1);
  cxt6.lineTo(-tdkd / 64, 0);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 8 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.closePath();
  cxt6.fill();
  cxt6.restore();

  // 画直行箭头
  var c8 = document.getElementById(myCanvas);
  var cxt8 = c8.getContext("2d");
  cxt8.save();
  cxt8.translate(x, y);
  cxt8.rotate(jd2 * Math.PI / 180);
  cxt8.fillStyle = col;
  cxt8.beginPath();
  cxt8.moveTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5);
  cxt8.lineTo(tdkd * 2 / 64, tdkd / 3 * 4 / 5);
  cxt8.lineTo(tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 11 / 64);
  cxt8.lineTo(tdkd * 2 / 64 + tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 8 / 64);
  cxt8.lineTo(tdkd * 2 / 64 + tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 12 / 64);
  cxt8.lineTo(0, tdkd / 3 * 4 / 5 - tdkd * 17 / 64);
  cxt8.lineTo(-tdkd * 2 / 64 - tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 12 / 64);
  cxt8.lineTo(-tdkd * 2 / 64 - tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 8 / 64);
  cxt8.lineTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 11 / 64);
  cxt8.lineTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5);
  cxt8.closePath();
  cxt8.fill();
  cxt8.restore();
}

// 非机动车左直图标
function drawzxcleftAndZhi(x, y, jd2, color) {
  var col = "#000000";
  if (color == 1) {
    col = "red";
  } else if (color == 2) {
    col = "yellow";
  } else if (color == 3) {
    col = "#00EC00";
  }

  var c = document.getElementById(myCanvas);
  var cxt = c.getContext("2d");
  cxt.save();
  cxt.translate(x, y);
  cxt.rotate(jd2 * Math.PI / 180);
  cxt.fillStyle = col;
  cxt.beginPath();
  cxt.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt.closePath();
  cxt.fill();
  cxt.restore();

  var c2 = document.getElementById(myCanvas);
  var cxt2 = c2.getContext("2d");
  cxt2.save();
  cxt2.translate(x, y);
  cxt2.rotate(jd2 * Math.PI / 180);
  cxt2.fillStyle = "#000000";
  cxt2.beginPath();
  cxt2.arc(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt2.closePath();
  cxt2.fill();
  cxt2.restore();

  var c3 = document.getElementById(myCanvas);
  var cxt3 = c3.getContext("2d");
  cxt3.save();
  cxt3.translate(x, y);
  cxt3.rotate(jd2 * Math.PI / 180);
  cxt3.fillStyle = col;
  cxt3.beginPath();
  cxt3.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 3, 0, Math.PI * 2, true);
  cxt3.closePath();
  cxt3.fill();
  cxt3.restore();

  var c4 = document.getElementById(myCanvas);
  var cxt4 = c4.getContext("2d");
  cxt4.save();
  cxt4.translate(x, y);
  cxt4.rotate(jd2 * Math.PI / 180);
  cxt4.fillStyle = "#000000";
  cxt4.beginPath();
  cxt4.arc(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0, tdkd / 3 * 4 / 5 / 4, 0, Math.PI * 2, true);
  cxt4.closePath();
  cxt4.fill();
  cxt4.restore();

  var c5 = document.getElementById(myCanvas);
  var cxt5 = c5.getContext("2d");
  cxt5.save();
  cxt5.translate(x, y);
  cxt5.rotate(jd2 * Math.PI / 180);
  cxt5.fillStyle = col;
  cxt5.beginPath();
  cxt5.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3, -tdkd / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 3 / 64, -tdkd * 3 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 14 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 9 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 12.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 5.7 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7.8 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 16 / 64, -tdkd * 13 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 13.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 22 / 64, -tdkd * 12 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 21 / 64, -tdkd * 11.5 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 19 / 64, -tdkd * 10 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd / 64, 0);
  cxt5.lineTo(-tdkd / 128, 0);
  cxt5.lineTo(0, -tdkd * 1.2 / 64);
  cxt5.lineTo(tdkd / 3 * 8 / 5 / 3 - tdkd * 2.5 / 64, -tdkd * 1.2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 7 / 64, -tdkd * 9 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 4 / 64, -tdkd * 2 / 64);
  cxt5.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd / 64, 0);
  cxt5.closePath();
  cxt5.fill();
  cxt5.restore();

  var c6 = document.getElementById(myCanvas);
  var cxt6 = c6.getContext("2d");
  cxt6.save();
  cxt6.translate(x, y);
  cxt6.rotate(jd2 * Math.PI / 180);
  cxt6.fillStyle = col;
  cxt6.beginPath();
  cxt6.moveTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.lineTo(0, -tdkd * 1.2 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 17 / 64, -tdkd * 10 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 18 / 64, -tdkd * 9 / 64);
  cxt6.lineTo(tdkd / 64, -1);
  cxt6.lineTo(-tdkd / 64, 0);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6 / 64, -tdkd * 8 / 64);
  cxt6.lineTo(-tdkd / 3 * 8 / 5 / 3 + tdkd * 6.5 / 64, -tdkd * 9.5 / 64);
  cxt6.closePath();
  cxt6.fill();
  cxt6.restore();

  // 画左直转向箭头
  var c7 = document.getElementById(myCanvas);
  var cxt7 = c7.getContext("2d");
  cxt7.save();
  cxt7.translate(x, y);
  cxt7.rotate(jd2 * Math.PI / 180);
  cxt7.fillStyle = col;
  cxt7.beginPath();
  cxt7.moveTo(-tdkd * 2 / 64, tdkd * 5 / 16);
  cxt7.lineTo(tdkd * 2 / 64, tdkd * 5 / 16);
  cxt7.lineTo(tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 11 / 64);
  cxt7.lineTo(tdkd * 2 / 64 + tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 8 / 64);
  cxt7.lineTo(tdkd * 2 / 64 + tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 12 / 64);
  cxt7.lineTo(0, tdkd / 3 * 4 / 5 - tdkd * 17 / 64);
  cxt7.lineTo(-tdkd * 2 / 64 - tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 12 / 64);
  cxt7.lineTo(-tdkd * 2 / 64 - tdkd * 4 / 64, tdkd / 3 * 4 / 5 - tdkd * 8 / 64);
  cxt7.lineTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 11 / 64);
  cxt7.lineTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 6 / 64);
  cxt7.lineTo(-tdkd * 8 / 64, tdkd / 3 * 4 / 5 - tdkd * 6 / 64);
  cxt7.lineTo(-tdkd * 8 / 64, tdkd / 3 * 4 / 5 - tdkd * 10 / 64);
  cxt7.lineTo(-tdkd * 12 / 64, tdkd / 3 * 4 / 5 - tdkd * 4 / 64);
  cxt7.lineTo(-tdkd * 8 / 64, tdkd / 3 * 4 / 5 + tdkd * 2 / 64);
  cxt7.lineTo(-tdkd * 8 / 64, tdkd / 3 * 4 / 5 - tdkd * 2 / 64);
  cxt7.lineTo(-tdkd * 2 / 64, tdkd / 3 * 4 / 5 - tdkd * 2 / 64);
  cxt7.lineTo(-tdkd * 2 / 64, tdkd * 5 / 16);
  cxt7.closePath();
  cxt7.fill();
  cxt7.restore();
}

// 交通信号灯白色背景  角度 白色背景坐标  左 直  右坐标
function trafficlightbg(jd, x, y, x1, y1, x2, y2, x3, y3) {
  var c7 = document.getElementById(myCanvas);
  var cxt7 = c7.getContext("2d");
  cxt7.save();
  cxt7.translate(x, y);
  cxt7.rotate(jd);
  cxt7.fillStyle = "#FFFFFF";
  cxt7.beginPath();
  cxt7.moveTo(0, tdkd * 2 / 6);
  cxt7.lineTo(0, tdkd * 5 / 3);
  cxt7.lineTo(tdkd * 2 / 3, tdkd * 5 / 3);
  cxt7.lineTo(tdkd * 2 / 3, tdkd * 2 / 6);
  cxt7.lineTo(0, tdkd * 2 / 6);
  cxt7.closePath();
  cxt7.fill();
  cxt7.restore();

  var c77 = document.getElementById(myCanvas);
  var cxt77 = c77.getContext("2d");
  cxt77.save();
  cxt77.translate(x, y);
  cxt77.rotate(jd);
  cxt77.fillStyle = "#FFFFFF";
  cxt77.beginPath();
  cxt77.arc(tdkd / 3, tdkd / 3, tdkd / 3, Math.PI, 0);
  cxt77.arc(tdkd / 3, tdkd * 5 / 3, tdkd / 3, 0, Math.PI);
  cxt77.closePath();
  cxt77.fill();
  cxt77.restore();

  // 左转灯背景
  var c1 = document.getElementById(myCanvas);
  var cxt1 = c1.getContext("2d");
  cxt1.save();
  cxt1.translate(x1, y1);
  cxt1.rotate(jd);
  cxt1.fillStyle = "#000000";
  cxt1.beginPath();
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
  cxt1.closePath();
  cxt1.fill();
  cxt1.restore();

  // 通行灯背景
  var c1 = document.getElementById(myCanvas);
  var cxt1 = c1.getContext("2d");
  cxt1.save();
  cxt1.translate(x2, y2);
  cxt1.rotate(jd);
  cxt1.fillStyle = "#000000";
  cxt1.beginPath();
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
  cxt1.closePath();
  cxt1.fill();
  cxt1.restore();
  // 右转灯背景
  var c1 = document.getElementById(myCanvas);
  var cxt1 = c1.getContext("2d");
  cxt1.save();
  cxt1.translate(x3, y3);
  cxt1.rotate(jd);
  cxt1.fillStyle = "#000000";
  cxt1.beginPath();
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, Math.PI, 0);
  cxt1.arc(tdkd / 3, tdkd / 3, tdkd / 3 * 4 / 5, 0, Math.PI);
  cxt1.closePath();
  cxt1.fill();
  cxt1.restore();
}

// 画人行灯黑色背景
function drawfootbg(fzlktype) {
  if (fzlktype == 0) {
    for (var d = 0; d < pzjd.length; d++) {
      if (d == 0) {
        // 人行灯
        for (var z = 0; z < footlight1x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(footlight1x[z], footlight1y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightgo(footlight1x[z],footlight1y[z]);
        }
      } else if (d == 1) {
        // 人行灯
        for (var z = 0; z < footlight2x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(footlight2x[z], footlight2y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight2x[z],footlight2y[z]);
        }
      } else if (d == 2) {
        // 人行灯
        for (var z = 0; z < footlight3x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(footlight3x[z], footlight3y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightgo(footlight3x[z],footlight3y[z]);
        }
      } else if (d == 3) {
        // 人行灯
        for (var z = 0; z < footlight4x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(footlight4x[z], footlight4y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight4x[z],footlight4y[z]);
        }
      } else if (d == 4) {
        // 人行灯
        for (var z = 0; z < footlight5x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(footlight5x[z], footlight5y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight4x[z],footlight4y[z]);
        }
      }
    }
  } else if (fzlktype == 1) {
    for (var d = 0; d < Cpzjd.length; d++) {
      if (d == 0) {
        // 人行灯
        for (var z = 0; z < Cfootlight1x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(Cfootlight1x[z], Cfootlight1y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightgo(footlight1x[z],footlight1y[z]);
        }
      } else if (d == 1) {
        // 人行灯
        for (var z = 0; z < Cfootlight2x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(Cfootlight2x[z], Cfootlight2y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight2x[z],footlight2y[z]);
        }
      } else if (d == 2) {
        // 人行灯
        for (var z = 0; z < Cfootlight3x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(Cfootlight3x[z], Cfootlight3y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightgo(footlight3x[z],footlight3y[z]);
        }
      } else if (d == 3) {
        // 人行灯
        for (var z = 0; z < Cfootlight4x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(Cfootlight4x[z], Cfootlight4y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight4x[z],footlight4y[z]);
        }
      } else if (d == 4) {
        // 人行灯
        for (var z = 0; z < footlight5x.length; z++) {
          var c71 = document.getElementById(myCanvas);
          var cxt71 = c71.getContext("2d");
          cxt71.fillStyle = "#000000";
          cxt71.beginPath();
          cxt71.arc(Cfootlight5x[z], Cfootlight5y[z], tdkd / 4, 0, Math.PI * 2);
          cxt71.closePath();
          cxt71.fill();
          // footlightstop(footlight4x[z],footlight4y[z]);
        }
      }
    }
  }
}

// 画进口名称
function lkmxname() {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      // 对进口角度在135-225 之间的路口进行特殊处理
      if (pzjd[t] >= 135 && pzjd[t] <= 225) {
        var ddx = 0;
        var ddy = 0;
        if (pzjd[t] == 180) {
          ddx = jknamex[t] - lkname[t].length * namesize;
          ddy = jknamey[t] + namesize * 0.8;
        } else if (pzjd[t] >= 135 && pzjd[t] < 180) {
          ddx = jknamex[t] - lkname[t].length * namesize * Math.sin((pzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.cos((pzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
          ddy = jknamey[t] + lkname[t].length * namesize * Math.cos((pzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.sin((pzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
        } else if (pzjd[t] > 180 && pzjd[t] <= 225) {
          ddx = jknamex[t] - lkname[t].length * namesize * Math.cos((pzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.sin((pzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
          ddy = jknamey[t] - lkname[t].length * namesize * Math.sin((pzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.cos((pzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
        }
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(ddx, ddy);
        cxt6.rotate((pzjd[t] - 180) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(lkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      } else {
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(jknamex[t], jknamey[t]);
        cxt6.rotate((pzjd[t]) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(lkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      }
    }
  } else if (lkmxtype == 1) {
    for (var t = 0; t < pzjd.length; t++) {
      // 对进口角度在135-225 之间的路口进行特殊处理
      if (pzjd[t] >= 135 && pzjd[t] <= 225) {
        var ddx = 0;
        var ddy = 0;
        if (pzjd[t] == 180) {
          ddx = jknamex[t] - lkname[t].length * namesize;
          ddy = jknamey[t] + namesize * 0.8;
        } else if (pzjd[t] >= 135 && pzjd[t] < 180) {
          ddx = jknamex[t] - lkname[t].length * namesize * Math.sin((pzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.cos((pzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
          ddy = jknamey[t] + lkname[t].length * namesize * Math.cos((pzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.sin((pzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
        } else if (pzjd[t] > 180 && pzjd[t] <= 225) {
          ddx = jknamex[t] - lkname[t].length * namesize * Math.cos((pzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.sin((pzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
          ddy = jknamey[t] - lkname[t].length * namesize * Math.sin((pzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.cos((pzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
        }
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(ddx, ddy);
        cxt6.rotate((pzjd[t] - 180) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(lkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      } else {
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(jknamex[t], jknamey[t]);
        cxt6.rotate((pzjd[t]) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(lkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      }
    }

    // 绘制子路口名称
    for (var t = 0; t < Cpzjd.length; t++) {
      // 对进口角度在135-225 之间的路口进行特殊处理
      if (Cpzjd[t] >= 135 && Cpzjd[t] <= 225) {
        var ddx = 0;
        var ddy = 0;
        if (Cpzjd[t] == 180) {
          ddx = Cjknamex[t] - Clkname[t].length * namesize;
          ddy = Cjknamey[t] + namesize * 0.8;
        } else if (Cpzjd[t] >= 135 && Cpzjd[t] < 180) {
          ddx = Cjknamex[t] - Clkname[t].length * namesize * Math.sin((Cpzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.cos((Cpzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
          ddy = Cjknamey[t] + Clkname[t].length * namesize * Math.cos((Cpzjd[t] - 90) * Math.PI * 2 / 360) + namesize * Math.sin((Cpzjd[t] - 90) * Math.PI * 2 / 360) * 0.8;
        } else if (pzjd[t] > 180 && pzjd[t] <= 225) {
          ddx = Cjknamex[t] - Clkname[t].length * namesize * Math.cos((Cpzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.sin((Cpzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
          ddy = Cjknamey[t] - Clkname[t].length * namesize * Math.sin((Cpzjd[t] - 180) * Math.PI * 2 / 360) + namesize * Math.cos((Cpzjd[t] - 180) * Math.PI * 2 / 360) * 0.8;
        }
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(ddx, ddy);
        cxt6.rotate((Cpzjd[t] - 180) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(Clkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      } else {
        var c6 = document.getElementById(myCanvas);
        var cxt6 = c6.getContext("2d");
        cxt6.save();
        cxt6.translate(Cjknamex[t], Cjknamey[t]);
        cxt6.rotate((Cpzjd[t]) * Math.PI / 180);
        cxt6.fillStyle = "#FFFFFF";
        cxt6.font = namesize + "px Arial";
        cxt6.beginPath();
        cxt6.fillText(Clkname[t], 0, 0);
        cxt6.closePath();
        cxt6.restore();
      }
    }
  }
}

// 画流量线圈、排队长度线圈
function lkmxdrawxq() {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    for (var t = 0; t < pzjd.length; t++) {
      if (t == 0) {
        for (var j = 0; j < jkvolxq1x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq1x[j], jkvolxq1y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq1x[j], jkpdcdxq1y[j]);
        }
      } else if (t == 1) {
        for (var j = 0; j < jkvolxq2x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq2x[j], jkvolxq2y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq2x[j], jkpdcdxq2y[j]);
        }
      } else if (t == 2) {
        for (var j = 0; j < jkvolxq3x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq3x[j], jkvolxq3y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq3x[j], jkpdcdxq3y[j]);
        }
      } else if (t == 3) {
        for (var j = 0; j < jkvolxq4x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq4x[j], jkvolxq4y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq4x[j], jkpdcdxq4y[j]);
        }
      } else if (t == 4) {
        for (var j = 0; j < jkvolxq5x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq5x[j], jkvolxq5y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq5x[j], jkpdcdxq5y[j]);
        }
      }
    }
  } else if (lkmxtype == 1) {
    for (var t = 0; t < pzjd.length; t++) {
      if (t == 0) {
        for (var j = 0; j < jkvolxq1x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq1x[j], jkvolxq1y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq1x[j], jkpdcdxq1y[j]);
        }
      } else if (t == 1) {
        for (var j = 0; j < jkvolxq2x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq2x[j], jkvolxq2y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq2x[j], jkpdcdxq2y[j]);
        }
      } else if (t == 2) {
        for (var j = 0; j < jkvolxq3x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq3x[j], jkvolxq3y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq3x[j], jkpdcdxq3y[j]);
        }
      } else if (t == 3) {
        for (var j = 0; j < jkvolxq4x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq4x[j], jkvolxq4y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq4x[j], jkpdcdxq4y[j]);
        }
      } else if (t == 4) {
        for (var j = 0; j < jkvolxq5x.length; j++) {
          // 流量线圈
          drawxqgongju(pzjd[t], jkvolxq5x[j], jkvolxq5y[j]);
          // 排队长度线圈
          drawxqgongju(pzjd[t], jkpdcdxq5x[j], jkpdcdxq5y[j]);
        }
      }
    }

    for (var t = 0; t < Cpzjd.length; t++) {
      if (t == 0) {
        for (var j = 0; j < Cjkvolxq1x.length; j++) {
          // 流量线圈
          drawxqgongju(Cpzjd[t], Cjkvolxq1x[j], Cjkvolxq1y[j]);
          // 排队长度线圈
          drawxqgongju(Cpzjd[t], Cjkpdcdxq1x[j], Cjkpdcdxq1y[j]);
        }
      } else if (t == 1) {
        for (var j = 0; j < Cjkvolxq2x.length; j++) {
          // 流量线圈
          drawxqgongju(Cpzjd[t], Cjkvolxq2x[j], Cjkvolxq2y[j]);
          // 排队长度线圈
          drawxqgongju(Cpzjd[t], Cjkpdcdxq2x[j], Cjkpdcdxq2y[j]);
        }
      } else if (t == 2) {
        for (var j = 0; j < Cjkvolxq3x.length; j++) {
          // 流量线圈
          drawxqgongju(Cpzjd[t], Cjkvolxq3x[j], Cjkvolxq3y[j]);
          // 排队长度线圈
          drawxqgongju(Cpzjd[t], Cjkpdcdxq3x[j], Cjkpdcdxq3y[j]);
        }
      } else if (t == 3) {
        for (var j = 0; j < Cjkvolxq4x.length; j++) {
          // 流量线圈
          drawxqgongju(Cpzjd[t], Cjkvolxq4x[j], Cjkvolxq4y[j]);
          // 排队长度线圈
          drawxqgongju(Cpzjd[t], Cjkpdcdxq4x[j], Cjkpdcdxq4y[j]);
        }
      } else if (t == 4) {
        for (var j = 0; j < Cjkvolxq5x.length; j++) {
          // 流量线圈
          drawxqgongju(Cpzjd[t], Cjkvolxq5x[j], Cjkvolxq5y[j]);
          // 排队长度线圈
          drawxqgongju(Cpzjd[t], Cjkpdcdxq5x[j], Cjkpdcdxq5y[j]);
        }
      }
    }
  }
}

// 画线圈工具类  角度  x坐标 y坐标
function drawxqgongju(jd, x, y) {
  var c2 = document.getElementById(myCanvas);
  var cxt2 = c2.getContext("2d");
  cxt2.save();
  cxt2.translate(x, y);// 重新映射0.0坐标
  cxt2.rotate((jd) * Math.PI / 180);
  cxt2.beginPath();
  cxt2.moveTo(tdkd * 0.2, tdkd * 0.2);
  cxt2.lineTo(tdkd, tdkd * 0.2);
  cxt2.lineTo(tdkd, tdkd * 0.8);
  cxt2.lineTo(tdkd * 0.2, tdkd * 0.8);
  cxt2.lineTo(tdkd * 0.2, tdkd * 0.2);
  cxt2.lineWidth = 1;
  cxt2.strokeStyle = "#FFFFFF";
  cxt2.closePath();
  cxt2.stroke();
  cxt2.restore();
}

// 画车道流向
function lkmxcdliuxiang(shtp) {
  var k = qcanvasid.indexOf(myCanvas);
  if (k != -1) {
    qkbcddata[k] = "";
    Cqkbcddata[k] = "";
    // 可变车道预设数据信息
    qkbcdsetvalues[k] = "";
    Cqkbcdsetvalues[k] = "";
  }
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    if (shtp == 9 || shtp == 8 || shtp == 7 || shtp == 3 || shtp == 4) {
      for (var t = 0; t < pzjd.length; t++) {
        if (t == 0) {
          for (var j = 0; j < jkcdlx1.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq1x[j], jkvolxq1y[j], jkpdcdxq1x[j], jkpdcdxq1y[j], jkcdlx1[j], shtp, t, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < jkcdlx2.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq2x[j], jkvolxq2y[j], jkpdcdxq2x[j], jkpdcdxq2y[j], jkcdlx2[j], shtp, t, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < jkcdlx3.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq3x[j], jkvolxq3y[j], jkpdcdxq3x[j], jkpdcdxq3y[j], jkcdlx3[j], shtp, t, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < jkcdlx4.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq4x[j], jkvolxq4y[j], jkpdcdxq4x[j], jkpdcdxq4y[j], jkcdlx4[j], shtp, t, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < jkcdlx5.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq5x[j], jkvolxq5y[j], jkpdcdxq5x[j], jkpdcdxq5y[j], jkcdlx5[j], shtp, t, j);
          }
        }
      }
    } else {
      for (var t = 0; t < pzjd.length; t++) {
        if (t == 0) {
          for (var j = 0; j < jkcdlx1.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb1x[j], jkcdlxzb1y[j], jkvolxq1x[j], jkvolxq1y[j], jkcdlx1[j], shtp, t, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < jkcdlx2.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb2x[j], jkcdlxzb2y[j], jkvolxq2x[j], jkvolxq2y[j], jkcdlx2[j], shtp, t, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < jkcdlx3.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb3x[j], jkcdlxzb3y[j], jkvolxq3x[j], jkvolxq3y[j], jkcdlx3[j], shtp, t, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < jkcdlx4.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb4x[j], jkcdlxzb4y[j], jkvolxq4x[j], jkvolxq4y[j], jkcdlx4[j], shtp, t, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < jkcdlx5.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb5x[j], jkcdlxzb5y[j], jkvolxq5x[j], jkvolxq5y[j], jkcdlx5[j], shtp, t, j);
          }
        }
      }
    }
  } else if (lkmxtype == 1) {
    if (shtp == 9 || shtp == 8 || shtp == 7 || shtp == 3 || shtp == 4) {
      for (var t = 0; t < pzjd.length; t++) {
        if (t == 0) {
          for (var j = 0; j < jkcdlx1.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq1x[j], jkvolxq1y[j], jkpdcdxq1x[j], jkpdcdxq1y[j], jkcdlx1[j], shtp, t, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < jkcdlx2.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq2x[j], jkvolxq2y[j], jkpdcdxq2x[j], jkpdcdxq2y[j], jkcdlx2[j], shtp, t, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < jkcdlx3.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq3x[j], jkvolxq3y[j], jkpdcdxq3x[j], jkpdcdxq3y[j], jkcdlx3[j], shtp, t, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < jkcdlx4.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq4x[j], jkvolxq4y[j], jkpdcdxq4x[j], jkpdcdxq4y[j], jkcdlx4[j], shtp, t, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < jkcdlx5.length; j++) {
            drawliuxiang(pzjd[t], jkvolxq5x[j], jkvolxq5y[j], jkpdcdxq5x[j], jkpdcdxq5y[j], jkcdlx5[j], shtp, t, j);
          }
        }
      }
    } else {
      for (var t = 0; t < pzjd.length; t++) {
        if (t == 0) {
          for (var j = 0; j < jkcdlx1.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb1x[j], jkcdlxzb1y[j], jkvolxq1x[j], jkvolxq1y[j], jkcdlx1[j], shtp, t, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < jkcdlx2.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb2x[j], jkcdlxzb2y[j], jkvolxq2x[j], jkvolxq2y[j], jkcdlx2[j], shtp, t, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < jkcdlx3.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb3x[j], jkcdlxzb3y[j], jkvolxq3x[j], jkvolxq3y[j], jkcdlx3[j], shtp, t, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < jkcdlx4.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb4x[j], jkcdlxzb4y[j], jkvolxq4x[j], jkvolxq4y[j], jkcdlx4[j], shtp, t, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < jkcdlx5.length; j++) {
            drawliuxiang(pzjd[t], jkcdlxzb5x[j], jkcdlxzb5y[j], jkvolxq5x[j], jkvolxq5y[j], jkcdlx5[j], shtp, t, j);
          }
        }
      }
    }

    // 绘制子路口车道流向
    if (shtp == 9 || shtp == 8 || shtp == 7 || shtp == 3 || shtp == 4) {
      for (var t = 0; t < Cpzjd.length; t++) {
        var z_jkid = pzjd.length + t;
        if (t == 0) {
          for (var j = 0; j < Cjkcdlx1.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkvolxq1x[j], Cjkvolxq1y[j], Cjkpdcdxq1x[j], Cjkpdcdxq1y[j], Cjkcdlx1[j], shtp, z_jkid, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < Cjkcdlx2.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkvolxq2x[j], Cjkvolxq2y[j], Cjkpdcdxq2x[j], Cjkpdcdxq2y[j], Cjkcdlx2[j], shtp, z_jkid, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < Cjkcdlx3.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkvolxq3x[j], Cjkvolxq3y[j], Cjkpdcdxq3x[j], Cjkpdcdxq3y[j], Cjkcdlx3[j], shtp, z_jkid, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < Cjkcdlx4.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkvolxq4x[j], Cjkvolxq4y[j], Cjkpdcdxq4x[j], Cjkpdcdxq4y[j], Cjkcdlx4[j], shtp, z_jkid, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < Cjkcdlx5.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkvolxq5x[j], Cjkvolxq5y[j], Cjkpdcdxq5x[j], Cjkpdcdxq5y[j], Cjkcdlx5[j], shtp, z_jkid, j);
          }
        }
      }
    } else {
      for (var t = 0; t < Cpzjd.length; t++) {
        var z_jkid = pzjd.length + t;
        if (t == 0) {
          for (var j = 0; j < Cjkcdlx1.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkcdlxzb1x[j], Cjkcdlxzb1y[j], Cjkvolxq1x[j], Cjkvolxq1y[j], Cjkcdlx1[j], shtp, z_jkid, j);
          }
        } else if (t == 1) {
          for (var j = 0; j < Cjkcdlx2.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkcdlxzb2x[j], Cjkcdlxzb2y[j], Cjkvolxq2x[j], Cjkvolxq2y[j], Cjkcdlx2[j], shtp, z_jkid, j);
          }
        } else if (t == 2) {
          for (var j = 0; j < jkcdlx3.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkcdlxzb3x[j], Cjkcdlxzb3y[j], Cjkvolxq3x[j], Cjkvolxq3y[j], Cjkcdlx3[j], shtp, z_jkid, j);
          }
        } else if (t == 3) {
          for (var j = 0; j < Cjkcdlx4.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkcdlxzb4x[j], Cjkcdlxzb4y[j], Cjkvolxq4x[j], Cjkvolxq4y[j], Cjkcdlx4[j], shtp, z_jkid, j);
          }
        } else if (t == 4) {
          for (var j = 0; j < Cjkcdlx5.length; j++) {
            drawliuxiang(Cpzjd[t], Cjkcdlxzb5x[j], Cjkcdlxzb5y[j], Cjkvolxq5x[j], Cjkvolxq5y[j], Cjkcdlx5[j], shtp, z_jkid, j);
          }
        }
      }
    }
  }
}

// 画流向工具类 角度  x坐标 y坐标 x2 y2排队长度坐标  lx流向类型  types展示类型3表示配置类型 进口号 车道号
function drawliuxiang(jd, x, y, x2, y2, lx, types, jknum, cdnum) {
  if (lx == 1) {
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 2) {
    var c7 = document.getElementById(myCanvas);
    var cxt7 = c7.getContext("2d");
    cxt7.save();
    cxt7.translate(x, y);
    cxt7.rotate((jd) * Math.PI / 180);
    cxt7.beginPath();
    cxt7.moveTo(tdkd * 2, tdkd / 2);
    cxt7.lineTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt7.moveTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt7.lineWidth = 2;
    if (showtype == 10) {
        cxt7.strokeStyle = grayColor;
    } else {
        cxt7.strokeStyle = whiteColor;
    }
    cxt7.closePath();
    cxt7.stroke();
    cxt7.restore();
  } else if (lx == 3) {
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd, tdkd * 3 / 4);
    cxt71.lineTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 4) {
    var c7 = document.getElementById(myCanvas);
    var cxt7 = c7.getContext("2d");
    cxt7.save();
    cxt7.translate(x, y);
    cxt7.rotate((jd) * Math.PI / 180);
    cxt7.beginPath();
    cxt7.moveTo(tdkd * 2, tdkd / 2);
    cxt7.lineTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt7.moveTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt7.lineWidth = 2;
    if (showtype == 10) {
        cxt7.strokeStyle = grayColor;
    } else {
        cxt7.strokeStyle = whiteColor;
    }
    cxt7.closePath();
    cxt7.stroke();
    cxt7.restore();
  } else if (lx == 5) {
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    cxt71.moveTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 1 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 1 / 8);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 6) {
    // 直右转弯
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd, tdkd * 3 / 4);
    cxt71.lineTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd / 2);
    cxt71.moveTo(tdkd / 2, tdkd / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 3 / 8 - tdkd / 16);
    cxt71.moveTo(tdkd, tdkd * 3 / 4);
    cxt71.lineTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 7 / 8);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 7) {
    // 通行
    var c7 = document.getElementById(myCanvas);
    var cxt7 = c7.getContext("2d");
    cxt7.save();
    cxt7.translate(x, y);
    cxt7.rotate((jd) * Math.PI / 180);
    cxt7.beginPath();
    cxt7.moveTo(tdkd * 2, tdkd / 2);
    cxt7.lineTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 5 / 8);
    cxt7.moveTo(tdkd / 2, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd * 3 / 8);
    cxt7.moveTo(tdkd * 5 / 4, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, tdkd);
    cxt7.lineTo(tdkd, tdkd * 7 / 8);
    cxt7.moveTo(tdkd * 3 / 4, tdkd);
    cxt7.lineTo(tdkd * 7 / 8, tdkd * 3 / 4);
    cxt7.moveTo(tdkd * 5 / 4, tdkd / 2);
    cxt7.lineTo(tdkd * 3 / 4, 0);
    cxt7.lineTo(tdkd * 7 / 8, tdkd / 4);
    cxt7.moveTo(tdkd * 3 / 4, 0);
    cxt7.lineTo(tdkd, tdkd * 1 / 8);
    cxt7.lineWidth = 2;
    if (showtype == 10) {
        cxt7.strokeStyle = grayColor;
    } else {
        cxt7.strokeStyle = whiteColor;
    }
    cxt7.closePath();
    cxt7.stroke();
    cxt7.restore();
  } else if (lx == 8) {
    // 掉头
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 9) {
    // 左掉头
    var c71 = document.getElementById(myCanvas);
    var cxt71 = c71.getContext("2d");
    cxt71.save();
    cxt71.translate(x, y);
    cxt71.rotate((jd) * Math.PI / 180);
    cxt71.beginPath();
    cxt71.moveTo(tdkd * 2, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 4, tdkd * 5 / 8 + tdkd / 16);
    cxt71.moveTo(tdkd / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 8 - tdkd / 16, tdkd * 1 / 2);
    cxt71.moveTo(tdkd, tdkd / 4);
    cxt71.lineTo(tdkd, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 5 / 8);
    cxt71.moveTo(tdkd * 3 / 2, tdkd * 3 / 4);
    cxt71.lineTo(tdkd * 5 / 4, tdkd * 7 / 8);
    cxt71.lineWidth = 2;
    if (showtype == 10) {
        cxt71.strokeStyle = grayColor;
    } else {
        cxt71.strokeStyle = whiteColor;
    }
    cxt71.closePath();
    cxt71.stroke();
    cxt71.restore();
  } else if (lx == 10) {
    if (types == 3) {
      var msg = "";
      if (lkmxtype == 0) {
        var c7 = document.getElementById(myCanvas);
        var cxt = c7.getContext("2d");
        cxt.fillStyle = "green";
        cxt.beginPath();
        var c = tdkd / 2;// 水平移动距离
        var d = tdkd;// 垂直移动距离
        var _jd = (jd / 180) * Math.PI;
        var cirX = (x2 - c * (Math.sin(_jd)) + d * (Math.cos(_jd))).toFixed(2);
        var cirY = (y2 + c * (Math.cos(_jd)) + d * (Math.sin(_jd))).toFixed(2);
        cxt.arc(cirX, cirY, 6, 0, Math.PI * 2, true);
        cxt.closePath();
        cxt.fill();
        msg = cirX + "|" + cirY + "|" + jknum + "|" + cdnum + "|" + jd;
      } else if (lkmxtype == 1) {
        var c7 = document.getElementById(myCanvas);
        var cxt = c7.getContext("2d");
        cxt.fillStyle = "green";
        cxt.beginPath();
        var c = tdkd / 2;// 水平移动距离
        var d = tdkd;// 垂直移动距离
        var _jd = (jd / 180) * Math.PI;
        var cirX = (x2 - c * (Math.sin(_jd)) + d * (Math.cos(_jd))).toFixed(2);
        var cirY = (y2 + c * (Math.cos(_jd)) + d * (Math.sin(_jd))).toFixed(2);
        cxt.arc(cirX, cirY, 5, 0, Math.PI * 2, true);
        cxt.closePath();
        cxt.fill();
        msg = cirX + "|" + cirY + "|" + jknum + "|" + cdnum + "|" + jd;
      }
      var k = qcanvasid.indexOf(myCanvas);
      if (k != -1) {
        if (jkid.indexOf((jknum + 1)) != -1) {
          if (qkbcddata[k] == "") {
            qkbcddata[k] = msg;
          } else {
            qkbcddata[k] = qkbcddata[k] + ";" + msg;
          }
        } else if (Cjkid.indexOf((jknum + 1)) != -1) {
          if (Cqkbcddata[k] == "") {
            Cqkbcddata[k] = msg;
          } else {
            Cqkbcddata[k] = Cqkbcddata[k] + ";" + msg;
          }
        }
      }
    }
  }
}

// 画人行线
function lkmxfootline() {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    // 人行线左边点位坐标
    var rxxleftx = [];
    var rxxlefty = [];
    // 人行线右边点位坐标
    var rxxrightx = [];
    var rxxrighty = [];
    for (var t = 0; t < pzjd.length; t++) {
      // 进口+出口共有多少个车道
      var cds = tdj[t] + tdc[t];
      // 计算点位 画线
      for (var j = 0; j < cds * 3 - 1; j++) {
        rxxleftx[j] = jfootline1x[t] + (cfootline1x[t] - jfootline1x[t]) * (j + 1) / (cds * 3);
        rxxlefty[j] = jfootline1y[t] + (cfootline1y[t] - jfootline1y[t]) * (j + 1) / (cds * 3);
        rxxrightx[j] = jfootline2x[t] + (cfootline2x[t] - jfootline2x[t]) * (j + 1) / (cds * 3);
        rxxrighty[j] = jfootline2y[t] + (cfootline2y[t] - jfootline2y[t]) * (j + 1) / (cds * 3);
        // 画人行线
        var c = document.getElementById(myCanvas);
        var cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(rxxleftx[j], rxxlefty[j]);
        cxt.lineTo(rxxrightx[j], rxxrighty[j]);
        cxt.lineWidth = tdkd / 7;
        if (showtype == 10) {
            cxt.strokeStyle = grayColor;
        } else {
            cxt.strokeStyle = whiteColor;
        }
        cxt.closePath();
        cxt.stroke();
      }
    }
  } else if (lkmxtype == 1) {
    // 人行线左边点位坐标
    var rxxleftx = [];
    var rxxlefty = [];
    // 人行线右边点位坐标
    var rxxrightx = [];
    var rxxrighty = [];

    for (var t = 0; t < pzjd.length; t++) {
      // 进口+出口共有多少个车道
      var cds = tdj[t] + tdc[t];
      // 计算点位 画线
      for (var j = 0; j < cds * 3 - 1; j++) {
        rxxleftx[j] = jfootline1x[t] + (cfootline1x[t] - jfootline1x[t]) * (j + 1) / (cds * 3);
        rxxlefty[j] = jfootline1y[t] + (cfootline1y[t] - jfootline1y[t]) * (j + 1) / (cds * 3);
        rxxrightx[j] = jfootline2x[t] + (cfootline2x[t] - jfootline2x[t]) * (j + 1) / (cds * 3);
        rxxrighty[j] = jfootline2y[t] + (cfootline2y[t] - jfootline2y[t]) * (j + 1) / (cds * 3);
        // 画人行线
        var c = document.getElementById(myCanvas);
        var cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(rxxleftx[j], rxxlefty[j]);
        cxt.lineTo(rxxrightx[j], rxxrighty[j]);
        cxt.lineWidth = tdkd / 7;
        if (showtype == 10) {
            cxt.strokeStyle = grayColor;
        } else {
            cxt.strokeStyle = whiteColor;
        }
        cxt.closePath();
        cxt.stroke();
      }
    }

    // 人行线左边点位坐标
    var Crxxleftx = [];
    var Crxxlefty = [];
    // 人行线右边点位坐标
    var Crxxrightx = [];
    var Crxxrighty = [];

    for (var t = 0; t < Cpzjd.length; t++) {
      // 进口+出口共有多少个车道
      var cds = Ctdj[t] + Ctdc[t];
      // 计算点位 画线
      for (var j = 0; j < cds * 3 - 1; j++) {
        Crxxleftx[j] = Cjfootline1x[t] + (Ccfootline1x[t] - Cjfootline1x[t]) * (j + 1) / (cds * 3);
        Crxxlefty[j] = Cjfootline1y[t] + (Ccfootline1y[t] - Cjfootline1y[t]) * (j + 1) / (cds * 3);
        Crxxrightx[j] = Cjfootline2x[t] + (Ccfootline2x[t] - Cjfootline2x[t]) * (j + 1) / (cds * 3);
        Crxxrighty[j] = Cjfootline2y[t] + (Ccfootline2y[t] - Cjfootline2y[t]) * (j + 1) / (cds * 3);
        // 画人行线
        var c = document.getElementById(myCanvas);
        var cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(Crxxleftx[j], Crxxlefty[j]);
        cxt.lineTo(Crxxrightx[j], Crxxrighty[j]);
        cxt.lineWidth = tdkd / 7;
        if (showtype == 10) {
            cxt.strokeStyle = grayColor;
        } else {
            cxt.strokeStyle = whiteColor;
        }
        cxt.closePath();
        cxt.stroke();
      }
    }
  }
}

// 画车道
function lkmxcdx(g) {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    // 画中心线
    for (var t = 0; t < pzjd.length; t++) {
      var c = document.getElementById(myCanvas);
      var cxt = c.getContext("2d");
      cxt.beginPath();
      cxt.moveTo(zxxvshbx[t], zxxvshby[t]);
      cxt.lineTo(zxxvsfootx[t], zxxvsfooty[t]);
      cxt.lineWidth = tdkd / 7;
      cxt.strokeStyle = "#ffbd00";
      cxt.stroke();
    }
    if (showtype != 8 && showtype != 9) {
	        // 画停车线
	        for (var t = 0; t < pzjd.length; t++) {
	            var x = zxxvsfootx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] / 14;
	            var y = zxxvsfooty[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] / 14;
	            var c = document.getElementById(myCanvas);
	            var cxt = c.getContext("2d");
	            cxt.beginPath();
	            cxt.moveTo(x, y);
	            cxt.lineTo(jkhxdx[t], jkhxdy[t]);
	            cxt.lineWidth = tdkd / 7;
	            if (showtype == 10) {
	            	cxt.strokeStyle = grayColor;
	            } else {
	            	cxt.strokeStyle = whiteColor;
	            }
	            cxt.closePath();
	            cxt.stroke();
	        }
	        // 画道路进口实线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t == 0) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx1x[j], jkxvsrxx1y[j]);
	                    cxt.lineTo(jksxpoint1x[j], jksxpoint1y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 1) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx2x[j], jkxvsrxx2y[j]);
	                    cxt.lineTo(jksxpoint2x[j], jksxpoint2y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 2) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx3x[j], jkxvsrxx3y[j]);
	                    cxt.lineTo(jksxpoint3x[j], jksxpoint3y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 3) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx4x[j], jkxvsrxx4y[j]);
	                    cxt.lineTo(jksxpoint4x[j], jksxpoint4y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 4) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx5x[j], jkxvsrxx5y[j]);
	                    cxt.lineTo(jksxpoint5x[j], jksxpoint5y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            }
	        }
    }
    if (showtype != 8 && showtype != 9 && showtype != 10) {
	        // 画道路进口虚线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t == 0) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, jksxpoint1x[j], jksxpoint1y[j], jkxvsbyx1x[j], jkxvsbyx1y[j], 10);
	                }
	            } else if (t == 1) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, jksxpoint2x[j], jksxpoint2y[j], jkxvsbyx2x[j], jkxvsbyx2y[j], 10);
	                }
	            } else if (t == 2) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, jksxpoint3x[j], jksxpoint3y[j], jkxvsbyx3x[j], jkxvsbyx3y[j], 10);
	                }
	            } else if (t == 3) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, jksxpoint4x[j], jksxpoint4y[j], jkxvsbyx4x[j], jkxvsbyx4y[j], 10);
	                }
	            } else if (t == 4) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, jksxpoint5x[j], jksxpoint5y[j], jkxvsbyx5x[j], jkxvsbyx5y[j], 10);
	                }
	            }
	        }
	        // 画道路出口虚线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t == 0) {
	                for (var j = 0; j < tdc[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, ckxvsbyx1x[j], ckxvsbyx1y[j], ckxvsrxx1x[j], ckxvsrxx1y[j], 10);
	                }
	            } else if (t == 1) {
	                for (var j = 0; j < tdc[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, ckxvsbyx2x[j], ckxvsbyx2y[j], ckxvsrxx2x[j], ckxvsrxx2y[j], 10);
	                }
	            } else if (t == 2) {
	                for (var j = 0; j < tdc[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, ckxvsbyx3x[j], ckxvsbyx3y[j], ckxvsrxx3x[j], ckxvsrxx3y[j], 10);
	                }
	            } else if (t == 3) {
	                for (var j = 0; j < tdc[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, ckxvsbyx4x[j], ckxvsbyx4y[j], ckxvsrxx4x[j], ckxvsrxx4y[j], 10);
	                }
	            } else if (t == 4) {
	                for (var j = 0; j < tdc[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    drawDashLine(cxt, ckxvsbyx5x[j], ckxvsbyx5y[j], ckxvsrxx5x[j], ckxvsrxx5y[j], 10);
	                }
	            }
	        }
	    }
    // ------------------------
  } else if (lkmxtype == 1) {
    var f = 0;
    var z = 0;
    var fzlkids = qfzlkjkid[g].split(",");
    for (var s = 0; s < pzjd.length; s++) {
      if (jkid[s] == fzlkids[0]) {
        f = s;
      }
    }
    for (var s = 0; s < Cpzjd.length; s++) {
      if (Cjkid[s] == fzlkids[1]) {
        z = s;
      }
    }
    // 画中心线
    for (var t = 0; t < pzjd.length; t++) {
      if (t != f) {
        var c = document.getElementById(myCanvas);
        var cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(zxxvshbx[t], zxxvshby[t]);
        cxt.lineTo(zxxvsfootx[t], zxxvsfooty[t]);
        cxt.lineWidth = tdkd / 7;
        cxt.strokeStyle = "#ffbd00";
        cxt.stroke();
      }
    }
    var c = document.getElementById(myCanvas);
    var cxt = c.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(zxxvsfootx[f], zxxvsfooty[f]);
    cxt.lineTo(Czxxvsfootx[z], Czxxvsfooty[z]);
    cxt.lineWidth = tdkd / 7;
    cxt.strokeStyle = "#ffbd00";
    cxt.stroke();
    // 画中心线
    for (var t = 0; t < Cpzjd.length; t++) {
      if (t != z) {
        var c = document.getElementById(myCanvas);
        var cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(Czxxvshbx[t], Czxxvshby[t]);
        cxt.lineTo(Czxxvsfootx[t], Czxxvsfooty[t]);
        cxt.lineWidth = tdkd / 7;
        cxt.strokeStyle = "#ffbd00";
        cxt.stroke();
      }
    }
    if (showtype != 8 && showtype != 9) {
	        // 画停车线
	        for (var t = 0; t < pzjd.length; t++) {
	            var x = zxxvsfootx[t] + (zxxvsfootx[t] - jkhxdx[t]) / tdj[t] / 14;
	            var y = zxxvsfooty[t] + (zxxvsfooty[t] - jkhxdy[t]) / tdj[t] / 14;
	            var c = document.getElementById(myCanvas);
	            var cxt = c.getContext("2d");
	            cxt.beginPath();
	            cxt.moveTo(x, y);
	            cxt.lineTo(jkhxdx[t], jkhxdy[t]);
	            cxt.lineWidth = tdkd / 7;
	            if (showtype == 10) {
	            	cxt.strokeStyle = grayColor;
	            } else {
	            	cxt.strokeStyle = whiteColor;
	            }
	            cxt.closePath();
	            cxt.stroke();
	        }
	        // 画停车线
	        for (var t = 0; t < Cpzjd.length; t++) {
	            var x = Czxxvsfootx[t] + (Czxxvsfootx[t] - Cjkhxdx[t]) / Ctdj[t] / 14;
	            var y = Czxxvsfooty[t] + (Czxxvsfooty[t] - Cjkhxdy[t]) / Ctdj[t] / 14;
	            var c = document.getElementById(myCanvas);
	            var cxt = c.getContext("2d");
	            cxt.beginPath();
	            cxt.moveTo(x, y);
	            cxt.lineTo(Cjkhxdx[t], Cjkhxdy[t]);
	            cxt.lineWidth = tdkd / 7;
	            if (showtype == 10) {
	            	cxt.strokeStyle = grayColor;
	            } else {
	            	cxt.strokeStyle = whiteColor;
	            }
	            cxt.closePath();
	            cxt.stroke();
	        }
	        // 画道路进口实线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t == 0) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx1x[j], jkxvsrxx1y[j]);
	                    cxt.lineTo(jksxpoint1x[j], jksxpoint1y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 1) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx2x[j], jkxvsrxx2y[j]);
	                    cxt.lineTo(jksxpoint2x[j], jksxpoint2y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 2) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx3x[j], jkxvsrxx3y[j]);
	                    cxt.lineTo(jksxpoint3x[j], jksxpoint3y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 3) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx4x[j], jkxvsrxx4y[j]);
	                    cxt.lineTo(jksxpoint4x[j], jksxpoint4y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 4) {
	                for (var j = 0; j < tdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(jkxvsrxx5x[j], jkxvsrxx5y[j]);
	                    cxt.lineTo(jksxpoint5x[j], jksxpoint5y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            }
	        }
	        // 画道路进口实线
	        for (var t = 0; t < Cpzjd.length; t++) {
	            if (t == 0) {
	                for (var j = 0; j < Ctdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(Cjkxvsrxx1x[j], Cjkxvsrxx1y[j]);
	                    cxt.lineTo(Cjksxpoint1x[j], Cjksxpoint1y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 1) {
	                for (var j = 0; j < Ctdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(Cjkxvsrxx2x[j], Cjkxvsrxx2y[j]);
	                    cxt.lineTo(Cjksxpoint2x[j], Cjksxpoint2y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 2) {
	                for (var j = 0; j < Ctdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(Cjkxvsrxx3x[j], Cjkxvsrxx3y[j]);
	                    cxt.lineTo(Cjksxpoint3x[j], Cjksxpoint3y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 3) {
	                for (var j = 0; j < Ctdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(Cjkxvsrxx4x[j], Cjkxvsrxx4y[j]);
	                    cxt.lineTo(Cjksxpoint4x[j], Cjksxpoint4y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            } else if (t == 4) {
	                for (var j = 0; j < Ctdj[t] - 1; j++) {
	                    var c = document.getElementById(myCanvas);
	                    var cxt = c.getContext("2d");
	                    cxt.beginPath();
	                    cxt.moveTo(Cjkxvsrxx5x[j], Cjkxvsrxx5y[j]);
	                    cxt.lineTo(Cjksxpoint5x[j], Cjksxpoint5y[j]);
	                    cxt.lineWidth = tdkd / 7;
	                    if (showtype == 10) {
		            	cxt.strokeStyle = grayColor;
		            } else {
		            	cxt.strokeStyle = whiteColor;
		            }
	                    cxt.closePath();
	                    cxt.stroke();
	                }
	            }
	        }
	    }
	    if (showtype != 8 && showtype != 9 && showtype != 10) {
	        // 画道路进口虚线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t != f) {
	                if (t == 0) {
	                    for (var j = 0; j < tdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, jksxpoint1x[j], jksxpoint1y[j], jkxvsbyx1x[j], jkxvsbyx1y[j], 10);
	                    }
	                } else if (t == 1) {
	                    for (var j = 0; j < tdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, jksxpoint2x[j], jksxpoint2y[j], jkxvsbyx2x[j], jkxvsbyx2y[j], 10);
	                    }
	                } else if (t == 2) {
	                    for (var j = 0; j < tdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, jksxpoint3x[j], jksxpoint3y[j], jkxvsbyx3x[j], jkxvsbyx3y[j], 10);
	                    }
	                } else if (t == 3) {
	                    for (var j = 0; j < tdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, jksxpoint4x[j], jksxpoint4y[j], jkxvsbyx4x[j], jkxvsbyx4y[j], 10);
	                    }
	                } else if (t == 4) {
	                    for (var j = 0; j < tdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, jksxpoint5x[j], jksxpoint5y[j], jkxvsbyx5x[j], jkxvsbyx5y[j], 10);
	                    }
	                }
	            }
	        }
	        // 画道路进口虚线
	        for (var t = 0; t < Cpzjd.length; t++) {
	            if (t != z) {
	                if (t == 0) {
	                    for (var j = 0; j < Ctdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cjksxpoint1x[j], Cjksxpoint1y[j], Cjkxvsbyx1x[j], Cjkxvsbyx1y[j], 10);
	                    }
	                } else if (t == 1) {
	                    for (var j = 0; j < Ctdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cjksxpoint2x[j], Cjksxpoint2y[j], Cjkxvsbyx2x[j], Cjkxvsbyx2y[j], 10);
	                    }
	                } else if (t == 2) {
	                    for (var j = 0; j < Ctdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cjksxpoint3x[j], Cjksxpoint3y[j], Cjkxvsbyx3x[j], Cjkxvsbyx3y[j], 10);
	                    }
	                } else if (t == 3) {
	                    for (var j = 0; j < Ctdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cjksxpoint4x[j], Cjksxpoint4y[j], Cjkxvsbyx4x[j], Cjkxvsbyx4y[j], 10);
	                    }
	                } else if (t == 4) {
	                    for (var j = 0; j < Ctdj[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cjksxpoint5x[j], Cjksxpoint5y[j], Cjkxvsbyx5x[j], Cjkxvsbyx5y[j], 10);
	                    }
	                }
	            }
	        }
	        // 画父子对应路口进口虚线父进口
	        for (var j = 0; j < tdj[f] - 1; j++) {
	            var c = document.getElementById(myCanvas);
	            var cxt = c.getContext("2d");
	            var fx = 0;
	            var fy = 0;
	            var zx = 0;
	            var zy = 0;
	            if (f == 0) {
	                fx = jksxpoint1x[j];
	                fy = jksxpoint1y[j];
	            } else if (f == 1) {
	                fx = jksxpoint2x[j];
	                fy = jksxpoint2y[j];
	            } else if (f == 2) {
	                fx = jksxpoint3x[j];
	                fy = jksxpoint3y[j];
	            } else if (f == 3) {
	                fx = jksxpoint4x[j];
	                fy = jksxpoint4y[j];
	            } else if (f == 4) {
	                fx = jksxpoint5x[j];
	                fy = jksxpoint5y[j];
	            }

	            if (z == 0) {
	                zx = Cckxvsrxx1x[Cckxvsrxx1x.length - 1 - j];
	                zy = Cckxvsrxx1y[Cckxvsrxx1y.length - 1 - j];
	            } else if (z == 1) {
	                zx = Cckxvsrxx2x[Cckxvsrxx2x.length - 1 - j];
	                zy = Cckxvsrxx2y[Cckxvsrxx2y.length - 1 - j];
	            } else if (z == 2) {
	                zx = Cckxvsrxx3x[Cckxvsrxx3x.length - 1 - j];
	                zy = Cckxvsrxx3y[Cckxvsrxx3y.length - 1 - j];
	            } else if (z == 3) {
	                zx = Cckxvsrxx4x[Cckxvsrxx4x.length - 1 - j];
	                zy = Cckxvsrxx4y[Cckxvsrxx4y.length - 1 - j];
	            } else if (z == 4) {
	                zx = Cckxvsrxx5x[Cckxvsrxx5x.length - 1 - j];
	                zy = Cckxvsrxx5y[Cckxvsrxx5y.length - 1 - j];
	            }
	            drawDashLine(cxt, fx, fy, zx, zy, 10);
	        }
	        // 画父子对应路口进口虚线子进口
	        for (var j = 0; j < Ctdj[z] - 1; j++) {
	            var c = document.getElementById(myCanvas);
	            var cxt = c.getContext("2d");
	            var zx = 0;
	            var zy = 0;
	            var fx = 0;
	            var fy = 0;

	            if (z == 0) {
	                zx = Cjksxpoint1x[j];
	                zy = Cjksxpoint1y[j];
	            } else if (z == 1) {
	                zx = Cjksxpoint2x[j];
	                zy = Cjksxpoint2y[j];
	            } else if (z == 2) {
	                zx = Cjksxpoint3x[j];
	                zy = Cjksxpoint3y[j];
	            } else if (z == 3) {
	                zx = Cjksxpoint4x[j];
	                zy = Cjksxpoint4y[j];
	            } else if (z == 4) {
	                zx = Cjksxpoint5x[j];
	                zy = Cjksxpoint5y[j];
	            }

	            if (f == 0) {
	                fx = ckxvsrxx1x[ckxvsrxx1x.length - 1 - j];
	                fy = ckxvsrxx1y[ckxvsrxx1y.length - 1 - j];
	            } else if (f == 1) {
	                fx = ckxvsrxx2x[ckxvsrxx2x.length - 1 - j];
	                fy = ckxvsrxx2y[ckxvsrxx2y.length - 1 - j];
	            } else if (f == 2) {
	                fx = ckxvsrxx3x[ckxvsrxx3x.length - 1 - j];
	                fy = ckxvsrxx3y[ckxvsrxx3y.length - 1 - j];
	            } else if (f == 3) {
	                fx = ckxvsrxx4x[ckxvsrxx4x.length - 1 - j];
	                fy = ckxvsrxx4y[ckxvsrxx4y.length - 1 - j];
	            } else if (f == 4) {
	                fx = ckxvsrxx5x[ckxvsrxx5x.length - 1 - j];
	                fy = ckxvsrxx5y[ckxvsrxx5y.length - 1 - j];
	            }
	            drawDashLine(cxt, zx, zy, fx, fy, 10);
	        }
	        // 画道路出口虚线
	        for (var t = 0; t < pzjd.length; t++) {
	            if (t != f) {
	                if (t == 0) {
	                    for (var j = 0; j < tdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, ckxvsbyx1x[j], ckxvsbyx1y[j], ckxvsrxx1x[j], ckxvsrxx1y[j], 10);
	                    }
	                } else if (t == 1) {
	                    for (var j = 0; j < tdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, ckxvsbyx2x[j], ckxvsbyx2y[j], ckxvsrxx2x[j], ckxvsrxx2y[j], 10);
	                    }
	                } else if (t == 2) {
	                    for (var j = 0; j < tdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, ckxvsbyx3x[j], ckxvsbyx3y[j], ckxvsrxx3x[j], ckxvsrxx3y[j], 10);
	                    }
	                } else if (t == 3) {
	                    for (var j = 0; j < tdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, ckxvsbyx4x[j], ckxvsbyx4y[j], ckxvsrxx4x[j], ckxvsrxx4y[j], 10);
	                    }
	                } else if (t == 4) {
	                    for (var j = 0; j < tdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, ckxvsbyx5x[j], ckxvsbyx5y[j], ckxvsrxx5x[j], ckxvsrxx5y[j], 10);
	                    }
	                }
	            }
	        }
	        // 画道路出口虚线
	        for (var t = 0; t < Cpzjd.length; t++) {
	            if (t != z) {
	                if (t == 0) {
	                    for (var j = 0; j < Ctdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cckxvsbyx1x[j], Cckxvsbyx1y[j], Cckxvsrxx1x[j], Cckxvsrxx1y[j], 10);
	                    }
	                } else if (t == 1) {
	                    for (var j = 0; j < Ctdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cckxvsbyx2x[j], Cckxvsbyx2y[j], Cckxvsrxx2x[j], Cckxvsrxx2y[j], 10);
	                    }
	                } else if (t == 2) {
	                    for (var j = 0; j < Ctdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cckxvsbyx3x[j], Cckxvsbyx3y[j], Cckxvsrxx3x[j], Cckxvsrxx3y[j], 10);
	                    }
	                } else if (t == 3) {
	                    for (var j = 0; j < Ctdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cckxvsbyx4x[j], Cckxvsbyx4y[j], Cckxvsrxx4x[j], Cckxvsrxx4y[j], 10);
	                    }
	                } else if (t == 4) {
	                    for (var j = 0; j < Ctdc[t] - 1; j++) {
	                        var c = document.getElementById(myCanvas);
	                        var cxt = c.getContext("2d");
	                        drawDashLine(cxt, Cckxvsbyx5x[j], Cckxvsbyx5y[j], Cckxvsrxx5x[j], Cckxvsrxx5y[j], 10);
	                    }
	                }
	            }
	        }
	    }
    // -----------------
  }
}

// 求斜边长度
function getBeveling(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

// 画虚线
function drawDashLine(context, x1, y1, x2, y2, dashLen) {
  dashLen = dashLen === undefined ? 5 : dashLen;
  // 得到斜边的总长度
  var beveling = getBeveling(x2 - x1, y2 - y1);
  // 计算有多少个线段
  var num = Math.floor(beveling / dashLen);

  for (var i = 1; i < num; i++) {
    if (i % 2 == 0) {
      context.moveTo(x1 + (x2 - x1) / num * (i - 1), y1 + (y2 - y1) / num * (i - 1));
      context.lineTo(x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i);
    }
  }
  context.strokeStyle = "#ffffff";
  context.lineWidth = tdkd / 7 - 1;
  context.stroke();
}

// 画道路
function lkmxroad(g) {
  // 判断是否存在父子路口
  if (lkmxtype == 0) {
    var c2 = document.getElementById(myCanvas);
    var cxt2 = c2.getContext("2d");
    if (showtype != 8 && showtype != 9) {
        	if (showtype == 10) {
        		cxt2.fillStyle = "#000";
        	} else {
        		cxt2.fillStyle = loadcolor;
        	}
    }
    cxt2.beginPath();
    cxt2.moveTo(jkhxdx[0], jkhxdy[0]);
    for (var t = 0; t < pzjd.length; t++) {
      var b = t + 1;
      if (t == pzjd.length - 1) {
        b = 0;
      }
      cxt2.lineTo(jkvshbx[t], jkvshby[t]);
      cxt2.lineTo(ckvshbx[t], ckvshby[t]);
      cxt2.lineTo(ckhxdx[t], ckhxdy[t]);
      cxt2.bezierCurveTo(ckhxdx[t], ckhxdy[t], cjcdx[t], cjcdy[t], jkhxdx[b], jkhxdy[b]);
    }
    if (showtype == 8 || showtype == 9) {
        	cxt2.strokeStyle = "#737373";
      cxt2.lineWidth = 1;
      cxt2.closePath();
      cxt2.stroke();
      cxt2.restore();
    } else {
	        cxt2.closePath();
	        cxt2.fill();
    }
  } else if (lkmxtype == 1) {
    var f = 0;
    var z = 0;
    var fzlkids = qfzlkjkid[g].split(",");
    for (var s = 0; s < pzjd.length; s++) {
      if (jkid[s] == fzlkids[0]) {
        f = s;
      }
    }
    for (var s = 0; s < Cpzjd.length; s++) {
      if (Cjkid[s] == fzlkids[1]) {
        z = s;
      }
    }
    // 绘制道路数据
    var c2 = document.getElementById(myCanvas);
    var cxt2 = c2.getContext("2d");
    if (showtype != 8 && showtype != 9) {
        	if (showtype == 10) {
        		cxt2.fillStyle = "#273341";
        	} else {
        		cxt2.fillStyle = loadcolor;
        	}
    }
    cxt2.beginPath();
    cxt2.moveTo(jkhxdx[0], jkhxdy[0]);
    for (var t = 0; t < pzjd.length; t++) {
      var b = t + 1;
      if (t == pzjd.length - 1) {
        b = 0;
      }
      if (t == f) {
        cxt2.lineTo(Cckhxdx[z], Cckhxdy[z]);
        var count = 0;
        var starnum = z;
        var nextnum = 0;
        while (count < Cpzjd.length - 1) {
          if (starnum == Cpzjd.length - 1) {
            nextnum = 0;
          } else {
            nextnum = starnum + 1;
          }
          cxt2.bezierCurveTo(Cckhxdx[starnum], Cckhxdy[starnum], Ccjcdx[starnum], Ccjcdy[starnum], Cjkhxdx[nextnum], Cjkhxdy[nextnum]);
          cxt2.lineTo(Cjkvshbx[nextnum], Cjkvshby[nextnum]);
          cxt2.lineTo(Cckvshbx[nextnum], Cckvshby[nextnum]);
          cxt2.lineTo(Cckhxdx[nextnum], Cckhxdy[nextnum]);
          starnum = nextnum;
          count++;
        }
        if (starnum == Cpzjd.length - 1) {
          nextnum = 0;
        } else {
          nextnum = starnum + 1;
        }
        cxt2.bezierCurveTo(Cckhxdx[starnum], Cckhxdy[starnum], Ccjcdx[starnum], Ccjcdy[starnum], Cjkhxdx[nextnum], Cjkhxdy[nextnum]);
        cxt2.lineTo(ckhxdx[t], ckhxdy[t]);
        cxt2.bezierCurveTo(ckhxdx[t], ckhxdy[t], cjcdx[t], cjcdy[t], jkhxdx[b], jkhxdy[b]);
      } else {
        cxt2.lineTo(jkvshbx[t], jkvshby[t]);
        cxt2.lineTo(ckvshbx[t], ckvshby[t]);
        cxt2.lineTo(ckhxdx[t], ckhxdy[t]);
        cxt2.bezierCurveTo(ckhxdx[t], ckhxdy[t], cjcdx[t], cjcdy[t], jkhxdx[b], jkhxdy[b]);
      }
    }
    if (showtype == 8 || showtype == 9) {
        	cxt2.strokeStyle = "#737373";
      cxt2.lineWidth = 1;
      cxt2.closePath();
      cxt2.stroke();
      cxt2.restore();
    } else {
	        cxt2.closePath();
	        cxt2.fill();
    }
  }
}

// 1画道路边线
function lkmxroadline() {
  if (showtype == 9 || showtype == 7 || showtype == 1 || showtype == 2 || showtype == 6) { // 实时信息含坐标相位
    if (lkmxtype == 0 || lkmxtype == 1) {
      // 计算画布分区
      leftorrightdata(lkmxtype);
    } else {
      alert("路口类型不明确！");
    }
  } else if (showtype == 8 || showtype == 3 || showtype == 4 || showtype == 5 || showtype == 10) {
    // 相位配置信息
    if (lkmxtype == 0 || lkmxtype == 1) {
      lkmxleftx = 0;
      // 路口模型右边矩形四个角点坐标 顺时针
      lk1x = 0;
      lk1y = 0;
      lk2x = scrollWidth;
      lk2y = 0;
      lk3x = scrollWidth;
      lk3y = scrollHeight;
      lk4x = 0;
      lk4y = scrollHeight;
    } else {
      alert("路口类型不明确！");
    }
  }
}

// 左右分区数据处理
function leftorrightdata(lkmxtype) {
  // 若为正常路口
  if (lkmxtype == 0) {
    leftproportion = 0.15;
    lkmxleftx = scrollWidth * leftproportion;
    // 路口模型右边矩形四个角点坐标 顺时针
    lk1x = lkmxleftx;
    lk1y = 0;
    lk2x = scrollWidth;
    lk2y = 0;
    lk3x = scrollWidth;
    lk3y = scrollHeight;
    lk4x = lkmxleftx;
    lk4y = scrollHeight;
  } else if (lkmxtype == 1) {
    // 若为父子路口类型
    leftproportion = 0.25;
    lkmxleftx = scrollWidth * leftproportion;
    // 路口模型右边矩形四个角点坐标 顺时针
    lk1x = lkmxleftx;
    lk1y = 0;
    lk2x = scrollWidth;
    lk2y = 0;
    lk3x = scrollWidth;
    lk3y = scrollHeight;
    lk4x = lkmxleftx;
    lk4y = scrollHeight;
  } else {
    alert("路口类型不明确！");
  }
}

// 画左右分区画图
function leftorright(lkmxtype) {
  // 若为正常路口
  if (lkmxtype == 0) {
    var c1 = document.getElementById(myCanvas);
    var cxt = c1.getContext("2d");
    var grd = cxt.createLinearGradient(0, 0, scrollWidth * leftproportion, scrollHeight);
    grd.addColorStop(0, "#000000");
    cxt.fillStyle = grd;
    cxt.fillRect(0, 0, scrollWidth * leftproportion, scrollHeight);
    cxt.stroke();
  } else if (lkmxtype == 1) {
    // 若为父子路口类型
    var c1 = document.getElementById(myCanvas);
    var cxt = c1.getContext("2d");
    var grd = cxt.createLinearGradient(0, 0, scrollWidth * leftproportion, scrollHeight);
    grd.addColorStop(0, "#000000");
    cxt.fillStyle = grd;
    cxt.fillRect(0, 0, scrollWidth * leftproportion, scrollHeight);
    cxt.stroke();
  } else {
    alert("路口类型不明确！");
  }
}

// 状态为6时更新qprexw[i]值
function updatePhaseInfo(canvasid) {
  var ph = GetPhaseInfo(canvasid);
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canvasid) {
      qprexw[i] = ph;
    }
  }
}

// set相位预设值 对外接口
function SetPhaseInfo(canid, number) {
  var qprexw_num = number >>> 0;
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canid && qtype[i] != 1) {
      if (qlkmxtype[i] == 2) {
        zdDataObj.myCanvas = canid;
        zdDataObj.zdPreXw[i] = qprexw_num;
        zdDataObj.ysxw = qprexw_num;
        window.rampFn(zdDataObj);
        return;
      }
      qprexw[i] = qprexw_num;
      // showtype类型
      showtype = qtype[i];
      // 格式化路口模型数据
      gshdata(qinitdata[i]);
      // 初始化特征参数信息
      inittzcsdata(qtzcsdata[i]);
      // 格式化相邻路口数据
      nearlkdata(qnearlkdata[i]);
      // 格式化可变车道信息
      initkbcddata(qinitkbcddatas[i]);
      // 初始化路口模型
      lkmxinit(qtype[i], qcanvasid[i]);
      // 1画道路边线
      lkmxroadline();
      // 计算路口模型点位数据
      drawlkmxdata(i);
      // 绘制路口模型图
      drawlkmxpic(i);
      // 预设流向号是否参加控制
      if (lkmxtype == 0) {
        var ysxw = qprexw[i];
        var ysxw2bin = dec2bin(ysxw);
        for (var j = 0; j < liuxianghao.length; j++) {
          if (j < ysxw2bin.length) {
            var liux = liuxianghao[j];
            // 从二进制的后面往前取字符
            // var q = ysxw2bin.charAt(ysxw2bin.length - 1 - j); 可能中间间断了某些流向号，所以不能按顺序取值MMP
            var q = ysxw2bin.charAt(ysxw2bin.length - liux);// 这是按照流向号下标反向取值

            if (q == "1") {
              isclick[j] = 1;
            } else {
              isclick[j] = 0;
            }
          } else {
            isclick[j] = 0;
          }
        }
      } else if (lkmxtype == 1) {
        // 父路口和子路口的相位预设值是同一个数字，因此需要拆分
        var all_liuxianghao = liuxianghao.concat(Cliuxianghao);
        var all_isclick = new Array(all_liuxianghao.length);
        var ysxw = qprexw[i];
        var ysxw2bin = dec2bin(ysxw);
        for (var j = 0; j < all_liuxianghao.length; j++) {
          if (j < ysxw2bin.length) {
            var liux = all_liuxianghao[j];
            // 从二进制的后面往前取字符
            // var q = ysxw2bin.charAt(ysxw2bin.length - 1 - j);可能中间间断了某些流向号，所以不能按顺序取值MMP
            var q = ysxw2bin.charAt(ysxw2bin.length - liux);// 这是按照流向号下标反向取值
            if (q == "1") {
              all_isclick[j] = 1;
            } else {
              all_isclick[j] = 0;
            }
          } else {
            all_isclick[j] = 0;
          }
        }
        isclick = all_isclick.slice(0, liuxianghao.length);
        Cisclick = all_isclick.slice(liuxianghao.length);
      }
      // 画流向值
      liuxiangtbsetdata();
    }
  }
}

// set相位预设值 内置方法 初始化的时候用
export function initSetPhaseInfo(canid, number) {
  // 有符号的十进制先转为无符号的,服务端int类型存储不了32位流向转换的无符号十进制数，需要需要转换为有符号的十进制数
  number = number >>> 0;
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canid && qtype[i] != 1) {
      qprexw[i] = number;
      // 预设流向号是否参加控制
      var ysxw = qprexw[i];
      var ysxw2bin = dec2bin(ysxw);
      var all_liuxianghao = liuxianghao;
      var all_isclick = new Array(32);
      if (lkmxtype == 1) {
        all_liuxianghao = liuxianghao.concat(Cliuxianghao);
      }
      for (var j = 0; j < all_liuxianghao.length; j++) {
        if (j < ysxw2bin.length) {
          var liux = all_liuxianghao[j];
          // 从二进制的后面往前取字符
          // var q = ysxw2bin.charAt(ysxw2bin.length - 1 - j);可能中间间断了某些流向号，所以不能按顺序取值MMP
          var q = ysxw2bin.charAt(ysxw2bin.length - liux);// 这是按照流向号下标反向取值
          if (q == "1") {
            all_isclick[j] = 1;
          } else {
            all_isclick[j] = 0;
          }
        } else {
          all_isclick[j] = 0;
        }
      }
      // 拆分all_isclick
      isclick = all_isclick.slice(0, liuxianghao.length);
      if (lkmxtype == 1) {
        Cisclick = all_isclick.slice(liuxianghao.length);
      } else {
        Cisclick = [];
      }
      // 画流向值
      liuxiangtbsetdata();
    }
  }
}

// get相位预设值
export function GetPhaseInfo(canvasid) {
  var num = 0;
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canvasid) {
        	if (qlkmxtype[i] == 2) {
        		num = zdDataObj.zdPreXw[i];
        	} else {
	            // 格式化路口模型数据
	            gshdata(qinitdata[i]);
	            // 初始化特征参数信息
	            inittzcsdata(qtzcsdata[i]);
	            // 格式化相邻路口数据
	            nearlkdata(qnearlkdata[i]);
	            // 格式化可变车道信息
	            initkbcddata(qinitkbcddatas[i]);
	            num = qprexw[i];
        	}
    }
  }
  // 无符号的先转为有符号的十进制,服务端int类型存储不了32位流向转换的无符号十进制数，需要需要转换为有符号的十进制数
  num = num << 0;
  return num;
}

// 将十进制数据转换成二进制
export function dec2bin(th) {
  // 有符号的十进制先转为无符号的,服务端int类型存储不了32位流向转换的无符号十进制数，需要需要转换为有符号的十进制数
  th = th >>> 0;
  var dec = th;
  var bin = "";
  while (dec > 0) {
    if (dec % 2 != 0) {
      bin = "1" + bin;
    } else {
      bin = "0" + bin;
    }
    dec = parseInt(dec / 2);
  }
  return bin;
}

// 将二进制字符串转换成十进制数
function dec10bin(th) {
  var num = 0;
  for (var j = 0; j < th.length; j++) {
    // 从二进制的后面往前取字符
    var q = th.charAt(th.length - 1 - j);
    if (q == "1") {
      num = 1 * Math.pow(2, j) + num;
    } else {
      num = 0 * Math.pow(2, j) + num;
    }
  }
  // 无符号的先转为有符号的十进制,服务端int类型存储不了32位流向转换的无符号十进制数，需要需要转换为有符号的十进制数
  num = num << 0;
  return num;
}

// 改变画布大小重新绘制路口模型  画布ID myCanvas3  画布宽600 画布高500
function Getcanvassize(canvasid, widths, heights) {
  var c4 = document.getElementById(canvasid);
  c4.width = widths;
  c4.height = heights;
  for (var i = 0; i < qcanvasid.elngth; i++) {
    if (qcanvasid[i] == canvasid) {
      // 格式化路口模型数据
      gshdata(qinitdata[i]);
      // 初始化特征参数信息
      inittzcsdata(qtzcsdata[i]);
      // 格式化相邻路口数据
      nearlkdata(qnearlkdata[i]);
      // 格式化可变车道信息
      initkbcddata(qinitkbcddatas[i]);
      // 初始化路口模型
      lkmxinit(qtype[i], canvasid);
      // 1画道路边线
      lkmxroadline();
      // 计算路口模型点位数据
      drawlkmxdata(i);
      // 绘制路口模型图
      drawlkmxpic(i);
      if (qtype[i] == 2 || qtype[i] == 3) {
        if (lkmxtype == 0) {
          initSetPhaseInfo(qcanvasid[i], qprexw[i]);
        } else if (lkmxtype == 1) {
          initSetPhaseInfo(qcanvasid[i], qprexw[i]);
        }
      }
    }
  }
}

// 清除画布
export function clearcanvas(canvasid, showtype) {
  var Height = document.getElementById(canvasid).scrollHeight;
  var Width = document.getElementById(canvasid).scrollWidth;
  var lt = 0.15;
  var c = document.getElementById(canvasid);
  var ctx = c.getContext("2d");
  if (showtype != 8 && showtype != 9 && showtype != 10) {
	    ctx.clearRect(0, 0, Width, Height);

	    var c1 = document.getElementById(canvasid);
	    var ctx1 = c1.getContext("2d");
	    ctx.fillStyle = "#2c3c4d";
	    ctx1.fillRect(0, 0, Width * lt, Height);

	    var c2 = document.getElementById(canvasid);
	    var ctx2 = c2.getContext("2d");
	    ctx.fillStyle = "#31313d";
	    ctx2.fillRect(Width * lt, 0, Width, Height);
  } else {
    ctx.clearRect(0, 0, Width, Height);
    var c1 = document.getElementById(canvasid);
    var ctx1 = c1.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx1.fillRect(0, 0, Width, Height);
  }
  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canvasid) {
      // 所有信号机ID
      qxhjid[i] = "";
      // 所有路口ID
      qcrossid[i] = "";
      // 所有路口模型初始化数据
      qinitdata[i] = "";
      // 所有路口模型type
      qtype[i] = "";
      // 所有路口模型预设相位
      qprexw[i] = 0;
      zdDataObj = {};
      zdDataObj.zdPreXw = [];
      // 所有路口流量数据
      qvoldata[i] = 0;
      // 所有路口排队长度数据
      qpdcddata[i] = 0;
      // 所有路口待转区提示信息（实时数据）
      qdzwmsg[i] = "";
      // 可变车道数据信息
      qkbcddata[i] = "";
      all_qkbcddata_arr = [];
      // 所有路口流量数据
      Cqvoldata[i] = 0;
      // 所有路口排队长度数据
      Cqpdcddata[i] = 0;
      // 所有路口待转区提示信息（实时数据）
      Cqdzwmsg[i] = "";
      // 可变车道数据信息
      Cqkbcddata[i] = "";
    }
  }
}

// 1、画布ID　2、流向号  3、进口id  4、流向配置 5、清除或添加 (1添加 0清除)
export function setsignalliuxiang(canvasid, lxh, lsjkid, lxpz, type) {
  var fz = 0;// 画的流向进口ID属于父路口，1为属于子路口
  var k = jkid.indexOf(lsjkid);
  var z = Cjkid.indexOf(lsjkid);
  var all_liuxianghao = liuxianghao;
  var lspzjd = -1;
  if (k == -1) {
    if (z == -1) return;
    fz = 1;
    lspzjd = Cpzjd[z];
    all_liuxianghao = liuxianghao.concat(Cliuxianghao);
  } else {
    lspzjd = pzjd[k];
  }
  var t = lxh - 1;
  var h = liuxianghao.indexOf(lxh);
  if (fz == 1) {
    h = Cliuxianghao.indexOf(lxh);
  }
  // 判断是否已经变绿
  if (type == 1) {
    if (fz == 0 && h != -1) {
      isclick[h] = 1;
    } else if (fz == 1 && h != -1) {
      Cisclick[h] = 1;
      t = h;
    }
    // 清除
    drawliuxiangjiantou(t, lxpz, lspzjd, 0, lsjkid, 0, canvasid, fz);
    // 画箭头
    drawliuxiangjiantou(t, lxpz, lspzjd, 1, lsjkid, 1, canvasid, fz);
    GetSingal("1|1|" + lsjkid + "|" + lxh + "|" + lxpz);
  } else if (type == 0) {
    if (fz == 0 && h != -1) {
      isclick[h] = 0;
    } else if (fz == 1 && h != -1) {
      Cisclick[h] = 0;
      t = h;
    }
    // 清除
    drawliuxiangjiantou(t, lxpz, lspzjd, 0, lsjkid, 0, canvasid, fz);
    // 画箭头
    drawliuxiangjiantou(t, lxpz, lspzjd, 0, lsjkid, 1, canvasid, fz);
    GetSingal("1|0|" + lsjkid + "|" + lxh + "|" + lxpz);
  }
  var all_isclick = isclick;
  if (lkmxtype == 1 && Cisclick.length > 0) {
    all_isclick = isclick.concat(Cisclick);
  }
  // 将二进制数组组合成二进制字符串
  var zfc2bin = "";
  for (var r = 0; r < maxLiuxiangNum; r++) {
    var inx = all_liuxianghao.indexOf((r + 1));
    if (inx != -1 && all_isclick[inx] == 1) {
      zfc2bin = "1" + zfc2bin;
    } else {
      zfc2bin = "0" + zfc2bin;
    }
  }
  // 将预设值转换成十进制保存到Map中
  var num = dec10bin(zfc2bin);

  for (var i = 0; i < qcanvasid.length; i++) {
    if (qcanvasid[i] == canvasid) {
      qprexw[i] = num;
    }
  }
}

// 格式画流量数据
function Voldata(canvasid, vdata) {
// 所有路口流量数据
// qvoldata[i].length=0;
// 所有路口排队长度数据
// qpdcddata[i].length=0;

// var arr='{"drawx":'+data[j].x+',"drawy":'+data[j].y+',"canvasw":'+data[j].w+',"canvash":'+data[j].h+',"drawids":"'+ids+'","drawpathname":"'+data[j].pathname+'"}';
// var obj=eval('('+arr+')');
// var newarr=eval('('+arr+')');
// qequipments[nums].push(newarr);
}

// 格式画排队长度数据
function Pdcddata(canvasid, pdata) {

// var arr='{"drawx":'+data[j].x+',"drawy":'+data[j].y+',"canvasw":'+data[j].w+',"canvash":'+data[j].h+',"drawids":"'+ids+'","drawpathname":"'+data[j].pathname+'"}';
// var obj=eval('('+arr+')');
// var newarr=eval('('+arr+')');
// qequipments[nums].push(newarr);
}

/**
 * 格式化二次过街路口模型点位着色数据
 * reData:推送回的着色数组
 */
function initSecondData(reData) {
  var pzData = current_movements_paras;// 信号机特征参数配置信息
  var result = [
    { one: -1, two: -1 }, // 进口1
    { one: -1, two: -1 }, // 进口2
    { one: -1, two: -1 }, // 进口3
    { one: -1, two: -1 }, // 进口4
    { one: -1, two: -1 }// 进口5
  ];
  var len = pzData.length;
  for (var i = 0; i < len; i++) {
    if (pzData[i].enter_port_direction == 1) { // 进口1
      if (pzData[i].movements_type == 10) { // 人行1
        result[0].one = reData[pzData[i].num_movements - 1];
      }
      if (pzData[i].movements_type == 11) { // 人行2
        result[0].two = reData[pzData[i].num_movements - 1];
      }
    }
    if (pzData[i].enter_port_direction == 2) { // 进口2
      if (pzData[i].movements_type == 10) { // 人行1
        result[1].one = reData[pzData[i].num_movements - 1];
      }
      if (pzData[i].movements_type == 11) { // 人行2
        result[1].two = reData[pzData[i].num_movements - 1];
      }
    }
    if (pzData[i].enter_port_direction == 3) { // 进口3
      if (pzData[i].movements_type == 10) { // 人行1
        result[2].one = reData[pzData[i].num_movements - 1];
      }
      if (pzData[i].movements_type == 11) { // 人行2
        result[2].two = reData[pzData[i].num_movements - 1];
      }
    }
    if (pzData[i].enter_port_direction == 4) { // 进口4
      if (pzData[i].movements_type == 10) { // 人行1
        result[3].one = reData[pzData[i].num_movements - 1];
      }
      if (pzData[i].movements_type == 11) { // 人行2
        result[3].two = reData[pzData[i].num_movements - 1];
      }
    }
    if (pzData[i].enter_port_direction == 5) { // 进口5
      if (pzData[i].movements_type == 10) { // 人行1
        result[4].one = reData[pzData[i].num_movements - 1];
      }
      if (pzData[i].movements_type == 11) { // 人行2
        result[4].two = reData[pzData[i].num_movements - 1];
      }
    }
  }
  return result;
}
// 用于判断可变车道绿点是否参与控制
function get_kbcd_set_data_byNoEdit() {
  var selectArr = [];
  for (var kb = 0; kb < all_qkbcddata_arr.length; kb++) { // 循环遍历当前路口模型可变车道数组
    // 查找路口模型中可变车道所在的进口 和车道以及状态数组
    var jknums = all_qkbcddata_arr[kb].entrance_id;
    var cdnums = all_qkbcddata_arr[kb].motor_lane_id;
    var lxh = 0;// 可变车道流向号，确定可变车道状态值
    for (var m = 0; m < current_movements_paras.length; m++) { // 查找流向标签中参与控制的可变车道信息
      if (current_movements_paras[m].enter_port_direction == 15) {
        var fixed_grn_time = current_movements_paras[m].fixed_grn_time;
        if (fixed_grn_time && (fixed_grn_time >> 4) == jknums && (fixed_grn_time & 0x0f) == cdnums) {
          lxh = current_movements_paras[m].num_movements;
          var text = "进口名称" + jknums + "车道" + cdnums;
          selectArr.push(lxh + "$5$" + text + "$5$" + jknums + "$5$" + cdnums);
          break;
        }
      }
    }
  }
  selectArr = selectArr.unique2();
  return selectArr;
}
//深度复制
function deepCopy(obj) {
	var newObj = {};
	if (obj instanceof Array) {
		newObj = [];
	}
	for (var key in obj) {
		var val = obj[key];
		newObj[key] = typeof val === 'object' ? deepCopy(val) : val;
	}
	return newObj;
}
function GetSingal(messages){

}
// 自定义关灯标志
export function setCustomTurnOffLightFlag(flag){
  zdygdbj = flag;
}
export function getCustomTurnOffLightFlag(){
  return zdygdbj;
}
export {
  jinkouid,
  liuxianghao,
  jinkoufx,
  liuxiangpz,
  Cjinkouid,
  Cliuxianghao,
  Cjinkoufx,
  Cliuxiangpz
};
