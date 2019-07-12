@echo off

if exist "classes" rmdir /Q/S classes
mkdir classes
if exist "sidebar_components.html" del /Q/S "sidebar_components.html"

CALL python side_bar_generator.py