import React, { Component } from 'react';
import './search.css';
import { getDatabase, child, ref ,get } from "firebase/database";

const Search = () =>  {
    function search() {
        let searchFor=(document.querySelector('.searchInput').value).toLowerCase();
        const search0 = searchFor.split(" ")[0];
        const search1 = searchFor.split(" ")[1];
        const search2 = searchFor.split(" ")[2];
        const db = ref(getDatabase());
        get(child(db, search0.toLowerCase())).then((setup)=>{
            if(setup.exists()){
                console.log(setup.val());
            }else{
                console.log("No Data found");
            }
        }).catch((err)=>{
            console.log(err);
        });
        if (search1.length !== 0){
            get(child(db, 'tags/'+search1.toLowerCase())).then((setup)=>{
                if(setup.exists()){
                    console.log(setup.val());
                }else{
                    console.log("No Data found");
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
        if(search2.length !==0){
            get(child(db, 'tags/'+search2.toLowerCase())).then((setup)=>{
                if(setup.exists()){
                    console.log(setup.val());
                }else{
                    console.log("No Data found");
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
        
        console.log(searchFor);
    }
    
   
    return (
        <div className='searchMenu'>
            <div className='searchBar'>
                <input className='searchInput' id="iconPackURL" placeholder="Search Here" required/>
                <button className='searchButton' onClick={search}><ion-icon name="search-outline"></ion-icon></button>
            </div>
            <div className='availableSearches'>
                <h5 className='headerSearch'>Try Searching For:</h5><br/>
                <div className='objects'>
                    <ul className='listSearch'>
                        <li>
                            <p>#Dark</p>
                        </li>
                        <li>
                            <p>#Amoled</p>
                        </li>
                        <li>
                            <p>#Black</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    );
}

export default Search;