"use client";import {useState} from "react";export const useMobileMenu=()=>{const [isOpen,setIsOpen]=useState(false);return{isOpen,toggle:()=>setIsOpen(v=>!v),close:()=>setIsOpen(false)}};
