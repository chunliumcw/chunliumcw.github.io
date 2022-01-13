import sys
import bibtexparser

with open('bib_from_sample.txt') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

# print(bib_database.entries)
# print()


for entry in bib_database.entries:
    # print(entry)

    str_title =entry["title"]
    str_author=entry["author"]
    
    
    str_venue=""
    if "booktitle" in entry.keys():
        str_venue=entry["booktitle"]
    elif "journal" in entry.keys():
        str_venue=entry["journal"]
    elif "publisher" in entry.keys():
        str_venue=entry["publisher"]
    
    if "series" in entry.keys():
        str_venue+=" ("+entry["series"]+")"

    # print(str_title)
    # print(str_author)
    # print(str_venue)
    # print()

    str_url=""
    if "url" in entry.keys():
        str_url=entry["url"]

    str_image="dummy-images/white.png"

    print("            <div class=\"media mb-3\">")
    print("                <img src=\""+str_image+"\" class=\"align-self-center mr-3 project-image\" alt=\"...\">")
    print("                <div class=\"media-body align-self-center\">")
    print("                    <p class=\"pub_title\">"+str_title+"</p>")
    print("                    <p  class=\"pub_author\">"+str_author+"</p>")
    print("                    <p  class=\"pub_venue\">"+str_venue+"</p>")
    print("                    <!-- Nav links -->")
    print("                    <li class=\"pub_nav_li\"><a class=\"pub_nav_a\" href=\"PDF LINK\">PDF</a></li>")
    print("                    <li class=\"pub_nav_li\"><a class=\"pub_nav_a\" href=\"#\">Video</a></li>")
    print("                    <li class=\"pub_nav_li\"><a class=\"pub_nav_a\" href=\""+str_url+"\">ACM DL</a></li>")
    print("                    <li class=\"pub_nav_li\"><a class=\"pub_nav_a\" href=\"#\">BibTeX</a></li>")
    print("                </div>")
    print("            </div>")