#!/usr/bin/env node
const cm=require('commander');
const inquirer=require('inquirer');
const down=require("./bin/downproject.js");
cm.version('1.2.0','-v --version');
cm.command('init <name>').action((name)=>{
	inquirer.prompt([
	  {
		  type:'input',
		  name:'projectname',
		  message:'项目叫什么名字?'
	  }
	]).then((answers)=>{
        down(answers.projectname);
	})
})
cm.parse(process.argv);