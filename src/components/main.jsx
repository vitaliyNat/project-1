import React,  {  useMemo, useState }from "react";
import PostForm from "./postform";
import PostList from "./PostList";
import MySelect from "./UI/select/MySelect";


const Main = () =>{
    const [posts, setPosts]=useState([
        {id:1, index:1, title:'First Post', body: 'This is a first post'}
        
    ])
    const createPost= (newPost) => {
        setPosts([...posts, newPost])

    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [searchQuerry, setSearchQuerry]=useState('')


    
    const  [selectedSort, setSelectedSort]= useState('')

    const sortedPost = useMemo( () => {
        if(selectedSort){
            return [...posts].sort((a , b) => a[selectedSort].localeCompare(b[selectedSort]))

        }
        return posts;
    },[selectedSort,posts])   
     const sortedAndSearchPost =useMemo( () => {
         return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuerry))
     },[searchQuerry,sortedPost]) 

    const sortPosts= (sort) => {
        setSelectedSort(sort);
        
        
    }


   
    return(
        <main>
           <PostForm create={createPost}/>
           <div className="main">
           <div style={{textAlign:"right",padding:"10px", backgroundColor: "rgb(255,255,255,0.5)"}}>
               <input
               value={searchQuerry}
               placeholder="Search post..."
               onChange={event => setSearchQuerry(event.target.value)}
               />
               <MySelect
              value={selectedSort}
              onChange={sortPosts}>
                   
            
        </MySelect>
           </div>
           {sortedAndSearchPost.length !== 0
            
           ? <PostList  remove={removePost} posts={sortedAndSearchPost} />
           : <h1 style={{textAlign:"center", backgroundColor: "rgb(255,255,255,0.5)"}}>0 Posts</h1>
           }
           </div>
        </main>
    )
}
export default Main;