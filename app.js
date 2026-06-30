// ===== 数据存储 =====
const Storage = {
    get(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

// ===== 内置美食数据（仅保留有图片的） =====
const foodData = [
    { id: 1, name: '一堂拌面扁肉', rating: 4.5, review: '拌面劲道，扁肉汤鲜味美，早餐首选', reviewer: '早起鸟', canteen: '1', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/一堂拌面扁肉.jpg' },
    { id: 2, name: '一堂肴伯黑鸭煲', rating: 4.5, review: '黑鸭煲香辣入味，配菜丰富，超级下饭', reviewer: '辣妹子', canteen: '1', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/一堂肴伯黑鸭煲.jpg' },
    { id: 3, name: '一堂意面', rating: 4, review: '意面口感不错，煎蛋很香，分量足', reviewer: '西餐控', canteen: '1', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/一堂意面.jpg' },
    { id: 4, name: '二堂干蒸菜', rating: 4.5, review: '干蒸排骨和牛肉都很香，配米饭绝了', reviewer: '干饭王', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂干蒸菜.jpg' },
    { id: 5, name: '二堂古茗奶茶', rating: 4.5, review: '芝士葡萄超好喝，奶盖浓郁，果茶清爽', reviewer: '奶茶控', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂古茗.jpg' },
    { id: 6, name: '二堂老丈人牛肉面', rating: 4.5, review: '牛肉大片，汤底醇厚，花生很香', reviewer: '面食控', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂老丈人牛肉面.jpg' },
    { id: 7, name: '二堂麻辣烫', rating: 4, review: '菜品丰富，汤底浓郁，丸子很Q弹', reviewer: '辣妹子', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂麻辣烫.jpg' },
    { id: 8, name: '二堂米婆婆', rating: 4, review: '锅包肉酥脆，麻婆豆腐嫩滑，金针菇下饭', reviewer: '东北胃', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂米婆婆.jpg' },
    { id: 9, name: '二堂石锅拌饭', rating: 4.5, review: '五花肉石锅拌饭，泡菜酸辣开胃，溏心蛋完美', reviewer: '韩料控', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂石锅拌饭.jpg' },
    { id: 10, name: '二堂水果捞', rating: 4.5, review: '水果新鲜种类多，芒果超甜，车厘子很大颗', reviewer: '甜食控', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂水果捞.jpg' },
    { id: 11, name: '二堂五谷渔粉', rating: 4.5, review: '渔粉滑嫩，炸蛋吸满汤汁，香菜提味', reviewer: '嗦粉达人', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂五谷渔粉.jpg' },
    { id: 12, name: '二堂云南鸡汤米线', rating: 4.5, review: '鸡汤鲜美，鱼肉嫩滑，豌豆酥脆', reviewer: '养生党', canteen: '2', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/二堂云南鸡汤米线.jpg' },
    { id: 13, name: '三堂烤盘饭', rating: 4.5, review: '烤盘饭香辣过瘾，配菜丰富，米饭管饱', reviewer: '干饭王', canteen: '3', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/三堂烤盘饭.jpg' },
    { id: 14, name: '三堂麻辣香锅', rating: 4.5, review: '麻辣香锅料足味正，丸子和蔬菜搭配完美', reviewer: '重口味', canteen: '3', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/三堂麻辣香锅.jpg' },
    { id: 15, name: '三堂汤先生', rating: 4, review: '黑椒肉片嫩滑，配菜丰富，营养均衡', reviewer: '养生党', canteen: '3', type: 'cafeteria', emoji: 'F', tag: '推荐', image: 'images/三堂汤先生.jpg' },
    { id: 16, name: '北门肥姨妈螺蛳粉', rating: 4.5, review: '螺蛳粉正宗，腐竹和酸笋超多，汤底浓郁', reviewer: '嗦粉达人', canteen: null, type: 'offcampus', emoji: 'F', tag: '推荐', image: 'images/北门肥姨妈螺蛳粉.jpg' },
    { id: 17, name: '北门贵州冰浆', rating: 4.5, review: '冰浆绵密细腻，芒果和绿豆口味都超赞，夏日解暑神器', reviewer: '甜食控', canteen: null, type: 'offcampus', emoji: 'F', tag: '推荐', image: 'images/北门贵州冰浆2.jpg' },
    { id: 18, name: '北门花甲粉', rating: 4, review: '花甲新鲜，锡纸锁住鲜味，汤底香辣可口', reviewer: '夜宵党', canteen: null, type: 'offcampus', emoji: 'F', tag: '推荐', image: 'images/北门花甲粉.jpg' },
    { id: 19, name: '北门铜锅鸡', rating: 4.5, review: '铜锅鸡分量超大，鸡肉嫩滑，配菜丰富，适合聚餐', reviewer: '聚餐达人', canteen: null, type: 'offcampus', emoji: 'F', tag: '推荐', image: 'images/北门铜锅鸡1.jpg' },
    { id: 20, name: '北门云贵川小吃', rating: 4, review: '土豆和米粉搭配很有特色，香辣入味', reviewer: '重口味', canteen: null, type: 'offcampus', emoji: 'F', tag: '推荐', image: 'images/北门云贵川小吃.jpg' },
    // 第四食堂数据（待同学们提交真实测评）
    { id: 21, name: '四堂待解锁', rating: 0, review: '期待同学们来评测第四食堂的美食！', reviewer: '系统', canteen: '4', type: 'cafeteria', emoji: 'F', tag: '待解锁', image: null },
    { id: 22, name: '四堂待解锁', rating: 0, review: '期待同学们来评测第四食堂的美食！', reviewer: '系统', canteen: '4', type: 'cafeteria', emoji: 'F', tag: '待解锁', image: null },
    { id: 23, name: '四堂待解锁', rating: 0, review: '期待同学们来评测第四食堂的美食！', reviewer: '系统', canteen: '4', type: 'cafeteria', emoji: 'F', tag: '待解锁', image: null },
    { id: 24, name: '四堂待解锁', rating: 0, review: '期待同学们来评测第四食堂的美食！', reviewer: '系统', canteen: '4', type: 'cafeteria', emoji: 'F', tag: '待解锁', image: null },
    { id: 25, name: '四堂待解锁', rating: 0, review: '期待同学们来评测第四食堂的美食！', reviewer: '系统', canteen: '4', type: 'cafeteria', emoji: 'F', tag: '待解锁', image: null }
];

// ===== 美食MBTI人格库 =====
const foodMBTI = {
    'EFNP': { title: '美食探险家', emoji: 'E', desc: '你是天生的美食探险家！不拘泥于固定食堂，总是勇于尝试校外新店。你的收藏遍布各个食堂和北门小吃街，口味多元，对新鲜事物充满好奇。你是朋友圈里的"美食活地图"，总能发现别人不知道的好店。', traits: { '探索指数': '95%', '口味广度': '88%', '辣度耐受': '82%', '甜食偏好': '65%' }, recommend: '推荐你试试北门还没去过的新店，说不定能发现下一个宝藏美食！' },
    'ISFP': { title: '精致品鉴师', emoji: 'I', desc: '你是校园美食界的品鉴大师！你对食物有着极高的标准，收藏的每道菜都是精心挑选的精品。你注重用餐体验的每个细节，从摆盘到味道，从分量到性价比，你都有独到的见解。', traits: { '品味指数': '92%', '挑剔程度': '78%', '拍照频率': '95%', '分享欲': '70%' }, recommend: '你的品味已经很高了，不妨试试用测评抠图功能，把你的美食体验做成精美贴纸分享给朋友！' },
    'ENTJ': { title: '干饭指挥官', emoji: 'E', desc: '你是干饭界的指挥官！你总是能快速做出就餐决策，从不纠结吃什么。你的收藏集中在几个高分食堂，目标明确，效率至上。你可能是宿舍里"今天吃什么"的最终决策者。', traits: { '决策速度': '98%', '忠诚度': '85%', '效率指数': '90%', '带饭概率': '75%' }, recommend: '作为指挥官，你可以用"今天吃什么"功能帮室友做决定，一锤定音！' },
    'INFP': { title: '文艺美食家', emoji: 'I', desc: '你是充满文艺气息的美食家！你不仅关注味道，更注重美食背后的故事和情感。你可能会为一碗面写下长篇测评，也会因为一份甜品而感动。你的收藏里藏着对生活的热爱。', traits: { '文艺指数': '95%', '情感丰富': '90%', '测评长度': '88%', '拍照美学': '92%' }, recommend: '你的文字很有感染力，试试在详情页留下更多走心的评价吧！' },
    'ESTP': { title: '街头美食猎人', emoji: 'E', desc: '你是校园周边的美食猎人！比起食堂，你更热衷于探索北门小吃街的每个角落。烤冷面、螺蛳粉、花甲粉...你总是能找到最接地气的美味。你是夜宵文化的忠实拥趸。', traits: { '街头指数': '96%', '夜宵频率': '90%', '辣度耐受': '88%', '冒险精神': '85%' }, recommend: '北门还有更多隐藏美食等你发现！试试随机抽签功能，探索未知美味！' },
    'ISTJ': { title: '食堂忠实粉丝', emoji: 'I', desc: '你是食堂的忠实粉丝！你喜欢熟悉的味道，有固定的就餐习惯和偏爱的窗口。你的收藏集中在特定食堂，对喜欢的菜品有着深厚的感情。稳定和可靠是你的美食信条。', traits: { '忠诚度': '98%', '习惯稳定': '95%', '探索欲': '30%', '排队耐心': '85%' }, recommend: '偶尔也可以尝试一下其他食堂，说不定会有意外惊喜哦！' },
    'ENFP': { title: '社交美食家', emoji: 'E', desc: '你是社交型美食家！吃饭对你来说不仅是填饱肚子，更是社交活动。你喜欢和朋友一起探索新店，热衷于分享美食体验。你的收藏丰富多样，因为你总是听取朋友的推荐。', traits: { '社交指数': '95%', '从众指数': '80%', '分享欲': '92%', 'AA制概率': '70%' }, recommend: '你可以把美食测评结果分享给更多朋友，组织一次美食探店团！' },
    'INTJ': { title: '数据美食家', emoji: 'I', desc: '你是用数据说话的美食家！你会仔细研究每道菜的评分和评价，做出最优的就餐选择。你的收藏策略性很强，只保留真正值得的美食。你是校园版的"米其林评审员"。', traits: { '分析能力': '98%', '评分敏感': '95%', '性价比控': '88%', '理性决策': '92%' }, recommend: '你的分析能力很强，不妨在图片墙上多点赞高质量图片，帮助其他同学做出更好的选择！' }
};

// ===== 全局状态 =====
let currentUser = null;
let currentFoodId = null;
let currentPage = 'home';
let stickerImage = null;
let stickerStyle = 'polaroid';
let pendingUploadFiles = [];

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initLoginPage();
    initNavigation();
    initFilters();
    initSliders();
    initDropzones();
    initStyleSelector();
    initFavTabs();
    initCarousel();
    checkLoginStatus();
});

// ===== 轮播图 =====
function initCarousel() {
    // 静态轮播图，无需初始化
}

// ===== 打开功能页面（新窗口） =====
function openFeaturePage(url) {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
}

// ===== 功能弹窗 =====
let isModalMinimized = false;
let isModalMaximized = false;
let modalOriginalSize = { width: '80%', height: '80%', top: '10%', left: '10%' };

// 功能名称映射
const featureNames = {
    'random': '今天吃什么',
    'mealplan': '一周食谱计划',
    'buddy': '美食搭子匹配',
    'badreview': '避雷吐槽墙',
    'sticker': 'AI测评抠图',
    'mbti': '趣味MBTI测评',
    'cafeteria': '食堂美食测评'
};

function openFeatureModal(page) {
    const modal = document.getElementById('feature-modal');
    const title = document.getElementById('feature-modal-title');
    const body = document.getElementById('feature-modal-body');
    
    // 设置标题
    title.textContent = featureNames[page] || '功能页面';
    
    // 根据页面类型加载内容
    let content = '';
    switch(page) {
        case 'random':
            content = getRandomPageContent();
            break;
        case 'mealplan':
            content = getMealPlanPageContent();
            break;
        case 'buddy':
            content = getBuddyPageContent();
            break;
        case 'badreview':
            content = getBadReviewPageContent();
            break;
        case 'sticker':
            content = getStickerPageContent();
            break;
        case 'mbti':
            content = getMbtiPageContent();
            break;
        case 'cafeteria':
            content = getCafeteriaPageContent();
            break;
        default:
            content = '<p>该功能正在开发中...</p>';
    }
    
    body.innerHTML = content;
    modal.classList.remove('hidden');
    isModalMinimized = false;
    isModalMaximized = false;
    modal.style.width = '80%';
    modal.style.height = '80%';
    modal.style.top = '10%';
    modal.style.left = '10%';
    modal.classList.remove('minimized');
    modal.classList.remove('maximized');
    
    // 根据页面类型初始化功能
    setTimeout(() => {
        initModalFunctionality(page);
    }, 100);
}

function closeFeatureModal() {
    const modal = document.getElementById('feature-modal');
    modal.classList.add('hidden');
}

function minimizeFeatureModal() {
    const modal = document.getElementById('feature-modal');
    if (isModalMinimized) {
        // 恢复
        modal.style.width = modalOriginalSize.width;
        modal.style.height = modalOriginalSize.height;
        modal.style.top = modalOriginalSize.top;
        modal.style.left = modalOriginalSize.left;
        modal.classList.remove('minimized');
        isModalMinimized = false;
    } else {
        // 最小化
        modalOriginalSize = {
            width: modal.style.width,
            height: modal.style.height,
            top: modal.style.top,
            left: modal.style.left
        };
        modal.style.width = '200px';
        modal.style.height = '40px';
        modal.style.top = 'auto';
        modal.style.left = 'auto';
        modal.style.bottom = '20px';
        modal.style.right = '20px';
        modal.classList.add('minimized');
        isModalMinimized = true;
    }
}

function maximizeFeatureModal() {
    const modal = document.getElementById('feature-modal');
    if (isModalMaximized) {
        // 恢复
        modal.style.width = modalOriginalSize.width;
        modal.style.height = modalOriginalSize.height;
        modal.style.top = modalOriginalSize.top;
        modal.style.left = modalOriginalSize.left;
        modal.classList.remove('maximized');
        isModalMaximized = false;
    } else {
        // 最大化
        modalOriginalSize = {
            width: modal.style.width,
            height: modal.style.height,
            top: modal.style.top,
            left: modal.style.left
        };
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.classList.add('maximized');
        isModalMaximized = true;
    }
}

// 获取各功能页面的内容
function getRandomPageContent() {
    return `
        <div class="random-container">
            <button class="random-btn" onclick="drawRandomFood()">随机抽签</button>
            <div id="random-result" class="random-result"></div>
        </div>
    `;
}

function getMealPlanPageContent() {
    return `
        <div class="mealplan-container">
            <div class="mealplan-header">
                <div class="mealplan-weekdays">
                    <div class="weekday-label"></div>
                    <div class="weekday-label">早餐</div>
                    <div class="weekday-label">午餐</div>
                    <div class="weekday-label">晚餐</div>
                </div>
            </div>
            <div class="mealplan-grid" id="modal-mealplan-grid">
                ${['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(day => `
                    <div class="mealplan-row" data-day="${day}">
                        <div class="weekday-name">${day}</div>
                        <div class="meal-slot" data-meal="breakfast" onclick="selectMeal(this, '${day}', 'breakfast')">
                            <span class="meal-placeholder">点击选择</span>
                        </div>
                        <div class="meal-slot" data-meal="lunch" onclick="selectMeal(this, '${day}', 'lunch')">
                            <span class="meal-placeholder">点击选择</span>
                        </div>
                        <div class="meal-slot" data-meal="dinner" onclick="selectMeal(this, '${day}', 'dinner')">
                            <span class="meal-placeholder">点击选择</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getBuddyPageContent() {
    return `
        <div class="buddy-container">
            <div class="buddy-profile">
                <h3>设置你的口味偏好</h3>
                <div class="buddy-tags">
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="吃辣"> 吃辣</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="不吃辣"> 不吃辣</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="爱吃面食"> 爱吃面食</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="爱吃米饭"> 爱吃米饭</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="爱吃甜食"> 爱吃甜食</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="不吃葱"> 不吃葱</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="不吃香菜"> 不吃香菜</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="素食"> 素食</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="低价实惠"> 低价实惠</label>
                    <label class="buddy-tag"><input type="checkbox" name="preference" value="追求品质"> 追求品质</label>
                </div>
                <button class="buddy-match-btn" onclick="matchBuddy()">匹配饭搭子</button>
            </div>
            <div id="buddy-result" class="buddy-result hidden">
                <h3>匹配到的饭搭子</h3>
                <div id="buddy-match-list" class="buddy-match-list"></div>
                <div class="buddy-invite">
                    <button class="buddy-invite-btn" onclick="generateInviteText()">生成邀约文案</button>
                    <p class="buddy-invite-hint">复制文案发送给好友，一起约饭吧！</p>
                </div>
            </div>
        </div>
    `;
}

function getBadReviewPageContent() {
    return `
        <div class="badreview-container">
            <div class="badreview-form">
                <h3>发布避雷吐槽</h3>
                <input type="text" id="modal-badreview-shop" class="badreview-input" placeholder="店铺名称" maxlength="30">
                <textarea id="modal-badreview-content" class="badreview-textarea" placeholder="说说这次踩雷的经历..." maxlength="200"></textarea>
                <div class="badreview-tags">
                    <span class="badreview-tag-label">避雷原因：</span>
                    <label class="badreview-tag"><input type="checkbox" name="badtag" value="分量少"> 分量少</label>
                    <label class="badreview-tag"><input type="checkbox" name="badtag" value="味道差"> 味道差</label>
                    <label class="badreview-tag"><input type="checkbox" name="badtag" value="价格贵"> 价格贵</label>
                    <label class="badreview-tag"><input type="checkbox" name="badtag" value="不新鲜"> 不新鲜</label>
                    <label class="badreview-tag"><input type="checkbox" name="badtag" value="服务差"> 服务差</label>
                </div>
                <button class="badreview-submit" onclick="submitBadReviewFromModal()">发布吐槽</button>
            </div>
            <div class="badreview-list">
                <h3>避雷热榜</h3>
                <div id="modal-badreview-items" class="badreview-items"></div>
            </div>
        </div>
    `;
}

function getStickerPageContent() {
    return `
        <div class="sticker-container">
            <div class="dropzone" id="modal-sticker-dropzone">
                <input type="file" id="modal-sticker-file" accept="image/*" class="file-input">
                <div class="dropzone-content">
                    <div class="dropzone-icon">UP</div>
                    <p class="dropzone-text">拖拽图片到这里，或点击上传</p>
                    <p class="dropzone-hint">支持 JPG、PNG 格式</p>
                </div>
            </div>
            <div id="modal-sticker-preview" class="sticker-preview"></div>
            <div class="style-selector" id="modal-style-selector">
                <h4>选择贴纸风格</h4>
                <div class="style-options">
                    <div class="style-option active" data-style="polaroid">
                        <div class="style-preview polaroid-preview">拍立得</div>
                    </div>
                    <div class="style-option" data-style="circle">
                        <div class="style-preview circle-preview">圆形</div>
                    </div>
                    <div class="style-option" data-style="card">
                        <div class="style-preview card-preview">卡片</div>
                    </div>
                </div>
            </div>
            <div class="sliders-section" id="modal-sliders-section">
                <div class="slider-group">
                    <label>口味评分: <span id="modal-taste-value" class="slider-val">3.0</span></label>
                    <input type="range" id="modal-taste-slider" min="0" max="5" step="0.5" value="3">
                </div>
                <div class="slider-group">
                    <label>分量评分: <span id="modal-portion-value" class="slider-val">3.0</span></label>
                    <input type="range" id="modal-portion-slider" min="0" max="5" step="0.5" value="3">
                </div>
                <div class="slider-group">
                    <label>性价比评分: <span id="modal-value-value" class="slider-val">3.0</span></label>
                    <input type="range" id="modal-value-slider" min="0" max="5" step="0.5" value="3">
                </div>
                <div class="slider-group">
                    <label>评论文字: <span class="slider-hint">(选填，最多20字)</span></label>
                    <input type="text" id="modal-sticker-comment" class="sticker-comment-input" placeholder="写点评价吧..." maxlength="20">
                </div>
                <button class="generate-btn" id="modal-generate-btn" onclick="generateStickerFromModal()">
                    <span class="btn-icon">AI</span> AI智能抠图生成
                </button>
            </div>
            <div id="modal-ai-processing" class="ai-processing hidden">
                <div class="ai-spinner"></div>
                <p class="ai-text">AI正在智能抠图中...</p>
                <div class="ai-steps">
                    <div class="ai-step" id="modal-ai-step-1">识别美食区域</div>
                    <div class="ai-step" id="modal-ai-step-2">智能抠图处理</div>
                    <div class="ai-step" id="modal-ai-step-3">生成测评贴纸</div>
                </div>
            </div>
            <canvas id="modal-sticker-canvas" class="sticker-canvas"></canvas>
            <div id="modal-sticker-result" class="sticker-result"></div>
        </div>
    `;
}

function getMbtiPageContent() {
    return `
        <div class="mbti-container">
            <div class="mbti-intro" id="modal-mbti-intro">
                <h3>你的美食人格是什么？</h3>
                <p>基于你的收藏偏好，AI将分析你的美食口味、就餐习惯、探索精神，为你生成专属的美食MBTI人格报告！</p>
                <button class="mbti-start-btn" onclick="startMbtiTestFromModal()">开始测评</button>
            </div>
            <div id="modal-mbti-result" class="mbti-result hidden"></div>
        </div>
    `;
}

function getCafeteriaPageContent() {
    return `
        <div class="filter-tabs">
            <button class="filter-tab active" data-canteen="all">全部</button>
            <button class="filter-tab" data-canteen="1">第一食堂</button>
            <button class="filter-tab" data-canteen="2">第二食堂</button>
            <button class="filter-tab" data-canteen="3">第三食堂</button>
            <button class="filter-tab" data-canteen="4">第四食堂</button>
        </div>
        <div class="food-grid" id="modal-cafeteria-food-grid"></div>
    `;
}

// 初始化弹窗内的功能
function initModalFunctionality(page) {
    switch(page) {
        case 'mealplan':
            renderMealPlan();
            break;
        case 'badreview':
            renderBadReviews();
            break;
        case 'sticker':
            initModalStickerDropzone();
            initModalStyleSelector();
            initModalSliders();
            break;
        case 'cafeteria':
            initModalCafeteriaFilters();
            renderCafeteria('all');
            break;
    }
}

// 弹窗内食谱计划相关
function selectMeal(slotEl, day, meal) {
    currentMealSlot = { day, meal, element: slotEl };
    const favorites = Storage.get('mjufav_spa');
    const favFoods = foodData.filter(f => favorites.includes(f.id));

    if (favFoods.length === 0) {
        showToast('请先收藏一些美食再来安排食谱吧！');
        return;
    }

    const modal = document.getElementById('feature-modal');
    modal.style.display = 'none';
    
    const overlay = document.createElement('div');
    overlay.className = 'meal-select-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:10001;';
    overlay.onclick = () => {
        modal.style.display = 'block';
        document.body.removeChild(overlay);
    };
    document.body.appendChild(overlay);

    const grid = document.createElement('div');
    grid.className = 'meal-select-grid-modal';
    grid.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:16px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;z-index:10002;';
    grid.innerHTML = `
        <h3 id="meal-select-title">${day} ${getMealName(meal)}</h3>
        <p style="color:#6c757d;margin-bottom:15px;">从你的收藏中选择：</p>
        <div class="meal-select-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;">
            ${favFoods.map(food => `
                <div class="meal-select-item" style="border:1px solid #e9ecef;padding:10px;border-radius:8px;cursor:pointer;text-align:center;" onclick="confirmMealSelect(${food.id})">
                    <div style="font-size:2rem;margin-bottom:5px;">${food.emoji || 'F'}</div>
                    <div style="font-size:0.9rem;font-weight:500;">${food.name}</div>
                    <div style="color:#ffc107;">${'★'.repeat(Math.floor(food.rating))}</div>
                </div>
            `).join('')}
        </div>
        <button onclick="this.closest('.meal-select-grid-modal').previousElementSibling ? this.closest('.meal-select-grid-modal').previousElementSibling.click() : (document.body.removeChild(this.closest('.meal-select-grid-modal')), document.querySelector('.meal-select-overlay')?.click())" style="margin-top:15px;padding:8px 20px;background:#ff6b35;color:white;border:none;border-radius:8px;cursor:pointer;">关闭</button>
    `;
    document.body.appendChild(grid);
}

function submitBadReviewFromModal() {
    const shop = document.getElementById('modal-badreview-shop').value.trim();
    const content = document.getElementById('modal-badreview-content').value.trim();
    const tags = Array.from(document.querySelectorAll('#modal-badreview-content')).map(cb => cb.value);

    if (!shop) { showToast('请输入店铺名称'); return; }
    if (!content) { showToast('请输入吐槽内容'); return; }

    const reviews = Storage.get('mjufav_badreviews') || [];
    reviews.unshift({
        id: Date.now(),
        shop,
        content,
        tags: Array.from(document.querySelectorAll('input[name="badtag"]:checked')).map(cb => cb.value),
        likes: 0,
        date: new Date().toLocaleDateString()
    });
    Storage.set('mjufav_badreviews', reviews);

    document.getElementById('modal-badreview-shop').value = '';
    document.getElementById('modal-badreview-content').value = '';
    document.querySelectorAll('input[name="badtag"]').forEach(cb => cb.checked = false);

    renderBadReviews();
    showToast('吐槽发布成功！');
}

// 弹窗内贴纸相关
let modalStickerImage = null;
let modalStickerStyle = 'polaroid';

function initModalStickerDropzone() {
    const dropzone = document.getElementById('modal-sticker-dropzone');
    const input = document.getElementById('modal-sticker-file');
    if (!dropzone || !input) return;

    dropzone.addEventListener('click', () => input.click());
    input.addEventListener('change', (e) => { if (e.target.files.length) handleModalStickerUpload(e.target.files[0]); });
}

function handleModalStickerUpload(file) {
    if (!file || !file.type.startsWith('image/')) { showToast('请上传图片文件'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        modalStickerImage = new Image();
        modalStickerImage.onload = () => {
            document.getElementById('modal-sticker-preview').innerHTML = `<img src="${e.target.result}" alt="预览">`;
            document.getElementById('modal-style-selector').classList.remove('hidden');
            document.getElementById('modal-sliders-section').classList.remove('hidden');
        };
        modalStickerImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function initModalStyleSelector() {
    document.querySelectorAll('#modal-style-selector .style-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('#modal-style-selector .style-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            modalStickerStyle = opt.dataset.style;
        });
    });
}

function initModalSliders() {
    ['taste', 'portion', 'value'].forEach(type => {
        const slider = document.getElementById(`modal-${type}-slider`);
        const value = document.getElementById(`modal-${type}-value`);
        if (slider && value) {
            slider.addEventListener('input', () => { value.textContent = parseFloat(slider.value).toFixed(1); });
        }
    });
}

function generateStickerFromModal() {
    if (!modalStickerImage) { showToast('请先上传图片'); return; }

    const taste = parseFloat(document.getElementById('modal-taste-slider').value);
    const portion = parseFloat(document.getElementById('modal-portion-slider').value);
    const value = parseFloat(document.getElementById('modal-value-slider').value);
    const comment = document.getElementById('modal-sticker-comment').value.trim();

    document.getElementById('modal-ai-processing').classList.remove('hidden');
    document.getElementById('modal-generate-btn').disabled = true;

    const steps = ['modal-ai-step-1', 'modal-ai-step-2', 'modal-ai-step-3'];
    steps.forEach(s => { document.getElementById(s).className = 'ai-step'; });

    setTimeout(() => document.getElementById('modal-ai-step-1').className = 'ai-step active', 300);
    setTimeout(() => { document.getElementById('modal-ai-step-1').className = 'ai-step done'; document.getElementById('modal-ai-step-2').className = 'ai-step active'; }, 1000);
    setTimeout(() => { document.getElementById('modal-ai-step-2').className = 'ai-step done'; document.getElementById('modal-ai-step-3').className = 'ai-step active'; }, 1800);
    setTimeout(() => {
        document.getElementById('modal-ai-step-3').className = 'ai-step done';
        document.getElementById('modal-ai-processing').classList.add('hidden');
        document.getElementById('modal-generate-btn').disabled = false;
        renderModalSticker(taste, portion, value, comment);
    }, 2600);
}

function renderModalSticker(taste, portion, value, comment) {
    const canvas = document.getElementById('modal-sticker-canvas');
    const ctx = canvas.getContext('2d');

    if (modalStickerStyle === 'polaroid') renderModalPolaroid(ctx, canvas, taste, portion, value, comment);
    else if (modalStickerStyle === 'circle') renderModalCircle(ctx, canvas, taste, portion, value, comment);
    else renderModalCard(ctx, canvas, taste, portion, value, comment);

    const dataUrl = canvas.toDataURL('image/png');

    const stickers = Storage.get('mjufav_stickers');
    stickers.push({ id: Date.now(), src: dataUrl, date: new Date().toLocaleDateString(), taste, portion, value, comment });
    Storage.set('mjufav_stickers', stickers);

    const result = document.getElementById('modal-sticker-result');
    result.innerHTML = `
        <img src="${dataUrl}" alt="测评贴纸">
        <div class="sticker-result-actions">
            <button class="sticker-result-btn" onclick="downloadModalSticker()">保存图片</button>
        </div>
        <p>贴纸已自动保存到收藏页</p>`;
    showToast('测评贴纸生成成功！');
}

function downloadModalSticker() {
    const canvas = document.getElementById('modal-sticker-canvas');
    const link = document.createElement('a');
    link.download = `舌尖闽大测评_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('图片已开始下载！');
}

function renderModalPolaroid(ctx, canvas, taste, portion, value, comment) {
    const maxW = 500, pad = 40, bottom = 160;
    const scale = Math.min(1, maxW / modalStickerImage.width);
    const w = modalStickerImage.width * scale, h = modalStickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom;

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 20;
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.shadowBlur = 0;
    ctx.drawImage(modalStickerImage, pad, pad, w, h);

    ctx.fillStyle = '#1a1a2e';
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barStartY = h + pad + 50;
    const barW = 180, barH = 14, startX = (canvas.width - barW) / 2;
    ratings.forEach((r, i) => {
        const y = barStartY + i * 30;
        ctx.fillStyle = '#1a1a2e'; ctx.font = '13px "Segoe UI", sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(r.label, startX - 8, y + 11);
        ctx.fillStyle = '#e9ecef'; ctx.fillRect(startX, y, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(startX, y, barW * (r.val / 5), barH);
        ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 13px "Segoe UI", sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(`${r.val}分`, startX + barW + 8, y + 11);
    });
}

function renderModalCircle(ctx, canvas, taste, portion, value, comment) {
    const size = 500;
    canvas.width = size;
    canvas.height = size + 120;

    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#667eea');
    grad.addColorStop(1, '#764ba2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = size / 2, cy = size / 2, r = 200;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();
    const scale = Math.max(r * 2 / modalStickerImage.width, r * 2 / modalStickerImage.height);
    const iw = modalStickerImage.width * scale, ih = modalStickerImage.height * scale;
    ctx.drawImage(modalStickerImage, cx - iw / 2, cy - ih / 2, iw, ih);
    ctx.restore();

    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.fillRect(0, size, size, 120);

    const avg = ((taste + portion + value) / 3).toFixed(1);
    ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 16px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', size / 2, size + 25);
    ctx.font = 'bold 28px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}分`, size / 2, size + 65);
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = '#6c757d';
    ctx.fillText(`口味${taste} | 分量${portion} | 性价比${value}`, size / 2, size + 90);
}

function renderModalCard(ctx, canvas, taste, portion, value, comment) {
    const maxW = 480, pad = 20, bottom = 140;
    const scale = Math.min(1, maxW / modalStickerImage.width);
    const w = modalStickerImage.width * scale, h = modalStickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom;

    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#1a1a2e');
    grad.addColorStop(1, '#2d2d44');
    ctx.fillStyle = grad;
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 16);
    ctx.fill();

    ctx.save();
    roundRect(ctx, pad, pad, w, h, 12);
    ctx.clip();
    ctx.drawImage(modalStickerImage, pad, pad, w, h);
    ctx.restore();

    ctx.fillStyle = '#fff'; ctx.font = 'bold 18px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    const avg = ((taste + portion + value) / 3).toFixed(1);
    const ratingY = h + pad + 70;
    ctx.font = 'bold 32px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}`, canvas.width / 2, ratingY);
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('综合评分', canvas.width / 2, ratingY + 18);

    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barY = h + pad + 105;
    const barW = 100, barH = 8, gap = (canvas.width - barW * 3) / 4;
    ratings.forEach((r, i) => {
        const x = gap + i * (barW + gap);
        ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(x, barY, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(x, barY, barW * (r.val / 5), barH);
        ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = '10px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(`${r.label} ${r.val}`, x + barW / 2, barY + barH + 14);
    });
}

// 弹窗内MBTI相关
function startMbtiTestFromModal() {
    const favorites = Storage.get('mjufav_spa');
    if (favorites.length === 0) {
        showToast('至少收藏1个美食才能进行测评哦~');
        return;
    }

    const favFoods = foodData.filter(f => favorites.includes(f.id));

    const cafeteriaCount = favFoods.filter(f => f.type === 'cafeteria').length;
    const offcampusCount = favFoods.filter(f => f.type === 'offcampus').length;
    const avgRating = favFoods.reduce((s, f) => s + f.rating, 0) / favFoods.length;
    const canteens = new Set(favFoods.filter(f => f.canteen).map(f => f.canteen));
    const diversity = canteens.size;

    let type = 'EFNP';
    const E = offcampusCount >= cafeteriaCount;
    const S = diversity <= 1;
    const T = avgRating >= 4.3;
    const J = favorites.length <= 3;

    if (E && !S && T && !J) type = 'ENTJ';
    else if (E && !S && !T && !J) type = 'ESTP';
    else if (E && !S && !T && J) type = 'ENFP';
    else if (!E && S && !T && !J) type = 'INFP';
    else if (!E && S && T && J) type = 'ISTJ';
    else if (!E && !S && T && !J) type = 'INTJ';
    else if (!E && !S && !T && !J) type = 'ISFP';

    const mbti = foodMBTI[type];
    const resultDiv = document.getElementById('modal-mbti-result');
    resultDiv.innerHTML = `
        <div class="mbti-result-header">
            <div class="mbti-type">${type}</div>
            <div class="mbti-title">${mbti.title}</div>
        </div>
        <div class="mbti-result-body">
            <p class="mbti-desc">${mbti.desc}</p>
            <div class="mbti-traits">
                ${Object.entries(mbti.traits).map(([k, v]) => `<div class="mbti-trait"><div class="mbti-trait-label">${k}</div><div class="mbti-trait-value">${v}</div></div>`).join('')}
            </div>
            <div class="mbti-recommend">
                <h4>AI推荐</h4>
                <p>${mbti.recommend}</p>
            </div>
            <div class="mbti-share">
                <button class="mbti-share-btn" onclick="shareMbti('${type}', '${mbti.title}')">分享我的美食人格</button>
            </div>
        </div>`;

    document.getElementById('modal-mbti-intro').classList.add('hidden');
    resultDiv.classList.remove('hidden');
}

// 弹窗内食堂筛选
function initModalCafeteriaFilters() {
    document.querySelectorAll('#modal-cafeteria-food-grid').forEach?.();
    document.querySelectorAll('#feature-modal-body .filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#feature-modal-body .filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderModalCafeteria(tab.dataset.canteen);
        });
    });
}

function renderModalCafeteria(canteen) {
    let filtered = foodData.filter(f => f.type === 'cafeteria');
    if (canteen !== 'all') filtered = filtered.filter(f => f.canteen === canteen);
    
    const container = document.getElementById('modal-cafeteria-food-grid');
    if (!container) return;
    
    container.innerHTML = filtered.map(food => `
        <div class="food-card" onclick="openDetail(${food.id})">
            ${food.image ? `<img src="${food.image}" alt="${food.name}" class="food-image" loading="lazy">` : `<div class="food-image-placeholder">${food.emoji}</div>`}
            <div class="food-content">
                <div class="food-name">${food.name}</div>
                <div class="food-rating">
                    <span class="stars">${'★'.repeat(Math.floor(food.rating))}${'☆'.repeat(5 - Math.floor(food.rating))}</span>
                    <span class="rating-tag ${food.rating >= 4.5 ? 'excellent' : 'good'}">${food.tag} · ${food.rating}星</span>
                </div>
                <div class="food-review">${food.review}</div>
                <div class="food-footer">
                    <span class="food-reviewer">${food.reviewer}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 覆盖原来的renderMealPlan以支持弹窗
const originalRenderMealPlan = renderMealPlan;
renderMealPlan = function() {
    const plan = Storage.get('mjufav_mealplan') || {};
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const meals = ['breakfast', 'lunch', 'dinner'];

    days.forEach(day => {
        const row = document.querySelector(`.mealplan-row[data-day="${day}"]`) || document.querySelector(`#modal-mealplan-grid .mealplan-row[data-day="${day}"]`);
        if (!row) return;
        meals.forEach(meal => {
            const slot = row.querySelector(`.meal-slot[data-meal="${meal}"]`);
            if (!slot) return;
            const key = `${day}_${meal}`;
            const foodId = plan[key];
            if (foodId) {
                const food = foodData.find(f => f.id === foodId);
                if (food) {
                    slot.innerHTML = `<span class="meal-name">${food.name}</span>`;
                    slot.classList.add('has-food');
                } else {
                    slot.innerHTML = '<span class="meal-placeholder">点击选择</span>';
                    slot.classList.remove('has-food');
                }
            } else {
                slot.innerHTML = '<span class="meal-placeholder">点击选择</span>';
                slot.classList.remove('has-food');
            }
        });
    });
};

// 覆盖原来的renderBadReviews以支持弹窗
const originalRenderBadReviews = renderBadReviews;
renderBadReviews = function() {
    const reviews = Storage.get('mjufav_badreviews') || [];
    const container = document.getElementById('badreview-items') || document.getElementById('modal-badreview-items');

    if (!container) return;

    if (reviews.length === 0) {
        container.innerHTML = '<p class="empty-hint">暂无避雷吐槽，快来发布第一条吧！</p>';
        return;
    }

    reviews.sort((a, b) => b.likes - a.likes);

    container.innerHTML = reviews.map(review => `
        <div class="badreview-card">
            <div class="badreview-header">
                <span class="badreview-shop-name">${review.shop}</span>
                <span class="badreview-date">${review.date}</span>
            </div>
            <div class="badreview-content">${review.content}</div>
            <div class="badreview-footer">
                <div class="badreview-tags-small">
                    ${review.tags.map(t => `<span class="badreview-tag-chip">${t}</span>`).join('')}
                </div>
                <button class="badreview-like-btn" onclick="likeBadReview(${review.id})">
                    + <span>${review.likes}</span>
                </button>
            </div>
        </div>
    `).join('');
};

// 让弹窗可以拖拽
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('feature-modal');
    const header = document.querySelector('.feature-modal-header');
    
    if (header && modal) {
        let isDragging = false;
        let offsetX, offsetY;

        header.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
            isDragging = true;
            offsetX = e.clientX - modal.offsetLeft;
            offsetY = e.clientY - modal.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || modal.classList.contains('minimized') || modal.classList.contains('maximized')) return;
            modal.style.left = (e.clientX - offsetX) + 'px';
            modal.style.top = (e.clientY - offsetY) + 'px';
            modal.style.right = 'auto';
            modal.style.bottom = 'auto';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
});

// ===== 登录页面交互 =====
function initLoginPage() {
    document.querySelectorAll('.food-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            icon.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
        });
        icon.addEventListener('mouseleave', () => { icon.style.transform = ''; });
    });
}

// ===== 登录/注册 =====
function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    if (!username) { showToast('请输入学号/昵称'); return; }
    login(username);
}

function handleRegister() {
    const username = document.getElementById('login-username').value.trim();
    if (!username) { showToast('请输入学号/昵称'); return; }
    login(username);
    showToast('注册成功！欢迎加入干饭大军');
}

function login(username) {
    currentUser = username;
    localStorage.setItem('mjufav_user', username);
    document.getElementById('current-user').textContent = username;
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderHome();
    showToast(`欢迎回来，${username}！`);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('mjufav_user');
    document.getElementById('app').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
}

function checkLoginStatus() {
    const saved = localStorage.getItem('mjufav_user');
    if (saved) login(saved);
}

// ===== 导航 =====
function initNavigation() {
    // 导航链接已经在HTML中通过onclick绑定，这里只需要确保默认行为被阻止
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // onclick已经在HTML中处理，这里只阻止默认行为
            e.preventDefault();
        });
    });
}

