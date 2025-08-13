// Thêm kỹ năng động
const btAddSkill = document.getElementById('btAddSkill');
const skillContainer = document.getElementById('skill-list');
btAddSkill.addEventListener("click", () => {
    const newSkill = prompt("Nhập kỹ năng mới:");
    if(newSkill && newSkill.trim() !== "") {
        // Kiểm tra kỹ năng đã tồn tại chưa
        const exists = Array.from(skillContainer.children).some(span => span.textContent.trim() === newSkill.trim());
        if(exists) {
            alert('Kỹ năng này đã tồn tại!');
            return;
        }

        const skillSpan = document.createElement('span');
        skillSpan.classList.add('skill');
        skillSpan.textContent = newSkill.trim();
        skillContainer.appendChild(skillSpan);
    }
});

// Cho phép xóa kỹ năng khi nhấn giữ Ctrl + click
skillContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('skill') && e.ctrlKey) {
        if(confirm(`Bạn có chắc muốn xóa kỹ năng "${e.target.textContent}"?`)) {
            e.target.remove();
        }
    }
});

// Thêm kinh nghiệm
const btAddExperience = document.getElementById('btAddExperience');
const experienceList = document.getElementById('experience-list');
btAddExperience.addEventListener("click", () => {
    const ex = document.getElementById("txtExperience").value;
    const des = document.getElementById("txtDescription").value;
    if(ex !== "") {
        const dobj = document.createElement('dt');
        const ddobj = document.createElement('dd');
        dobj.textContent = ex.trim();
        ddobj.textContent = des.trim();
        experienceList.appendChild(dobj);
        experienceList.appendChild(ddobj);
        document.getElementById("txtExperience").value = "";
        document.getElementById("txtDescription").value = "";
    }
});

// Xóa kinh nghiệm
experienceList.addEventListener('click', (e) => {
    // Kiểm tra xem có phải click vào thẻ dt không, và Ctrl có được giữ không
    if ((e.target.tagName === 'DT') && e.ctrlKey) {
        if (confirm(`Bạn có chắc muốn xóa kinh nghiệm "${e.target.textContent}"?`)) {
            // Nếu là dt, có thể muốn xóa luôn dd liền sau nó (mô tả)
            if (e.target.tagName === 'DT') {
                const next = e.target.nextElementSibling;
                if (next && next.tagName === 'DD') {
                    next.remove();
                }
            }
        }
        e.target.remove();
    }
});
