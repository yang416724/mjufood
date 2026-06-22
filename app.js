// ===== 数据存储 =====
const Storage = {
    get(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

// ===== 内置美食数据（仅保留有图片的） =====
const foodData = [
    { id: 1, name: '一堂拌面扁肉', rating: 4.5, review: '拌面劲道，扁肉汤鲜味美，早餐首选', reviewer: '早起鸟', canteen: '1', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/9e9167f4-6d9b-4b12-b0f9-9a15e3125939_53792f7d-0560-4f78-bc1c-e6cd069536ce_一堂拌面扁肉.jpg' },
    { id: 2, name: '一堂肴伯黑鸭煲', rating: 4.5, review: '黑鸭煲香辣入味，配菜丰富，超级下饭', reviewer: '辣妹子', canteen: '1', type: 'cafeteria', emoji: '🥘', tag: '推荐', image: 'images/cff45d94-3f4b-4701-9a29-1fb12d453a4d_ebb733a5-1f5f-4286-804a-c824e8a6f374_一堂肴伯黑鸭煲.jpg' },
    { id: 3, name: '一堂意面', rating: 4, review: '意面口感不错，煎蛋很香，分量足', reviewer: '西餐控', canteen: '1', type: 'cafeteria', emoji: '🍝', tag: '推荐', image: 'images/5ba9d661-9a3c-49af-99d6-fce9cef7ab9d_17a2bffb-fdd4-4db4-a927-e788bafa21cf_一堂意面.jpg' },
    { id: 4, name: '二堂干蒸菜', rating: 4.5, review: '干蒸排骨和牛肉都很香，配米饭绝了', reviewer: '干饭王', canteen: '2', type: 'cafeteria', emoji: '🍖', tag: '推荐', image: 'images/269865fc-ab56-4e60-9bc8-328c1f5bf576_041ccc9f-56b7-47ff-ac38-b2b27f860612_二堂干蒸菜.jpg' },
    { id: 5, name: '二堂古茗奶茶', rating: 4.5, review: '芝士葡萄超好喝，奶盖浓郁，果茶清爽', reviewer: '奶茶控', canteen: '2', type: 'cafeteria', emoji: '🧋', tag: '推荐', image: 'images/fc3ab460-7a72-4ca8-b26f-3bea6f22efd5_3b658268-5ff6-4609-b0ba-1459bb84fed0_二堂古茗.jpg' },
    { id: 6, name: '二堂老丈人牛肉面', rating: 4.5, review: '牛肉大片，汤底醇厚，花生很香', reviewer: '面食控', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/4f0919de-66d8-445b-8e26-0635342be3a4_8b609358-965a-4c83-af70-e89d0b6a5b97_二堂老丈人牛肉面.jpg' },
    { id: 7, name: '二堂麻辣烫', rating: 4, review: '菜品丰富，汤底浓郁，丸子很Q弹', reviewer: '辣妹子', canteen: '2', type: 'cafeteria', emoji: '🍲', tag: '推荐', image: 'images/50565149-5c3e-4e00-b41e-903d8c5cfbb7_df45bb0d-5f27-4161-943f-67aee68a6e79_二堂麻辣烫.jpg' },
    { id: 8, name: '二堂米婆婆', rating: 4, review: '锅包肉酥脆，麻婆豆腐嫩滑，金针菇下饭', reviewer: '东北胃', canteen: '2', type: 'cafeteria', emoji: '🍱', tag: '推荐', image: 'images/0847455b-d8bf-4625-9b7a-82a9d07c0125_e4a6713d-f404-46b9-8d7a-e4b08a150201_二堂米婆婆.jpg' },
    { id: 9, name: '二堂石锅拌饭', rating: 4.5, review: '五花肉石锅拌饭，泡菜酸辣开胃，溏心蛋完美', reviewer: '韩料控', canteen: '2', type: 'cafeteria', emoji: '🍚', tag: '推荐', image: 'images/e3907b1e-5f84-4343-bfbf-723ef91efbf3_69ab9681-d50a-459f-93fd-9d9b759df34d_二堂石锅拌饭.jpg' },
    { id: 10, name: '二堂水果捞', rating: 4.5, review: '水果新鲜种类多，芒果超甜，车厘子很大颗', reviewer: '甜食控', canteen: '2', type: 'cafeteria', emoji: '🍓', tag: '推荐', image: 'images/d12adb80-a1a8-4e48-843f-b5c13200220e_663d3184-b538-4b98-bc66-35670c15564c_二堂水果捞.jpg' },
    { id: 11, name: '二堂五谷渔粉', rating: 4.5, review: '渔粉滑嫩，炸蛋吸满汤汁，香菜提味', reviewer: '嗦粉达人', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/d34aff2c-99fa-4992-92b4-d3bf5dbd5d72_7bbe0e04-e164-48b3-b8b9-a1765b95f4fe_二堂五谷渔粉.jpg' },
    { id: 12, name: '二堂云南鸡汤米线', rating: 4.5, review: '鸡汤鲜美，鱼肉嫩滑，豌豆酥脆', reviewer: '养生党', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/55033f90-dce4-4a1b-8603-986c18d7e7c8_cfd5ad27-d9ba-44d5-8ddc-48959d8c04a2_二堂云南鸡汤米线.jpg' },
    { id: 13, name: '三堂烤盘饭', rating: 4.5, review: '烤盘饭香辣过瘾，配菜丰富，米饭管饱', reviewer: '干饭王', canteen: '3', type: 'cafeteria', emoji: '🍳', tag: '推荐', image: 'images/a0d5a1b9-c288-4245-800a-643940b81b66_8cdde32b-ce36-4c0b-b7b2-6e9d2b077594_三堂烤盘饭.jpg' },
    { id: 14, name: '三堂麻辣香锅', rating: 4.5, review: '麻辣香锅料足味正，丸子和蔬菜搭配完美', reviewer: '重口味', canteen: '3', type: 'cafeteria', emoji: '🥘', tag: '推荐', image: 'images/9d08f799-25e5-4e2f-8d61-8dff5373de33_0b33ae1a-3d6e-4319-aac4-44ea68ae11e8_三堂麻辣香锅.jpg' },
    { id: 15, name: '三堂汤先生', rating: 4, review: '黑椒肉片嫩滑，配菜丰富，营养均衡', reviewer: '养生党', canteen: '3', type: 'cafeteria', emoji: '🍱', tag: '推荐', image: 'images/9023dc97-1fc8-40ca-b354-adadcd40fced_8e3bfbab-25fb-4dd3-aa3e-213a57f10230_三堂汤先生.jpg' },
    { id: 16, name: '北门肥姨妈螺蛳粉', rating: 4.5, review: '螺蛳粉正宗，腐竹和酸笋超多，汤底浓郁', reviewer: '嗦粉达人', canteen: null, type: 'offcampus', emoji: '🍜', tag: '推荐', image: 'images/8399f793-9202-46f5-95f8-e08769636b78_0524aff2-a4a0-43cc-bd7d-eee9096562da_北门肥姨妈螺蛳粉.jpg' },
    { id: 17, name: '北门贵州冰浆', rating: 4.5, review: '冰浆绵密细腻，芒果和绿豆口味都超赞，夏日解暑神器', reviewer: '甜食控', canteen: null, type: 'offcampus', emoji: '🍧', tag: '推荐', image: 'images/6e775426-85bd-4c58-beca-dae12bc56cbf_ababea71-ae57-48f6-92f6-b34486fab972_北门贵州冰浆2.jpg' },
    { id: 18, name: '北门花甲粉', rating: 4, review: '花甲新鲜，锡纸锁住鲜味，汤底香辣可口', reviewer: '夜宵党', canteen: null, type: 'offcampus', emoji: '🍲', tag: '推荐', image: 'images/70db5130-6bb5-4557-b7b8-e1ebbcb20307_c0c3d3d5-7b62-4878-82fc-5b5585b20996_北门花甲粉.jpg' },
    { id: 19, name: '北门铜锅鸡', rating: 4.5, review: '铜锅鸡分量超大，鸡肉嫩滑，配菜丰富，适合聚餐', reviewer: '聚餐达人', canteen: null, type: 'offcampus', emoji: '🍗', tag: '推荐', image: 'images/eb790cb1-8731-44f9-98bd-74422ce2a002_9ad194b4-ad28-44bd-a1a2-ba88ab3a2dfc_北门铜锅鸡1.jpg' },
    { id: 20, name: '北门云贵川小吃', rating: 4, review: '土豆和米粉搭配很有特色，香辣入味', reviewer: '重口味', canteen: null, type: 'offcampus', emoji: '🌶️', tag: '推荐', image: 'images/fb1b493f-df44-4148-a527-cfd33f388263_fd37e48e-c994-4b40-8812-224953b61a5a_北门云贵川小吃.jpg' }
];

// ===== 美食MBTI人格库 =====
const foodMBTI = {
    'EFNP': { title: '美食探险家', emoji: '🗺️', desc: '你是天生的美食探险家！不拘泥于固定食堂，总是勇于尝试校外新店。你的收藏遍布各个食堂和北门小吃街，口味多元，对新鲜事物充满好奇。你是朋友圈里的"美食活地图"，总能发现别人不知道的好店。', traits: { '探索指数': '95%', '口味广度': '88%', '辣度耐受': '82%', '甜食偏好': '65%' }, recommend: '推荐你试试北门还没去过的新店，说不定能发现下一个宝藏美食！' },
    'ISFP': { title: '精致品鉴师', emoji: '👩‍🍳', desc: '你是校园美食界的品鉴大师！你对食物有着极高的标准，收藏的每道菜都是精心挑选的精品。你注重用餐体验的每个细节，从摆盘到味道，从分量到性价比，你都有独到的见解。', traits: { '品味指数': '92%', '挑剔程度': '78%', '拍照频率': '95%', '分享欲': '70%' }, recommend: '你的品味已经很高了，不妨试试用测评抠图功能，把你的美食体验做成精美贴纸分享给朋友！' },
    'ENTJ': { title: '干饭指挥官', emoji: '👔', desc: '你是干饭界的指挥官！你总是能快速做出就餐决策，从不纠结吃什么。你的收藏集中在几个高分食堂，目标明确，效率至上。你可能是宿舍里"今天吃什么"的最终决策者。', traits: { '决策速度': '98%', '忠诚度': '85%', '效率指数': '90%', '带饭概率': '75%' }, recommend: '作为指挥官，你可以用"今天吃什么"功能帮室友做决定，一锤定音！' },
    'INFP': { title: '文艺美食家', emoji: '🎨', desc: '你是充满文艺气息的美食家！你不仅关注味道，更注重美食背后的故事和情感。你可能会为一碗面写下长篇测评，也会因为一份甜品而感动。你的收藏里藏着对生活的热爱。', traits: { '文艺指数': '95%', '情感丰富': '90%', '测评长度': '88%', '拍照美学': '92%' }, recommend: '你的文字很有感染力，试试在详情页留下更多走心的评价吧！' },
    'ESTP': { title: '街头美食猎人', emoji: '🦁', desc: '你是校园周边的美食猎人！比起食堂，你更热衷于探索北门小吃街的每个角落。烤冷面、螺蛳粉、花甲粉...你总是能找到最接地气的美味。你是夜宵文化的忠实拥趸。', traits: { '街头指数': '96%', '夜宵频率': '90%', '辣度耐受': '88%', '冒险精神': '85%' }, recommend: '北门还有更多隐藏美食等你发现！试试随机抽签功能，探索未知美味！' },
    'ISTJ': { title: '食堂忠实粉丝', emoji: '📚', desc: '你是食堂的忠实粉丝！你喜欢熟悉的味道，有固定的就餐习惯和偏爱的窗口。你的收藏集中在特定食堂，对喜欢的菜品有着深厚的感情。稳定和可靠是你的美食信条。', traits: { '忠诚度': '98%', '习惯稳定': '95%', '探索欲': '30%', '排队耐心': '85%' }, recommend: '偶尔也可以尝试一下其他食堂，说不定会有意外惊喜哦！' },
    'ENFP': { title: '社交美食家', emoji: '🎉', desc: '你是社交型美食家！吃饭对你来说不仅是填饱肚子，更是社交活动。你喜欢和朋友一起探索新店，热衷于分享美食体验。你的收藏丰富多样，因为你总是听取朋友的推荐。', traits: { '社交指数': '95%', '从众指数': '80%', '分享欲': '92%', 'AA制概率': '70%' }, recommend: '你可以把美食测评结果分享给更多朋友，组织一次美食探店团！' },
    'INTJ': { title: '数据美食家', emoji: '📊', desc: '你是用数据说话的美食家！你会仔细研究每道菜的评分和评价，做出最优的就餐选择。你的收藏策略性很强，只保留真正值得的美食。你是校园版的"米其林评审员"。', traits: { '分析能力': '98%', '评分敏感': '95%', '性价比控': '88%', '理性决策': '92%' }, recommend: '你的分析能力很强，不妨在图片墙上多点赞高质量图片，帮助其他同学做出更好的选择！' }
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
    checkLoginStatus();
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
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(link.dataset.page);
        });
    });
}

function switchPage(page) {
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === page));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
    switch(page) {
        case 'home': renderHome(); break;
        case 'cafeteria': renderCafeteria('all'); break;
        case 'offcampus': renderOffCampus('all'); break;
        case 'favorites': renderFavorites(); break;
    }
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
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>`;
}

function renderFoodGrid(containerId, foods) {
    const container = document.getElementById(containerId);
    if (foods.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🍽️</div><p>暂无美食数据</p></div>';
        return;
    }
    container.innerHTML = foods.map(renderFoodCard).join('');
}

// ===== 首页 =====
function renderHome() {
    renderFoodGrid('home-food-grid', [...foodData].sort((a, b) => b.rating - a.rating));
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
        document.getElementById('favorites-food-grid').innerHTML = '<div class="empty-state"><div class="empty-icon">💔</div><p>还没有收藏任何美食哦~</p><p>快去首页发现美食吧！</p></div>';
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
    btn.textContent = isFav ? '❤️ 已收藏' : '❤️ 收藏';
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
                    <button class="like-btn" onclick="event.stopPropagation(); likeImage(${img.id})">👍 <span class="like-count">${img.likes}</span></button>
                    <button class="report-btn" onclick="event.stopPropagation(); reportImage(${img.id})">🚩</button>
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
        renderSticker(taste, portion, value);
    }, 2600);
}

function renderSticker(taste, portion, value) {
    const canvas = document.getElementById('sticker-canvas');
    const ctx = canvas.getContext('2d');

    if (stickerStyle === 'polaroid') renderPolaroid(ctx, canvas, taste, portion, value);
    else if (stickerStyle === 'circle') renderCircle(ctx, canvas, taste, portion, value);
    else renderCard(ctx, canvas, taste, portion, value);

    const dataUrl = canvas.toDataURL('image/png');

    // 保存到收藏
    const stickers = Storage.get('mjufav_stickers');
    stickers.push({ id: Date.now(), src: dataUrl, date: new Date().toLocaleDateString(), taste, portion, value });
    Storage.set('mjufav_stickers', stickers);

    const result = document.getElementById('sticker-result');
    result.innerHTML = `
        <img src="${dataUrl}" alt="测评贴纸">
        <div class="sticker-result-actions">
            <button class="sticker-result-btn" onclick="downloadSticker()">💾 保存图片</button>
            <button class="sticker-result-btn accent" onclick="switchPage('favorites'); document.querySelector('[data-tab=stickers]').click();">❤️ 查看收藏</button>
        </div>
        <p>👆 贴纸已自动保存到收藏页</p>`;
    showToast('测评贴纸生成成功！');
}

function renderPolaroid(ctx, canvas, taste, portion, value) {
    const maxW = 500, pad = 40, bottom = 160;
    const scale = Math.min(1, maxW / stickerImage.width);
    const w = stickerImage.width * scale, h = stickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom;

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
    ctx.fillText('🍜 舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barW = 180, barH = 14, startX = (canvas.width - barW) / 2;
    ratings.forEach((r, i) => {
        const y = h + pad + 50 + i * 35;
        ctx.fillStyle = '#1a1a2e'; ctx.font = '13px "Segoe UI", sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(r.label, startX - 8, y + 11);
        ctx.fillStyle = '#e9ecef'; ctx.fillRect(startX, y, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(startX, y, barW * (r.val / 5), barH);
        ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 13px "Segoe UI", sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(`${r.val}分`, startX + barW + 8, y + 11);
    });
}

function renderCircle(ctx, canvas, taste, portion, value) {
    const size = 500;
    canvas.width = size;
    canvas.height = size + 120;

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
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    ctx.fillRect(0, size, size, 120);

    ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 16px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('🍜 舌尖闽大 · 测评', size / 2, size + 25);

    const avg = ((taste + portion + value) / 3).toFixed(1);
    ctx.font = 'bold 28px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}分`, size / 2, size + 65);

    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = '#6c757d';
    ctx.fillText(`口味${taste} | 分量${portion} | 性价比${value}`, size / 2, size + 90);
}

