"use strict";
var element = document.documentElement;

if(element.scrollHeight > element.clientHeight)
{
  element.style.overflow = 'scrollbar';
}
else
{
  element.style.overflow = 'hidden';
}
