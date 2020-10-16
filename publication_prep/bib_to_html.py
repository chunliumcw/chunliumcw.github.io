#
import os

import pprint
import bibtexparser


with open('citations.bib') as bibtex_file:
    bib_parse = bibtexparser.bparser.BibTexParser(common_strings=True)
    bib_database = bib_parse.parse_file(bibtex_file)


for paper in bib_database.entries:
	title=paper['title']
	authors=paper['author']

	if 'url' in paper:
		url=paper['url']
	else:
		url="URL_NOT_FOUND"

	if 'journal' in paper:
		conference=paper['journal']
	elif 'booktitle' in paper:
		conference=paper['booktitle']
	else:
		conference="CONFERENCE_NOT_FOUND"

	if 'year' in paper:
		year=', '+paper['year']
	else:
		year=''

	print("<div class=\"media mb-3\">")
	print("    <img src=\"dummy-images/white.png\" class=\"align-self-center mr-3 project-image\" alt=\"...\">")
	print("    <div class=\"media-body align-self-center\">")
	print("        <h5 class=\"mt-0\">"+title+"</h5>")
	print("        <p class=\"mb-1\">"+authors+"</p>")
	print("        <p class=\"mb-0\">"+conference+year+"</p>")
	print("        <!-- Nav links -->")
	print("        <ul class=\"nav\">")
	# print("            <li class=\"nav-item\"><a class=\"nav-link pl-0\" href=\"PDF LINK\">PDF</a></li>")
	print("            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Video</a></li>")
	print("            <li class=\"nav-item\"><a class=\"nav-link\" href=\""+url+"\">link</a></li>")
	# print("            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">BibTeX</a></li>")
	print("        </ul>")
	print("    </div>")
	print("</div>")
	print("")
