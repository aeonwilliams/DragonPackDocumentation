#Scans the LPK Script directory and creates a text file with an alphabetized list of all the components

import os #parse through directory

#directory for LPK scripts
directory = "C:\\Users\\Aeon Williams\\Documents\\Work\\Unity Projects\\SandBox\\Assets\\Scripts\\LPK"

component_file_names = []
component_readable_names = []

#parse through LPK script directory
for file in os.listdir(directory):
  if file.endswith(".cs"):
    component = file.replace("LPK_", "")
    component = component.replace(".cs", "")
    i = 0
    num_underscores = 0
    component_file_name = component
    component_readable_name = component
    while i < len(component):
      if component[i].isupper() and i > 0:
        if i < (len(component) - 1):
          if not component[i+1].isupper():
            component_file_name = component_file_name[:i+num_underscores] + "_" + component_file_name[i+num_underscores:]
            component_readable_name = component_readable_name[:i+num_underscores] + " " + component_readable_name[i+num_underscores:]
            num_underscores = num_underscores + 1
      i = i + 1
    component_file_name = component_file_name.lower()
    component_readable_names.append(component_readable_name)
    component_file_names.append(component_file_name)

with open("component_list.txt",'w') as f:
  for i in range(len(component_readable_names)):
    f.write(component_readable_names[i] + "\n")
  f.close()
  
with open("component_list_files.txt",'w') as f:
  for i in range(len(component_file_names)):
    f.write(component_file_names[i] + "\n")
  f.close()