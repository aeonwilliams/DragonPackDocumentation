with open("../template.html") as file:
    template_contents = file.read()

with open("class_list.txt") as file:
    class_file_list = []
    class_name_list = []

    for line in file: 
        line = line.lstrip()
        line = line.rstrip()
        class_name_list.append(line)
        line = line.replace(" ", "_") 
        line = line.lower()
        class_file_list.append(line)

class_file_list.sort()

for x in class_file_list:
    with open("classes/" + x + ".html", "w") as file:
        file.write(template_contents)

with open("sidebar_components.html", "w") as file:
    for x, y in zip(class_file_list, class_name_list):
        file.write("<li><a href=\"" + x + "\">" + y + "</a></li>")