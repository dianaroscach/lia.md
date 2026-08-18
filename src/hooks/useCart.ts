"use client";
import {useSyncExternalStore} from "react";import type {Product} from "@/types/product";
export type CartLine={product:Product;quantity:number};const KEY="ciocarlia-cart",EMPTY:CartLine[]=[];let cachedRaw="",cachedItems:CartLine[]=EMPTY;
const read=():CartLine[]=>{try{const raw=localStorage.getItem(KEY)||"[]";if(raw!==cachedRaw){cachedRaw=raw;cachedItems=JSON.parse(raw) as CartLine[]}return cachedItems}catch{return EMPTY}};
const subscribe=(callback:()=>void)=>{window.addEventListener("cart:update",callback);window.addEventListener("storage",callback);return()=>{window.removeEventListener("cart:update",callback);window.removeEventListener("storage",callback)}};
const save=(next:CartLine[])=>{localStorage.setItem(KEY,JSON.stringify(next));window.dispatchEvent(new Event("cart:update"))};
export function useCart(){const items=useSyncExternalStore(subscribe,read,()=>EMPTY);return{items,add:(product:Product)=>{const current=read(),found=current.find(x=>x.product.id===product.id);save(found?current.map(x=>x.product.id===product.id?{...x,quantity:x.quantity+1}:x):[...current,{product,quantity:1}])},remove:(id:string)=>save(read().filter(x=>x.product.id!==id)),change:(id:string,quantity:number)=>save(read().map(x=>x.product.id===id?{...x,quantity:Math.max(1,quantity)}:x)),subtotal:items.reduce((s,x)=>s+x.product.price*x.quantity,0)}}