function switchPage(page) {
    console.log('switchPage 被调用:', page);
    
    // 验证页面参数
    if (!page) {
        console.error('switchPage: page parameter is missing');
        return;
    }
    
    currentPage = page;
    
    // 更新导航栏激活状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    
    // 切换页面显示
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${page}`);
    
    console.log('目标页面元素:', targetPage);
    
    if (!targetPage) {
        console.error(`switchPage: page-${page} not found in DOM`);
        return;
    }
    
    targetPage.classList.add('active');
    console.log('页面已切换到:', page);
    
    // 根据页面类型渲染内容
    try {
        switch(page) {
            case 'home': 
                renderHome(); 
                break;
            case 'cafeteria': 
                renderCafeteria('all'); 
                break;
            case 'offcampus': 
                renderOffCampus('all'); 
                break;
            case 'favorites': 
                renderFavorites(); 
                break;
            case 'mealplan': 
                renderMealPlan(); 
                break;
            case 'badreview': 
                renderBadReviews(); 
                break;
            case 'sticker':
            case 'buddy':
            case 'mbti':
            case 'random':
                console.log('页面无需特殊渲染:', page);
                break;
        }
    } catch (error) {
        console.error('switchPage: error rendering page:', error);
    }
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// ===== 筛选器 =====
function initFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCafeteria(tab.dataset.canteen);
        });
    });
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderOffCampus(btn.dataset.sort);
        });
    });
}

// ===== 收藏页标签 =====
function initFavTabs() {
    document.querySelectorAll('.fav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.fav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.tab === 'foods') {
                document.getElementById('favorites-food-grid').classList.remove('hidden');
                document.getElementById('favorites-sticker-grid').classList.add('hidden');
                renderFavorites();
            } else {
                document.getElementById('favorites-food-grid').classList.add('hidden');
                document.getElementById('favorites-sticker-grid').classList.remove('hidden');
                renderStickerGallery();
            }
        });
    });
}

// ===== 渲染美食卡片 =====
function renderFoodCard(food) {
    const favorites = Storage.get('mjufav_spa');
    const isFav = favorites.includes(food.id);
    const tagClass = food.rating >= 4.5 ? 'excellent' : food.rating >= 3 ? 'good' : 'bad';
    const imageHtml = food.image
        ? `<img src="${food.image}" alt="${food.name}" class="food-image" loading="lazy">`
        : `<div class="food-image-placeholder">${food.emoji}</div>`;
    return `
        <div class="food-card" onclick="openDetail(${food.id})">
            ${imageHtml}
            <div class="food-content">
                <div class="food-name">${food.name}</div>
                <div class="food-rating">
                    <span class="stars">${'★'.repeat(Math.floor(food.rating))}${'☆'.repeat(5 - Math.floor(food.rating))}</span>
                    <span class="rating-tag ${tagClass}">${food.tag} · ${food.rating}星</span>
                </div>
                <div class="food-review">${food.review}</div>
                <div class="food-footer">
                    <span class="food-reviewer">${food.reviewer}</span>
                    <button class="favorite-btn-card ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${food.id}, this)" title="${isFav ? '取消收藏' : '收藏'}">
                        ${isFav ? '★' : '☆'}
                    </button>
                </div>
            </div>
        </div>`;
}

function renderFoodGrid(containerId, foods) {
    const container = document.getElementById(containerId);
    if (foods.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">?</div><p>暂无美食数据</p></div>';
        return;
    }
    container.innerHTML = foods.map(renderFoodCard).join('');
}

// ===== 首页 =====
function renderHome() {
    // 只显示有图片且非待解锁的热门美食，最多显示6个
    const topFoods = foodData
        .filter(f => f.image && f.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    renderFoodGrid('home-food-grid', topFoods);
}

// ===== 食堂 =====
function renderCafeteria(canteen) {
    let filtered = foodData.filter(f => f.type === 'cafeteria');
    if (canteen !== 'all') filtered = filtered.filter(f => f.canteen === canteen);
    renderFoodGrid('cafeteria-food-grid', filtered);
}

// ===== 校外 =====
function renderOffCampus(sort) {
    let filtered = foodData.filter(f => f.type === 'offcampus');
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    renderFoodGrid('offcampus-food-grid', filtered);
}

// ===== 收藏 =====
function renderFavorites() {
    const favorites = Storage.get('mjufav_spa');
    const favFoods = foodData.filter(f => favorites.includes(f.id));
    if (favFoods.length === 0) {
        document.getElementById('favorites-food-grid').innerHTML = '<div class="empty-state"><div class="empty-icon">?</div><p>还没有收藏任何美食哦~</p><p>快去首页发现美食吧！</p></div>';
    } else {
        renderFoodGrid('favorites-food-grid', favFoods);
    }
}

function toggleFavorite(foodId, btnEl) {
    let favorites = Storage.get('mjufav_spa');
    const index = favorites.indexOf(foodId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('已取消收藏');
    } else {
        favorites.push(foodId);
        showToast('收藏成功！');
    }
    Storage.set('mjufav_spa', favorites);
    if (btnEl) { btnEl.classList.add('heart-pop'); setTimeout(() => btnEl.classList.remove('heart-pop'), 300); }
    refreshCurrentPage();
}

function toggleFavoriteFromModal() {
    if (currentFoodId) {
        toggleFavorite(currentFoodId);
        updateModalFavoriteState();
    }
}

function updateModalFavoriteState() {
    const favorites = Storage.get('mjufav_spa');
    const btn = document.getElementById('detail-favorite');
    const isFav = favorites.includes(currentFoodId);
    btn.classList.toggle('active', isFav);
    btn.textContent = isFav ? '★ 已收藏' : '★ 收藏';
}

function refreshCurrentPage() {
    switch(currentPage) {
        case 'home': renderHome(); break;
        case 'favorites': renderFavorites(); break;
        case 'cafeteria': renderCafeteria(document.querySelector('.filter-tab.active')?.dataset.canteen || 'all'); break;
        case 'offcampus': renderOffCampus(document.querySelector('.sort-btn.active')?.dataset.sort || 'all'); break;
    }
}

// ===== 分享 =====
function shareFood() {
    const food = foodData.find(f => f.id === currentFoodId);
    if (!food) return;
    const text = `【舌尖上的闽大】${food.name} ${'★'.repeat(Math.floor(food.rating))} - "${food.review}"`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('分享文案已复制到剪贴板！'));
    } else {
        showToast('分享：' + text);
    }
}

// ===== 详情弹窗 =====
function openDetail(foodId) {
    const food = foodData.find(f => f.id === foodId);
    if (!food) return;
    currentFoodId = foodId;
    pendingUploadFiles = [];

    // 大图
    document.getElementById('detail-hero').innerHTML = food.image
        ? `<img src="${food.image}" alt="${food.name}">`
        : '';

    document.getElementById('detail-name').textContent = food.name;
    document.getElementById('detail-rating').innerHTML = `
        <span class="stars" style="font-size:1.2rem">${'★'.repeat(Math.floor(food.rating))}${'☆'.repeat(5 - Math.floor(food.rating))}</span>
        <span class="rating-tag ${food.rating >= 4.5 ? 'excellent' : food.rating >= 3 ? 'good' : 'bad'}">${food.tag} · ${food.rating}星</span>`;
    document.getElementById('detail-review').textContent = food.review;
    document.getElementById('detail-reviewer').textContent = food.reviewer;
    document.getElementById('upload-preview-list').innerHTML = '';

    updateModalFavoriteState();
    renderImageWall(foodId);
    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
    currentFoodId = null;
}

document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-modal')) closeModal();
});

// ===== 拖拽上传 =====
function initDropzones() {
    // 详情页拖拽上传
    setupDropzone('detail-dropzone', 'detail-file', (files) => {
        files.forEach(file => handleImageUpload(file, currentFoodId));
    });

    // 贴纸页拖拽上传
    setupDropzone('sticker-dropzone', 'sticker-file', (files) => {
        handleStickerUpload(files[0]);
    });
}

function setupDropzone(dropzoneId, inputId, onFiles) {
    const dropzone = document.getElementById(dropzoneId);
    const input = document.getElementById(inputId);
    if (!dropzone || !input) return;

    dropzone.addEventListener('click', () => input.click());
    input.addEventListener('change', (e) => { if (e.target.files.length) onFiles(Array.from(e.target.files)); input.value = ''; });

    dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        if (e.dataTransfer.files.length) onFiles(Array.from(e.dataTransfer.files));
    });
}

// ===== 图片上传 =====
function handleImageUpload(file, foodId) {
    if (!file || !foodId) return;
    const banned = Storage.get('banned_users');
    if (banned.includes(currentUser)) { showToast('你已被封禁，无法上传图片'); return; }
    if (!file.type.match(/image\/(jpeg|png)/)) { showToast('请上传 JPG/PNG 格式的图片'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast('图片大小不能超过5MB'); return; }

    // 显示预览
    const previewList = document.getElementById('upload-preview-list');
    const reader = new FileReader();
    reader.onload = (e) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'upload-preview-item';
        previewItem.innerHTML = `<img src="${e.target.result}" alt="预览">`;
        previewList.appendChild(previewItem);

        const images = Storage.get('food_images');
        images.push({
            id: Date.now() + Math.random(),
            foodId: foodId,
            src: e.target.result,
            author: currentUser || '匿名用户',
            likes: 0,
            reports: 0,
            hidden: false
        });
        Storage.set('food_images', images);
        showToast('图片上传成功！');
        renderImageWall(foodId);
    };
    reader.readAsDataURL(file);
}

// ===== 图片墙 =====
function renderImageWall(foodId) {
    const images = Storage.get('food_images').filter(img => img.foodId === foodId && !img.hidden);
    images.sort((a, b) => b.likes - a.likes);
    const container = document.getElementById('image-wall-list');
    document.getElementById('image-count').textContent = images.length > 0 ? `${images.length}张` : '';

    if (images.length === 0) {
        container.innerHTML = '<p style="color: var(--gray); text-align: center; grid-column: 1/-1;">暂无图片，快来上传第一张吧！</p>';
        return;
    }

    container.innerHTML = images.map(img => `
        <div class="image-item" onclick="previewImage('${img.src.replace(/'/g, "\\'")}')">
            <img src="${img.src}" alt="美食图片" loading="lazy">
            <div class="image-item-info">
                <div class="image-item-author">${img.author}</div>
                <div class="image-item-actions">
                    <button class="like-btn" onclick="event.stopPropagation(); likeImage(${img.id})">+ <span class="like-count">${img.likes}</span></button>
                    <button class="report-btn" onclick="event.stopPropagation(); reportImage(${img.id})">!</button>
                </div>
            </div>
        </div>`).join('');
}

function likeImage(imageId) {
    const images = Storage.get('food_images');
    const img = images.find(i => i.id === imageId);
    if (img) { img.likes++; Storage.set('food_images', images); renderImageWall(currentFoodId); showToast('点赞成功！'); }
}

function reportImage(imageId) {
    if (!confirm('确定要举报这张图片吗？')) return;
    const images = Storage.get('food_images');
    const img = images.find(i => i.id === imageId);
    if (!img) return;
    const reports = Storage.get('report_records');
    const reportKey = `${currentUser}_${imageId}`;
    if (reports.includes(reportKey)) { showToast('你已经举报过这张图片了'); return; }
    reports.push(reportKey);
    Storage.set('report_records', reports);
    img.reports++;
    if (img.reports >= 3) {
        img.hidden = true;
        const banned = Storage.get('banned_users');
        if (!banned.includes(img.author)) { banned.push(img.author); Storage.set('banned_users', banned); showToast(`图片已被隐藏，上传者 ${img.author} 已被封禁`); }
    } else { showToast(`举报成功，该图片已被举报 ${img.reports}/3 次`); }
    Storage.set('food_images', images);
    renderImageWall(currentFoodId);
}

// ===== 图片预览 =====
function previewImage(src) {
    document.getElementById('preview-image').src = src;
    document.getElementById('image-preview-modal').classList.remove('hidden');
}

function closeImagePreview() {
    document.getElementById('image-preview-modal').classList.add('hidden');
}

document.getElementById('image-preview-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('image-preview-modal')) closeImagePreview();
});

// ===== 风格选择 =====
function initStyleSelector() {
    document.querySelectorAll('.style-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.style-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            stickerStyle = opt.dataset.style;
        });
    });
}

// ===== 测评抠图 =====
function initSliders() {
    ['taste', 'portion', 'value'].forEach(type => {
        const slider = document.getElementById(`${type}-slider`);
        const value = document.getElementById(`${type}-value`);
        slider.addEventListener('input', () => { value.textContent = parseFloat(slider.value).toFixed(1); });
    });
}

function handleStickerUpload(file) {
    if (!file || !file.type.startsWith('image/')) { showToast('请上传图片文件'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        stickerImage = new Image();
        stickerImage.onload = () => {
            document.getElementById('sticker-preview').innerHTML = `<img src="${e.target.result}" alt="预览">`;
            document.getElementById('style-selector').classList.remove('hidden');
            document.getElementById('sliders-section').classList.remove('hidden');
        };
        stickerImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function generateSticker() {
    if (!stickerImage) { showToast('请先上传图片'); return; }

    const taste = parseFloat(document.getElementById('taste-slider').value);
    const portion = parseFloat(document.getElementById('portion-slider').value);
    const value = parseFloat(document.getElementById('value-slider').value);
    const comment = document.getElementById('sticker-comment').value.trim();

    // 显示AI处理动画
    document.getElementById('ai-processing').classList.remove('hidden');
    document.getElementById('generate-btn').disabled = true;

    const steps = ['ai-step-1', 'ai-step-2', 'ai-step-3'];
    steps.forEach(s => { document.getElementById(s).className = 'ai-step'; });

    setTimeout(() => document.getElementById('ai-step-1').className = 'ai-step active', 300);
    setTimeout(() => { document.getElementById('ai-step-1').className = 'ai-step done'; document.getElementById('ai-step-2').className = 'ai-step active'; }, 1000);
    setTimeout(() => { document.getElementById('ai-step-2').className = 'ai-step done'; document.getElementById('ai-step-3').className = 'ai-step active'; }, 1800);
    setTimeout(() => {
        document.getElementById('ai-step-3').className = 'ai-step done';
        document.getElementById('ai-processing').classList.add('hidden');
        document.getElementById('generate-btn').disabled = false;
        renderSticker(taste, portion, value, comment);
    }, 2600);
}

function renderSticker(taste, portion, value, comment) {
    const canvas = document.getElementById('sticker-canvas');
    const ctx = canvas.getContext('2d');

    if (stickerStyle === 'polaroid') renderPolaroid(ctx, canvas, taste, portion, value, comment);
    else if (stickerStyle === 'circle') renderCircle(ctx, canvas, taste, portion, value, comment);
    else renderCard(ctx, canvas, taste, portion, value, comment);

    const dataUrl = canvas.toDataURL('image/png');

    // 保存到收藏
    const stickers = Storage.get('mjufav_stickers');
    stickers.push({ id: Date.now(), src: dataUrl, date: new Date().toLocaleDateString(), taste, portion, value, comment });
    Storage.set('mjufav_stickers', stickers);

    const result = document.getElementById('sticker-result');
    result.innerHTML = `
        <img src="${dataUrl}" alt="测评贴纸">
        <div class="sticker-result-actions">
            <button class="sticker-result-btn" onclick="downloadSticker()">保存图片</button>
            <button class="sticker-result-btn accent" onclick="switchPage('favorites'); document.querySelector('[data-tab=stickers]').click();">查看收藏</button>
        </div>
        <p>贴纸已自动保存到收藏页</p>`;
    showToast('测评贴纸生成成功！');
}

function renderPolaroid(ctx, canvas, taste, portion, value, comment) {
    const maxW = 500, pad = 40, bottom = 160;
    const commentOffset = comment ? 30 : 0;
    const scale = Math.min(1, maxW / stickerImage.width);
    const w = stickerImage.width * scale, h = stickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom + commentOffset;

    // 白色背景
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 阴影效果
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 20;
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.shadowBlur = 0;

    // 图片
    ctx.drawImage(stickerImage, pad, pad, w, h);

    // 底部文字
    ctx.fillStyle = '#1a1a2e';
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    // 评论文字
    if (comment) {
        ctx.fillStyle = '#ff6b35';
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillText(`"${comment}"`, canvas.width / 2, h + pad + 50);
    }

    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barStartY = h + pad + 50 + (comment ? 35 : 15);
    const barW = 180, barH = 14, startX = (canvas.width - barW) / 2;
    ratings.forEach((r, i) => {
        const y = barStartY + i * 30;
        ctx.fillStyle = '#1a1a2e'; ctx.font = '13px "Segoe UI", sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(r.label, startX - 8, y + 11);
        ctx.fillStyle = '#e9ecef'; ctx.fillRect(startX, y, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(startX, y, barW * (r.val / 5), barH);
        ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 13px "Segoe UI", sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(`${r.val}分`, startX + barW + 8, y + 11);
    });
}

function renderCircle(ctx, canvas, taste, portion, value, comment) {
    const size = 500;
    const commentOffset = comment ? 30 : 0;
    canvas.width = size;
    canvas.height = size + 120 + commentOffset;

    // 背景
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#667eea');
    grad.addColorStop(1, '#764ba2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 圆形裁剪
    const cx = size / 2, cy = size / 2, r = 200;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();
    const scale = Math.max(r * 2 / stickerImage.width, r * 2 / stickerImage.height);
    const iw = stickerImage.width * scale, ih = stickerImage.height * scale;
    ctx.drawImage(stickerImage, cx - iw / 2, cy - ih / 2, iw, ih);
    ctx.restore();

    // 圆形边框
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // 底部
    const bottomY = size + 120 + commentOffset;
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.fillRect(0, size, size, 120 + commentOffset);

    ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 16px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', size / 2, size + 25);

    // 评论文字
    if (comment) {
        ctx.fillStyle = '#ff6b35';
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillText(`"${comment}"`, size / 2, size + 48);
    }

    const avg = ((taste + portion + value) / 3).toFixed(1);
    const ratingY = size + 65 + (comment ? 25 : 0);
    ctx.font = 'bold 28px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}分`, size / 2, ratingY);

    const detailY = size + 90 + (comment ? 25 : 0);
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = '#6c757d';
    ctx.fillText(`口味${taste} | 分量${portion} | 性价比${value}`, size / 2, detailY);
}

