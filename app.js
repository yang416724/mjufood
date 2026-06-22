// ===== 数据存储 =====
const Storage = {
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch {
            return [];
        }
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// ===== 内置美食数据 =====
const foodData = [
    // 第一食堂
    { id: 1, name: '一堂拌面扁肉', rating: 4.5, review: '拌面劲道，扁肉汤鲜味美，早餐首选', reviewer: '早起鸟', canteen: '1', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/9e9167f4-6d9b-4b12-b0f9-9a15e3125939_53792f7d-0560-4f78-bc1c-e6cd069536ce_一堂拌面扁肉.jpg' },
    { id: 2, name: '一堂肴伯黑鸭煲', rating: 4.5, review: '黑鸭煲香辣入味，配菜丰富，超级下饭', reviewer: '辣妹子', canteen: '1', type: 'cafeteria', emoji: '🥘', tag: '推荐', image: 'images/cff45d94-3f4b-4701-9a29-1fb12d453a4d_ebb733a5-1f5f-4286-804a-c824e8a6f374_一堂肴伯黑鸭煲.jpg' },
    { id: 3, name: '一堂意面', rating: 4, review: '意面口感不错，煎蛋很香，分量足', reviewer: '西餐控', canteen: '1', type: 'cafeteria', emoji: '🍝', tag: '推荐', image: 'images/5ba9d661-9a3c-49af-99d6-fce9cef7ab9d_17a2bffb-fdd4-4db4-a927-e788bafa21cf_一堂意面.jpg' },
    { id: 4, name: '一堂一楼重庆小面·辣鸡粉', rating: 5, review: '太香了啦 还有我最爱的折耳根！', reviewer: '小面爱好者', canteen: '1', type: 'cafeteria', emoji: '🍜', tag: '吹爆' },
    { id: 5, name: '一堂二楼铁板饭', rating: 4, review: '铁板滋滋响，香气扑鼻', reviewer: '干饭王', canteen: '1', type: 'cafeteria', emoji: '🍛', tag: '推荐' },
    { id: 6, name: '一堂三楼麻辣烫', rating: 4.5, review: '汤底浓郁，菜品新鲜', reviewer: '辣妹子', canteen: '1', type: 'cafeteria', emoji: '🍲', tag: '推荐' },

    // 第二食堂
    { id: 7, name: '二堂干蒸菜', rating: 4.5, review: '干蒸排骨和牛肉都很香，配米饭绝了', reviewer: '干饭王', canteen: '2', type: 'cafeteria', emoji: '🍖', tag: '推荐', image: 'images/269865fc-ab56-4e60-9bc8-328c1f5bf576_041ccc9f-56b7-47ff-ac38-b2b27f860612_二堂干蒸菜.jpg' },
    { id: 8, name: '二堂古茗奶茶', rating: 4.5, review: '芝士葡萄超好喝，奶盖浓郁，果茶清爽', reviewer: '奶茶控', canteen: '2', type: 'cafeteria', emoji: '🧋', tag: '推荐', image: 'images/fc3ab460-7a72-4ca8-b26f-3bea6f22efd5_3b658268-5ff6-4609-b0ba-1459bb84fed0_二堂古茗.jpg' },
    { id: 9, name: '二堂老丈人牛肉面', rating: 4.5, review: '牛肉大片，汤底醇厚，花生很香', reviewer: '面食控', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/4f0919de-66d8-445b-8e26-0635342be3a4_8b609358-965a-4c83-af70-e89d0b6a5b97_二堂老丈人牛肉面.jpg' },
    { id: 10, name: '二堂麻辣烫', rating: 4, review: '菜品丰富，汤底浓郁，丸子很Q弹', reviewer: '辣妹子', canteen: '2', type: 'cafeteria', emoji: '🍲', tag: '推荐', image: 'images/50565149-5c3e-4e00-b41e-903d8c5cfbb7_df45bb0d-5f27-4161-943f-67aee68a6e79_二堂麻辣烫.jpg' },
    { id: 11, name: '二堂米婆婆', rating: 4, review: '锅包肉酥脆，麻婆豆腐嫩滑，金针菇下饭', reviewer: '东北胃', canteen: '2', type: 'cafeteria', emoji: '🍱', tag: '推荐', image: 'images/0847455b-d8bf-4625-9b7a-82a9d07c0125_e4a6713d-f404-46b9-8d7a-e4b08a150201_二堂米婆婆.jpg' },
    { id: 12, name: '二堂石锅拌饭', rating: 4.5, review: '五花肉石锅拌饭，泡菜酸辣开胃，溏心蛋完美', reviewer: '韩料控', canteen: '2', type: 'cafeteria', emoji: '🍚', tag: '推荐', image: 'images/e3907b1e-5f84-4343-bfbf-723ef91efbf3_69ab9681-d50a-459f-93fd-9d9b759df34d_二堂石锅拌饭.jpg' },
    { id: 13, name: '二堂水果捞', rating: 4.5, review: '水果新鲜种类多，芒果超甜，车厘子很大颗', reviewer: '甜食控', canteen: '2', type: 'cafeteria', emoji: '🍓', tag: '推荐', image: 'images/d12adb80-a1a8-4e48-843f-b5c13200220e_663d3184-b538-4b98-bc66-35670c15564c_二堂水果捞.jpg' },
    { id: 14, name: '二堂五谷渔粉', rating: 4.5, review: '渔粉滑嫩，炸蛋吸满汤汁，香菜提味', reviewer: '嗦粉达人', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/d34aff2c-99fa-4992-92b4-d3bf5dbd5d72_7bbe0e04-e164-48b3-b8b9-a1765b95f4fe_二堂五谷渔粉.jpg' },
    { id: 15, name: '二堂云南鸡汤米线', rating: 4.5, review: '鸡汤鲜美，鱼肉嫩滑，豌豆酥脆', reviewer: '养生党', canteen: '2', type: 'cafeteria', emoji: '🍜', tag: '推荐', image: 'images/55033f90-dce4-4a1b-8603-986c18d7e7c8_cfd5ad27-d9ba-44d5-8ddc-48959d8c04a2_二堂云南鸡汤米线.jpg' },
    { id: 16, name: '二堂自选菜', rating: 3, review: '太贵了', reviewer: '节俭达人', canteen: '2', type: 'cafeteria', emoji: '🍱', tag: '一般' },
    { id: 17, name: '二堂小炒窗口', rating: 2.5, review: '油太多，吃完腻得慌', reviewer: '健康饮食', canteen: '2', type: 'cafeteria', emoji: '🥘', tag: '避雷' },

    // 第三食堂
    { id: 18, name: '三堂烤盘饭', rating: 4.5, review: '烤盘饭香辣过瘾，配菜丰富，米饭管饱', reviewer: '干饭王', canteen: '3', type: 'cafeteria', emoji: '🍳', tag: '推荐', image: 'images/a0d5a1b9-c288-4245-800a-643940b81b66_8cdde32b-ce36-4c0b-b7b2-6e9d2b077594_三堂烤盘饭.jpg' },
    { id: 19, name: '三堂麻辣香锅', rating: 4.5, review: '麻辣香锅料足味正，丸子和蔬菜搭配完美', reviewer: '重口味', canteen: '3', type: 'cafeteria', emoji: '🥘', tag: '推荐', image: 'images/9d08f799-25e5-4e2f-8d61-8dff5373de33_0b33ae1a-3d6e-4319-aac4-44ea68ae11e8_三堂麻辣香锅.jpg' },
    { id: 20, name: '三堂汤先生', rating: 4, review: '黑椒肉片嫩滑，配菜丰富，营养均衡', reviewer: '养生党', canteen: '3', type: 'cafeteria', emoji: '🍱', tag: '推荐', image: 'images/9023dc97-1fc8-40ca-b354-adadcd40fced_8e3bfbab-25fb-4dd3-aa3e-213a57f10230_三堂汤先生.jpg' },
    { id: 21, name: '三堂盖浇饭', rating: 3.5, review: '分量足，味道中规中矩', reviewer: '大胃王', canteen: '3', type: 'cafeteria', emoji: '🍛', tag: '一般' },
    { id: 22, name: '三堂水饺', rating: 4, review: '手工包的，皮薄馅大', reviewer: '北方汉子', canteen: '3', type: 'cafeteria', emoji: '🥟', tag: '推荐' },
    { id: 23, name: '三堂砂锅粥', rating: 4.5, review: '冬天来一碗，暖到心里', reviewer: '养生党', canteen: '3', type: 'cafeteria', emoji: '🍲', tag: '推荐' },

    // 第四食堂
    { id: 24, name: '四堂日式便当', rating: 4, review: '颜值在线，味道也不错', reviewer: '颜值控', canteen: '4', type: 'cafeteria', emoji: '🍱', tag: '推荐' },
    { id: 25, name: '四堂炸鸡汉堡', rating: 3.5, review: '偶尔放纵一下可以', reviewer: '快餐族', canteen: '4', type: 'cafeteria', emoji: '🍔', tag: '一般' },
    { id: 26, name: '四堂甜品站', rating: 4.5, review: '双皮奶绝了！', reviewer: '甜食控', canteen: '4', type: 'cafeteria', emoji: '🍮', tag: '吹爆' },
    { id: 27, name: '四堂素食窗口', rating: 3, review: '健康但味道清淡', reviewer: '素食者', canteen: '4', type: 'cafeteria', emoji: '🥗', tag: '一般' },

    // 校外小吃街（北门）
    { id: 28, name: '北门肥姨妈螺蛳粉', rating: 4.5, review: '螺蛳粉正宗，腐竹和酸笋超多，汤底浓郁', reviewer: '嗦粉达人', canteen: null, type: 'offcampus', emoji: '🍜', tag: '推荐', image: 'images/8399f793-9202-46f5-95f8-e08769636b78_0524aff2-a4a0-43cc-bd7d-eee9096562da_北门肥姨妈螺蛳粉.jpg' },
    { id: 29, name: '北门贵州冰浆', rating: 4.5, review: '冰浆绵密细腻，芒果和绿豆口味都超赞，夏日解暑神器', reviewer: '甜食控', canteen: null, type: 'offcampus', emoji: '🍧', tag: '推荐', image: 'images/6e775426-85bd-4c58-beca-dae12bc56cbf_ababea71-ae57-48f6-92f6-b34486fab972_北门贵州冰浆2.jpg' },
    { id: 30, name: '北门花甲粉', rating: 4, review: '花甲新鲜，锡纸锁住鲜味，汤底香辣可口', reviewer: '夜宵党', canteen: null, type: 'offcampus', emoji: '🍲', tag: '推荐', image: 'images/70db5130-6bb5-4557-b7b8-e1ebbcb20307_c0c3d3d5-7b62-4878-82fc-5b5585b20996_北门花甲粉.jpg' },
    { id: 31, name: '北门铜锅鸡', rating: 4.5, review: '铜锅鸡分量超大，鸡肉嫩滑，配菜丰富，适合聚餐', reviewer: '聚餐达人', canteen: null, type: 'offcampus', emoji: '🍗', tag: '推荐', image: 'images/eb790cb1-8731-44f9-98bd-74422ce2a002_9ad194b4-ad28-44bd-a1a2-ba88ab3a2dfc_北门铜锅鸡1.jpg' },
    { id: 32, name: '北门云贵川小吃', rating: 4, review: '土豆和米粉搭配很有特色，香辣入味', reviewer: '重口味', canteen: null, type: 'offcampus', emoji: '🌶️', tag: '推荐', image: 'images/fb1b493f-df44-4148-a527-cfd33f388263_fd37e48e-c994-4b40-8812-224953b61a5a_北门云贵川小吃.jpg' },
    { id: 33, name: '南门烤冷面', rating: 4.5, review: '加肠加蛋绝了', reviewer: '夜宵党', canteen: null, type: 'offcampus', emoji: '🍳', tag: '推荐' },
    { id: 34, name: '东门煎饼果子', rating: 4, review: '脆脆的，酱料很香', reviewer: '早餐达人', canteen: null, type: 'offcampus', emoji: '🌯', tag: '推荐' },
    { id: 35, name: '校外肯德基', rating: 4, review: '疯狂星期四必去', reviewer: 'KFC粉', canteen: null, type: 'offcampus', emoji: '🍗', tag: '推荐' }
];

// ===== 全局状态 =====
let currentUser = null;
let currentFoodId = null;
let currentPage = 'home';

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initLoginPage();
    initNavigation();
    initFilters();
    initSliders();
    initFileUploads();
    checkLoginStatus();
});

// ===== 登录页面交互 =====
function initLoginPage() {
    const icons = document.querySelectorAll('.food-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            icon.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
        });
    });
}

