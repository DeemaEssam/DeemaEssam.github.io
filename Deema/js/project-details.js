const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const project = projects.find(p => p.id === projectId);

if (!project) {
    document.body.innerHTML = "<h2>Project not foundddd</h2>";
} else {
    document.getElementById("title").textContent = project.title;
    document.getElementById("image").src = project.image;
    document.getElementById("description").textContent =
        project.fullDescription;
    document.getElementById("date").textContent = project.date;
    document.getElementById("github").href = project.github;
}
