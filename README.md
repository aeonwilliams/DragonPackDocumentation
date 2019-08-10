# DragonPackDocumentation
Web files for the DragonPack website/documentation.

There is no official style guide, the but documentation wording and overall style should remain as consistent as possible.

For each class web page, fill out:
Title: "DragonPack - Class Name"
Class Header: "Class Name"
File Name: "FileName.cs"
Basic Description: A basic description, based on the class description in the cs file. 
Suggested Use: How to best use the component.
Projects Found In: Examples found in: "Projectx", "Projecty"
Components Table: Fill out, using the templates from common_component_elements so that it matches Unity's UI as close as possible.

To modify the side/top bar, modify side_bar_top.html or top_bar.html. Run compile_docs.bat in the console, then the changes will be reflected in the webpages.

To push the changes to the website http://mcdp0.digipen.edu/dragonpackupload zip all of the files together, then move the zipped folder out of the project directory. Upload that folder. DO NOT zip the directory folder and upload that, as that will change the path to view the website. The path should always be: http://mcdp0.digipen.edu/dragonpack/