// ===== 登录/注册 =====
function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    if (!username) {
        showToast('请输入学号/昵称');
        return;
    }
    login(username);
}

function handleRegister() {
    const username = document.getElementById('login-username').value.trim();
    if (!username) {
        showToast('请输入学号/昵称');
        return;
    }
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
    if (saved) {
        login(saved);
    }
}

// ===== 导航 =====
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            switchPage(page);
        });
    });
}

function switchPage(page) {
    currentPage = page;
    
    // 更新导航状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    
    // 切换页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
    
    // 渲染对应内容
    switch(page) {
        case 'home': renderHome(); break;
        case 'cafeteria': renderCafeteria('all'); break;
        case 'offcampus': renderOffCampus('all'); break;
        case 'favorites': renderFavorites(); break;
        case 'random': break;
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

// ===== 渲染美食卡片 =====
function renderFoodCard(food) {
    const favorites = Storage.get('mjufav_spa');
    const isFav = favorites.includes(food.id);
    const tagClass = food.rating >= 4.5 ? 'excellent' : food.rating >= 3 ? 'good' : 'bad';
    const imageHtml = food.image
        ? `<img src="${food.image}" alt="${food.name}" class="food-image" loading="lazy">`
        : `<div class="food-image">${food.emoji}</div>`;

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
                    <button class="favorite-btn-card ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${food.id})" title="${isFav ? '取消收藏' : '收藏'}">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderFoodGrid(containerId, foods) {
    const container = document.getElementById(containerId);
    if (foods.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无美食数据</p></div>';
        return;
    }
    container.innerHTML = foods.map(renderFoodCard).join('');
}

// ===== 首页 =====
function renderHome() {
    const sorted = [...foodData].sort((a, b) => b.rating - a.rating).slice(0, 8);
    renderFoodGrid('home-food-grid', sorted);
}

// ===== 食堂 =====
function renderCafeteria(canteen) {
    let filtered = foodData.filter(f => f.type === 'cafeteria');
    if (canteen !== 'all') {
        filtered = filtered.filter(f => f.canteen === canteen);
    }
    renderFoodGrid('cafeteria-food-grid', filtered);
}

// ===== 校外 =====
function renderOffCampus(sort) {
    let filtered = foodData.filter(f => f.type === 'offcampus');
    if (sort === 'rating') {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
    }
    renderFoodGrid('offcampus-food-grid', filtered);
}

// ===== 收藏 =====
function renderFavorites() {
    const favorites = Storage.get('mjufav_spa');
    const favFoods = foodData.filter(f => favorites.includes(f.id));
    renderFoodGrid('favorites-food-grid', favFoods);
}

function toggleFavorite(foodId) {
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
    
    // 刷新当前页面
    switch(currentPage) {
        case 'home': renderHome(); break;
        case 'favorites': renderFavorites(); break;
        case 'cafeteria': renderCafeteria(document.querySelector('.filter-tab.active').dataset.canteen); break;
        case 'offcampus': renderOffCampus(document.querySelector('.sort-btn.active').dataset.sort); break;
    }
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

// ===== 详情弹窗 =====
function openDetail(foodId) {
    const food = foodData.find(f => f.id === foodId);
    if (!food) return;
    
    currentFoodId = foodId;
    document.getElementById('detail-name').textContent = food.name;
    document.getElementById('detail-rating').innerHTML = `
        <span class="stars">${'★'.repeat(Math.floor(food.rating))}${'☆'.repeat(5 - Math.floor(food.rating))}</span>
        <span class="rating-tag ${food.rating >= 4.5 ? 'excellent' : food.rating >= 3 ? 'good' : 'bad'}">${food.tag} · ${food.rating}星</span>
    `;
    document.getElementById('detail-review').textContent = food.review;
    document.getElementById('detail-reviewer').textContent = food.reviewer;
    
    updateModalFavoriteState();
    renderImageWall(foodId);
    
    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
    currentFoodId = null;
}

// 点击弹窗外部关闭
document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detail-modal')) {
        closeModal();
    }
});

// ===== 图片上传 =====
function initFileUploads() {
    // 详情页上传
    document.getElementById('detail-file').addEventListener('change', (e) => {
        handleImageUpload(e.target.files[0], currentFoodId);
    });
    
    // 贴纸页上传
    document.getElementById('sticker-file').addEventListener('change', (e) => {
        handleStickerUpload(e.target.files[0]);
    });
}

function handleImageUpload(file, foodId) {
    if (!file || !foodId) return;
    
    // 检查用户是否被封禁
    const banned = Storage.get('banned_users');
    if (banned.includes(currentUser)) {
        showToast('你已被封禁，无法上传图片');
        return;
    }
    
    if (!file.type.match(/image\/(jpeg|png)/)) {
        showToast('请上传 JPG/PNG 格式的图片');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const images = Storage.get('food_images');
        images.push({
            id: Date.now(),
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
    if (images.length === 0) {
        container.innerHTML = '<p style="color: var(--gray); text-align: center;">暂无图片，快来上传第一张吧！</p>';
        return;
    }
    
    container.innerHTML = images.map(img => `
        <div class="image-item">
            <img src="${img.src}" alt="美食图片" loading="lazy">
            <div class="image-item-info">
                <div class="image-item-author">${img.author}</div>
                <div class="image-item-actions">
                    <button class="like-btn" onclick="likeImage(${img.id})" title="点赞">
                        👍 <span class="like-count">${img.likes}</span>
                    </button>
                    <button class="report-btn" onclick="reportImage(${img.id})" title="举报">
                        🚩
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function likeImage(imageId) {
    const images = Storage.get('food_images');
    const img = images.find(i => i.id === imageId);
    if (img) {
        img.likes++;
        Storage.set('food_images', images);
        renderImageWall(currentFoodId);
        showToast('点赞成功！');
    }
}

function reportImage(imageId) {
    if (!confirm('确定要举报这张图片吗？')) return;
    
    const images = Storage.get('food_images');
    const img = images.find(i => i.id === imageId);
    if (!img) return;
    
    // 检查是否已举报过
    const reports = Storage.get('report_records');
    const reportKey = `${currentUser}_${imageId}`;
    if (reports.includes(reportKey)) {
        showToast('你已经举报过这张图片了');
        return;
    }
    
    reports.push(reportKey);
    Storage.set('report_records', reports);
    
    img.reports++;
    
    // 检查是否达到封禁条件（3次不同用户举报）
    if (img.reports >= 3) {
        img.hidden = true;
        
        // 封禁上传者
        const banned = Storage.get('banned_users');
        if (!banned.includes(img.author)) {
            banned.push(img.author);
            Storage.set('banned_users', banned);
            showToast(`图片已被隐藏，上传者 ${img.author} 已被封禁`);
        }
    } else {
        showToast(`举报成功，该图片已被举报 ${img.reports}/3 次`);
    }
    
    Storage.set('food_images', images);
    renderImageWall(currentFoodId);
}

// ===== 测评抠图 =====
let stickerImage = null;

function initSliders() {
    ['taste', 'portion', 'value'].forEach(type => {
        const slider = document.getElementById(`${type}-slider`);
        const value = document.getElementById(`${type}-value`);
        slider.addEventListener('input', () => {
            value.textContent = slider.value;
        });
    });
}

function handleStickerUpload(file) {
    if (!file || !file.type.startsWith('image/')) {
        showToast('请上传图片文件');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        stickerImage = new Image();
        stickerImage.onload = () => {
            document.getElementById('sticker-preview').innerHTML = `<img src="${e.target.result}" alt="预览">`;
        };
        stickerImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function generateSticker() {
    if (!stickerImage) {
        showToast('请先上传图片');
        return;
    }
    
    const canvas = document.getElementById('sticker-canvas');
    const ctx = canvas.getContext('2d');
    
    const taste = parseFloat(document.getElementById('taste-slider').value);
    const portion = parseFloat(document.getElementById('portion-slider').value);
    const value = parseFloat(document.getElementById('value-slider').value);
    
    // 设置画布尺寸
    const maxWidth = 600;
    const scale = Math.min(1, maxWidth / stickerImage.width);
    const width = stickerImage.width * scale;
    const height = stickerImage.height * scale;
    const extraHeight = 180;
    
    canvas.width = width;
    canvas.height = height + extraHeight;
    
    // 绘制原图
    ctx.drawImage(stickerImage, 0, 0, width, height);
    
    // 绘制底部评分区域
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, height, width, extraHeight);
    
    // 绘制标题
    ctx.fillStyle = '#1a1a2e';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🍜 舌尖闽大 · 测评', width / 2, height + 35);
    
    // 绘制评分条
    const ratings = [
        { label: '口味', value: taste, color: '#ff6b35' },
        { label: '分量', value: portion, color: '#2ec4b6' },
        { label: '性价比', value: value, color: '#ffc107' }
    ];
    
    ratings.forEach((r, i) => {
        const y = height + 60 + i * 40;
        const barWidth = 200;
        const barHeight = 16;
        const x = (width - barWidth) / 2;
        
        // 标签
        ctx.fillStyle = '#1a1a2e';
        ctx.font = '14px "Segoe UI", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(r.label, x - 10, y + 12);
        
        // 背景条
        ctx.fillStyle = '#e9ecef';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // 评分条
        ctx.fillStyle = r.color;
        ctx.fillRect(x, y, barWidth * (r.value / 5), barHeight);
        
        // 分数
        ctx.fillStyle = '#1a1a2e';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${r.value}分`, x + barWidth + 10, y + 12);
    });
    
    // 显示结果
    const result = document.getElementById('sticker-result');
    result.innerHTML = `
        <img src="${canvas.toDataURL()}" alt="测评贴纸">
        <p>👆 右键点击图片保存，分享到朋友圈吧！</p>
    `;
    
    showToast('测评贴纸生成成功！');
}

// ===== 随机抽签 =====
function drawRandomFood() {
    const random = foodData[Math.floor(Math.random() * foodData.length)];
    const container = document.getElementById('random-result');
    
    // 动画效果
    container.innerHTML = '<p style="font-size: 2rem;">🎲 抽签中...</p>';
    
    setTimeout(() => {
        container.innerHTML = `
            <div class="food-card" onclick="openDetail(${random.id})">
                <div class="food-image">${random.emoji}</div>
                <div class="food-content">
                    <div class="food-name">${random.name}</div>
                    <div class="food-rating">
                        <span class="stars">${'★'.repeat(Math.floor(random.rating))}${'☆'.repeat(5 - Math.floor(random.rating))}</span>
                        <span class="rating-tag ${random.rating >= 4.5 ? 'excellent' : random.rating >= 3 ? 'good' : 'bad'}">${random.tag} · ${random.rating}星</span>
                    </div>
                    <div class="food-review">${random.review}</div>
                    <div class="food-footer">
                        <span class="food-reviewer">${random.reviewer}</span>
                    </div>
                </div>
            </div>
            <button class="login-btn" style="margin-top: 1rem;" onclick="openDetail(${random.id})">查看详情+图片</button>
        `;
        showToast(`今天推荐：${random.name}！`);
    }, 800);
}

// ===== Toast 提示 =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}
