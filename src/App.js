import React from 'react';
import Post from './components/Post';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const WITHCER_IMAGE = "https://pbs.twimg.com/profile_images/1138480974227025920/UmdmIbjZ_400x400.png";
const CIRI_IMAGE = "https://i.pinimg.com/originals/2a/6f/b3/2a6fb3d90600393b714cf5973dc19710.jpg";
const XENAPRINCES_IMAGE = "https://fantlab.ru/blogfiles/b10806/img/1";
const XENA_IMAGE = "https://avatars.mds.yandex.net/get-zen_doc/1333513/pub_5e3a48d44dde974aca0a7979_5e3a58423c25fe42aced7e01/scale_1200";

const postList = [
{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
            content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date:"26 февр.",
},
{
  name: "Cirilla",
  photo: WITHCER_IMAGE,
  nickname: "@falka",
  content:"Do you really wish to know?",
  image: CIRI_IMAGE,
  date:"25 мая.",
},
{
  name: "XENA",
  photo: XENAPRINCES_IMAGE,
  nickname: "@warrior_princess",
  content:"If you can run, run.",
  image: XENA_IMAGE,
  date:"23 февр.",
},
];

function App(){
  return(
    <div >
      { postList.map(post => <Post {...post}/>)}
    </div>
  )
}


export default App;
