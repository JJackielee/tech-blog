

const editId = window.location.href.split('/').pop();

document.querySelector("#editForm").addEventListener("click",e=>{
    e.preventDefault();
    const loginObj = {
        title:document.querySelector("#editTitle").value,
        text:document.querySelector("#editText").value
    }
    console.log(loginObj);
    fetch("/api/blog/"+editId,{
        method:"PUT",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})


document.querySelector("#deleteForm").addEventListener("click",e=>{
    fetch("/api/blog/"+editId,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})