function renderCard(ctx, canvas, taste, portion, value) {
    const maxW = 480, pad = 20, bottom = 140;
    const scale = Math.min(1, maxW / stickerImage.width);
    const w = stickerImage.width * scale, h = stickerImage.height * scale;
    canvas.width = w + pad * 2;
    canvas.height = h + pad + bottom;

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
    ctx.fillText('🍜 舌尖闽大 · 测评', canvas.width / 2, h + pad + 30);

    // 综合评分
    const avg = ((taste + portion + value) / 3).toFixed(1);
    ctx.font = 'bold 32px "Segoe UI", sans-serif';
    ctx.fillStyle = '#ff6b35';
    ctx.fillText(`${avg}`, canvas.width / 2, h + pad + 70);
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('综合评分', canvas.width / 2, h + pad + 88);

    // 三项评分小条
    const ratings = [
        { label: '口味', val: taste, color: '#ff6b35' },
        { label: '分量', val: portion, color: '#2ec4b6' },
        { label: '性价比', val: value, color: '#ffc107' }
    ];
    const barW = 100, barH = 8, gap = (canvas.width - barW * 3) / 4;
    ratings.forEach((r, i) => {
        const x = gap + i * (barW + gap);
        const y = h + pad + 105;
        ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(x, y, barW, barH);
        ctx.fillStyle = r.color; ctx.fillRect(x, y, barW * (r.val / 5), barH);
        ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = '10px "Segoe UI", sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(`${r.label} ${r.val}`, x + barW / 2, y + barH + 14);
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
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎨</div><p>还没有生成测评贴纸</p><p>去"AI测评抠图"生成你的第一张贴纸吧！</p></div>';
        return;
    }
    container.innerHTML = stickers.slice().reverse().map(s => `
        <div class="sticker-gallery-item">
            <img src="${s.src}" alt="测评贴纸">
            <div class="sticker-meta">
                <span>${s.date} | 口味${s.taste} 分量${s.portion} 性价比${s.value}</span>
                <button class="sticker-delete-btn" onclick="deleteSticker(${s.id})" title="删除">🗑️</button>
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
    container.innerHTML = '<div class="food-card" style="max-width:400px;margin:0 auto;pointer-events:none"><div class="food-image-placeholder" style="font-size:4rem">🎲</div></div>';

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
            <div class="mbti-title">${mbti.emoji} ${mbti.title}</div>
        </div>
        <div class="mbti-result-body">
            <p class="mbti-desc">${mbti.desc}</p>
            <div class="mbti-traits">
                ${Object.entries(mbti.traits).map(([k, v]) => `<div class="mbti-trait"><div class="mbti-trait-label">${k}</div><div class="mbti-trait-value">${v}</div></div>`).join('')}
            </div>
            <div class="mbti-recommend">
                <h4>💡 AI推荐</h4>
                <p>${mbti.recommend}</p>
            </div>
            <div class="mbti-share">
                <button class="mbti-share-btn" onclick="shareMbti('${type}', '${mbti.title}')">📤 分享我的美食人格</button>
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

// ===== Toast 提示 =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.add('hidden'), 2500);
}