function renderCard(ctx, canvas, taste, portion, value, comment) {
    const maxW = 480, pad = 20, bottom = 140;
    const commentOffset = comment ? 30 : 0;
    const scale = Math.min(1, maxW / stickerImage.width);
    const w = stickerImage.width * scale, h = stickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom + commentOffset;

    // 渐变背景
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#1a1a2e');
    grad.addColorStop(1, '#2d2d44');
    ctx.fillStyle = grad;
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 16);
    ctx.fill();

    // 图片（带圆角）
    ctx.save();
    roundRect(ctx, pad, pad, w, h, 12);
    ctx.clip();
    ctx.drawImage(stickerImage, pad, pad, w, h);
    ctx.restore();

    // 标题
    ctx.fillStyle = '#fff'; ctx.font = 'bold 18px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    // 评论文字
    if (comment) {
        ctx.fillStyle = '#ff6b35';
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.fillText(`"${comment}"`, canvas.width / 2, h + pad + 50);
    }

    // 综合评分
    const avg = ((taste + portion + value) / 3).toFixed(1);
    const ratingY = h + pad + 70 + (comment ? 20 : 0);
    ctx.font = 'bold 32px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}`, canvas.width / 2, ratingY);
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('综合评分', canvas.width / 2, ratingY + 18);

    // 三项评分小条
    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barY = h + pad + 105 + (comment ? 20 : 0);
    const barW = 100, barH = 8, gap = (canvas.width - barW * 3) / 4;
    ratings.forEach((r, i) => {
        const x = gap + i * (barW + gap);
        ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(x, barY, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(x, barY, barW * (r.val / 5), barH);
        ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = '10px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(`${r.label} ${r.val}`, x + barW / 2, barY + barH + 14);
    });
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function downloadSticker() {
    const canvas = document.getElementById('sticker-canvas');
    const link = document.createElement('a');
    link.download = `舌尖闽大测评_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('图片已开始下载！');
}

// ===== 收藏页贴纸画廊 =====
function renderStickerGallery() {
    const stickers = Storage.get('mjufav_stickers');
    const container = document.getElementById('favorites-sticker-grid');
    if (stickers.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">?</div><p>还没有生成测评贴纸</p><p>去"AI测评抠图"生成你的第一张贴纸吧！</p></div>';
        return;
    }
    container.innerHTML = stickers.slice().reverse().map(s => `
        <div class="sticker-gallery-item">
            <img src="${s.src}" alt="测评贴纸">
            <div class="sticker-meta">
                <span>${s.date} | 口味${s.taste} 分量${s.portion} 性价比${s.value}</span>
                <button class="sticker-delete-btn" onclick="deleteSticker(${s.id})" title="删除">x</button>
            </div>
        </div>`).join('');
}

function deleteSticker(id) {
    let stickers = Storage.get('mjufav_stickers');
    stickers = stickers.filter(s => s.id !== id);
    Storage.set('mjufav_stickers', stickers);
    renderStickerGallery();
    showToast('贴纸已删除');
}

// ===== 随机抽签 =====
function drawRandomFood() {
    const container = document.getElementById('random-result');
    container.innerHTML = '<div class="food-card" style="max-width:400px;margin:0 auto;pointer-events:none"><div class="food-image-placeholder" style="font-size:4rem">R</div></div>';

    let count = 0;
    const interval = setInterval(() => {
        const r = foodData[Math.floor(Math.random() * foodData.length)];
        container.innerHTML = `<div class="food-card" style="max-width:400px;margin:0 auto;pointer-events:none;opacity:0.7">
            ${r.image ? `<img src="${r.image}" class="food-image" alt="${r.name}">` : `<div class="food-image-placeholder">${r.emoji}</div>`}
            <div class="food-content"><div class="food-name">${r.name}</div></div></div>`;
        count++;
        if (count > 10) {
            clearInterval(interval);
            const random = foodData[Math.floor(Math.random() * foodData.length)];
            container.innerHTML = `
                <div class="food-card" style="max-width:400px;margin:0 auto" onclick="openDetail(${random.id})">
                    ${random.image ? `<img src="${random.image}" class="food-image" alt="${random.name}">` : `<div class="food-image-placeholder">${random.emoji}</div>`}
                    <div class="food-content">
                        <div class="food-name">${random.name}</div>
                        <div class="food-rating">
                            <span class="stars">${'★'.repeat(Math.floor(random.rating))}${'☆'.repeat(5 - Math.floor(random.rating))}</span>
                            <span class="rating-tag ${random.rating >= 4.5 ? 'excellent' : 'good'}">${random.tag} · ${random.rating}星</span>
                        </div>
                        <div class="food-review">${random.review}</div>
                        <div class="food-footer"><span class="food-reviewer">${random.reviewer}</span></div>
                    </div>
                </div>
                <button class="login-btn" style="margin-top:1rem;max-width:400px;display:block;margin-left:auto;margin-right:auto" onclick="openDetail(${random.id})">查看详情+图片</button>`;
            showToast(`今天推荐：${random.name}！`);
        }
    }, 100);
}

// ===== 趣味测评 MBTI =====
function startMbtiTest() {
    const favorites = Storage.get('mjufav_spa');
    if (favorites.length === 0) {
        showToast('至少收藏1个美食才能进行测评哦~');
        return;
    }

    const favFoods = foodData.filter(f => favorites.includes(f.id));

    // 分析维度
    const cafeteriaCount = favFoods.filter(f => f.type === 'cafeteria').length;
    const offcampusCount = favFoods.filter(f => f.type === 'offcampus').length;
    const avgRating = favFoods.reduce((s, f) => s + f.rating, 0) / favFoods.length;
    const canteens = new Set(favFoods.filter(f => f.canteen).map(f => f.canteen));
    const diversity = canteens.size;

    // 确定MBTI类型
    let type = 'EFNP'; // 默认
    const E = offcampusCount >= cafeteriaCount;
    const S = diversity <= 1;
    const T = avgRating >= 4.3;
    const J = favorites.length <= 3;

    if (E && !S && T && !J) type = 'ENTJ';
    else if (E && !S && !T && !J) type = 'ESTP';
    else if (E && !S && !T && J) type = 'ENFP';
    else if (!E && S && !T && !J) type = 'INFP';
    else if (!E && S && T && J) type = 'ISTJ';
    else if (!E && !S && T && !J) type = 'INTJ';
    else if (!E && !S && !T && !J) type = 'ISFP';
    else type = 'EFNP';

    const mbti = foodMBTI[type];
    const resultDiv = document.getElementById('mbti-result');
    resultDiv.innerHTML = `
        <div class="mbti-result-header">
            <div class="mbti-type">${type}</div>
            <div class="mbti-title">${mbti.title}</div>
        </div>
        <div class="mbti-result-body">
            <p class="mbti-desc">${mbti.desc}</p>
            <div class="mbti-traits">
                ${Object.entries(mbti.traits).map(([k, v]) => `<div class="mbti-trait"><div class="mbti-trait-label">${k}</div><div class="mbti-trait-value">${v}</div></div>`).join('')}
            </div>
            <div class="mbti-recommend">
                <h4>AI推荐</h4>
                <p>${mbti.recommend}</p>
            </div>
            <div class="mbti-share">
                <button class="mbti-share-btn" onclick="shareMbti('${type}', '${mbti.title}')">分享我的美食人格</button>
            </div>
        </div>`;

    document.querySelector('.mbti-intro').classList.add('hidden');
    resultDiv.classList.remove('hidden');
}

function shareMbti(type, title) {
    const text = `【舌尖上的闽大 · 美食MBTI测评】我的美食人格是 ${type} - ${title}！来测测你的美食人格吧！`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('分享文案已复制到剪贴板！'));
    } else {
        showToast(text);
    }
}

// ===== 美食搭子匹配器 =====
function matchBuddy() {
    const selected = Array.from(document.querySelectorAll('input[name="preference"]:checked')).map(cb => cb.value);
    if (selected.length === 0) {
        showToast('请至少选择一个口味偏好！');
        return;
    }

    // 保存用户偏好
    Storage.set('mjufav_buddy_prefs', selected);

    // 模拟匹配数据
    const mockBuddies = [
        { name: '辣妹子', avatar: 'L', prefs: ['吃辣', '爱吃米饭', '低价实惠'], matchRate: 90 },
        { name: '面食控', avatar: 'M', prefs: ['爱吃面食', '不吃香菜', '追求品质'], matchRate: 85 },
        { name: '甜食党', avatar: 'S', prefs: ['爱吃甜食', '不吃辣', '素食'], matchRate: 80 },
        { name: '实惠达人', avatar: 'V', prefs: ['低价实惠', '爱吃面食', '不吃葱'], matchRate: 75 },
        { name: '品质生活', avatar: 'Q', prefs: ['追求品质', '爱吃甜食', '不吃辣'], matchRate: 70 }
    ];

    // 计算匹配度
    const matchedBuddies = mockBuddies
        .map(buddy => {
            const common = buddy.prefs.filter(p => selected.includes(p)).length;
            const matchRate = Math.round((common / selected.length) * 100);
            return { ...buddy, matchRate };
        })
        .filter(b => b.matchRate >= 50)
        .sort((a, b) => b.matchRate - a.matchRate)
        .slice(0, 5);

    const resultDiv = document.getElementById('buddy-result');
    const listDiv = document.getElementById('buddy-match-list');

    if (matchedBuddies.length === 0) {
        listDiv.innerHTML = '<p class="empty-hint">暂无匹配到的搭子，试试调整口味偏好？</p>';
    } else {
        listDiv.innerHTML = matchedBuddies.map(buddy => `
            <div class="buddy-card">
                <div class="buddy-avatar">${buddy.avatar}</div>
                <div class="buddy-info">
                    <div class="buddy-name">${buddy.name}</div>
                    <div class="buddy-tags-small">
                        ${buddy.prefs.map(p => `<span class="buddy-tag-chip">${p}</span>`).join('')}
                    </div>
                </div>
                <div class="buddy-match-rate">${buddy.matchRate}%</div>
            </div>
        `).join('');
    }

    resultDiv.classList.remove('hidden');
}

function generateInviteText() {
    const selected = Storage.get('mjufav_buddy_prefs') || [];
    const username = currentUser || '干饭人';

    const texts = [
        `【舌尖上的闽大 · 饭搭子邀约】\n\n${username} 正在寻找饭搭子！\n我的口味偏好：${selected.join('、')}\n\n有没有志同道合的小伙伴？一起约饭去！\n\n查看更多：舌尖上的闽大`,
        `【约饭邀请】\n\n嘿！我在「舌尖上的闽大」上看到你也是${selected[0]}爱好者~\n我是${username}，要不要一起组队探店？\n\n感兴趣的话私信我呀～`,
        `${username}想找个饭搭子！\n偏好：${selected.join('、')}\n\n一起吃遍闽大美食吧！`
    ];

    const text = texts[Math.floor(Math.random() * texts.length)];
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('邀约文案已复制！'));
    } else {
        showToast(text);
    }
}

// ===== 避雷吐槽墙 =====
function submitBadReview() {
    const shop = document.getElementById('badreview-shop').value.trim();
    const content = document.getElementById('badreview-content').value.trim();
    const tags = Array.from(document.querySelectorAll('input[name="badtag"]:checked')).map(cb => cb.value);

    if (!shop) { showToast('请输入店铺名称'); return; }
    if (!content) { showToast('请输入吐槽内容'); return; }

    const reviews = Storage.get('mjufav_badreviews') || [];
    reviews.unshift({
        id: Date.now(),
        shop,
        content,
        tags,
        likes: 0,
        date: new Date().toLocaleDateString()
    });
    Storage.set('mjufav_badreviews', reviews);

    // 清空表单
    document.getElementById('badreview-shop').value = '';
    document.getElementById('badreview-content').value = '';
    document.querySelectorAll('input[name="badtag"]').forEach(cb => cb.checked = false);

    renderBadReviews();
    showToast('吐槽发布成功！');
}

function renderBadReviews() {
    const reviews = Storage.get('mjufav_badreviews') || [];
    const container = document.getElementById('badreview-items');

    if (reviews.length === 0) {
        container.innerHTML = '<p class="empty-hint">暂无避雷吐槽，快来发布第一条吧！</p>';
        return;
    }

    // 按点赞排序
    reviews.sort((a, b) => b.likes - a.likes);

    container.innerHTML = reviews.map(review => `
        <div class="badreview-card">
            <div class="badreview-header">
                <span class="badreview-shop-name">${review.shop}</span>
                <span class="badreview-date">${review.date}</span>
            </div>
            <div class="badreview-content">${review.content}</div>
            <div class="badreview-footer">
                <div class="badreview-tags-small">
                    ${review.tags.map(t => `<span class="badreview-tag-chip">${t}</span>`).join('')}
                </div>
                <button class="badreview-like-btn" onclick="likeBadReview(${review.id})">
                    + <span>${review.likes}</span>
                </button>
            </div>
        </div>
    `).join('');
}

function likeBadReview(id) {
    const reviews = Storage.get('mjufav_badreviews') || [];
    const review = reviews.find(r => r.id === id);
    if (review) {
        review.likes++;
        Storage.set('mjufav_badreviews', reviews);
        renderBadReviews();
    }
}

// ===== Toast 提示 =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ===== 一周食谱计划 =====
let currentMealSlot = null; // 当前选择的槽位

function renderMealPlan() {
    const plan = Storage.get('mjufav_mealplan') || {};
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const meals = ['breakfast', 'lunch', 'dinner'];

    days.forEach(day => {
        const row = document.querySelector(`.mealplan-row[data-day="${day}"]`);
        if (!row) return;
        meals.forEach(meal => {
            const slot = row.querySelector(`.meal-slot[data-meal="${meal}"]`);
            const key = `${day}_${meal}`;
            const foodId = plan[key];
            if (foodId) {
                const food = foodData.find(f => f.id === foodId);
                if (food) {
                    slot.innerHTML = `<span class="meal-name">${food.name}</span>`;
                    slot.classList.add('has-food');
                } else {
                    slot.innerHTML = '<span class="meal-placeholder">点击选择</span>';
                    slot.classList.remove('has-food');
                }
            } else {
                slot.innerHTML = '<span class="meal-placeholder">点击选择</span>';
                slot.classList.remove('has-food');
            }
        });
    });
}

function selectMeal(slotEl, day, meal) {
    currentMealSlot = { day, meal, element: slotEl };
    const favorites = Storage.get('mjufav_spa');
    const favFoods = foodData.filter(f => favorites.includes(f.id));

    if (favFoods.length === 0) {
        showToast('请先收藏一些美食再来安排食谱吧！');
        return;
    }

    document.getElementById('meal-select-title').textContent = `${day} ${getMealName(meal)}`;
    const grid = document.getElementById('meal-select-grid');

    grid.innerHTML = favFoods.map(food => `
        <div class="meal-select-item" onclick="confirmMealSelect(${food.id})">
            <div class="meal-select-emoji">${food.emoji || 'F'}</div>
            <div class="meal-select-name">${food.name}</div>
            <div class="meal-select-rating">${'★'.repeat(Math.floor(food.rating))}</div>
        </div>
    `).join('');

    document.getElementById('meal-select-modal').classList.remove('hidden');
}

function getMealName(meal) {
    const names = { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' };
    return names[meal] || meal;
}

function confirmMealSelect(foodId) {
    if (!currentMealSlot) return;
    const { day, meal } = currentMealSlot;
    const key = `${day}_${meal}`;

    let plan = Storage.get('mjufav_mealplan') || {};
    plan[key] = foodId;
    Storage.set('mjufav_mealplan', plan);

    closeMealSelectModal();
    renderMealPlan();
    showToast('已添加到食谱计划！');
}

function closeMealSelectModal() {
    document.getElementById('meal-select-modal').classList.add('hidden');
    currentMealSlot = null;
}

function clearMealPlan() {
    if (!confirm('确定要清空一周食谱计划吗？')) return;
    Storage.set('mjufav_mealplan', {});
    renderMealPlan();
    showToast('食谱计划已清空');
}

function saveMealPlan() {
    const plan = Storage.get('mjufav_mealplan') || {};
    const keys = Object.keys(plan);
    if (keys.length === 0) {
        showToast('请先安排一些食谱！');
        return;
    }

    // 生成分享文本
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const meals = ['breakfast', 'lunch', 'dinner'];
    let text = '【舌尖上的闽大 · 一周食谱计划】\n';

    days.forEach(day => {
        text += `\n${day}:\n`;
        meals.forEach(meal => {
            const foodId = plan[`${day}_${meal}`];
            if (foodId) {
                const food = foodData.find(f => f.id === foodId);
                if (food) text += `  ${getMealName(meal)}: ${food.emoji} ${food.name}\n`;
            }
        });
    });

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('食谱计划已复制到剪贴板！'));
    } else {
        showToast(text);
    }
}

document.getElementById('meal-select-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('meal-select-modal')) closeMealSelectModal();
});
