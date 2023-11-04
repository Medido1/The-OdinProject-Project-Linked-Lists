import { LinkedList } from "./script.js";

const linkedListContainer = document.querySelector(".linked_list");
const appendBtn = document.querySelector(".append_btn");
const prependBtn = document.querySelector(".prepend_btn");
const currentSize = document.querySelector(".size");
const getHeadbtn = document.querySelector(".getHead");
const getTailBtn = document.querySelector(".getTail");
const getNodeBtn = document.querySelector(".getNode");
const popBtn = document.querySelector(".pop");
const containsBtn = document.querySelector(".contains");
const findBtn = document.querySelector(".find");
const insertAtBtn = document.querySelector(".insertAt");
const removeBtn = document.querySelector(".remove");

let myLinkedList = new LinkedList;

function showLinkedList(){
  let str = myLinkedList.toString();
  if (str == ' null'){
    linkedListContainer.textContent = "empty linked list :("
  }
  else {
    linkedListContainer.textContent = str;
  }
  updateSize();
}

function appendValue(){
  let value = prompt("enter a value");
  myLinkedList.append(value);
  showLinkedList();
}

function prependValue(){
  let value = prompt("enter a value");
  myLinkedList.prepend(value);
  showLinkedList();
  console.log("duck");
}

function updateSize(){
  let size = myLinkedList.size();
  currentSize.textContent = `LinkedList size = ${size}`;
}

function getHead(){
  let node = myLinkedList.getHead();
  if (node == null) alert(null);

  else if (node.nextNode){
    alert(`{data : ${node.data}, nextNode : Node}`);
  }
  else {
    alert(`{data : ${node.data}, nextNode : null}`);
  }
}

function getTail(){
  let node = myLinkedList.getTail();
  if (node == null) alert(null);
  else {
    alert(`{data : ${node.data}, nextNode : null}`);
  }
}

function getNode(){
  let index = parseInt(prompt("enter index: "));
  if (isNaN(index)){
    alert("invalid index");
    return;
  }
  let node = myLinkedList.at(index);
  if (node == null) {
    alert(null) 
    return};
  if (node.nextNode){
    alert(`{data : ${node.data}, nextNode : Node}`);
  }
  else {
    alert(`{data : ${node.data}, nextNode : null}`);
  }
}

function popNode(){
  myLinkedList.pop();
  showLinkedList();
}

function checkForValue(){
  let value = prompt("enter value");
  let check = myLinkedList.contains(value);
  alert(check);
}

function findValue(){
  let value = prompt("enter value");
  let index = myLinkedList.find(value);
  if (index == null) alert(null)
  else {
    alert(`index = ${index}`);
  }
}

function insertAt(){
  let value = prompt("enter value");
  let index = parseInt(prompt("enter index"));
  if (isNaN(index)){
    alert("enter a valid index");
    return;
  }
  myLinkedList.insertAt(value, index);
  showLinkedList();
}

function removeAt(){
  let index = parseInt(prompt("enter index of the value you want to remove: "));
  if (isNaN(index)){
    alert("enter a valid index")
  }
  else{
    myLinkedList.removeAt(index);
    showLinkedList();
  }
}


appendBtn.addEventListener("click", appendValue);
prependBtn.addEventListener("click", prependValue);
getHeadbtn.addEventListener("click", getHead);
getTailBtn.addEventListener("click", getTail);
getNodeBtn.addEventListener("click", getNode);
popBtn.addEventListener("click", popNode);
containsBtn.addEventListener("click", checkForValue);
findBtn.addEventListener("click", findValue);
insertAtBtn.addEventListener("click", insertAt);
removeBtn.addEventListener("click", removeAt);

showLinkedList();
