txt = open('js/questions.txt', 'r')
js = open('js/questions.js', 'w')
first = True
for line in txt:
	if first:
		js.write('var q = [')
		js.write("\n\t'" + line.rstrip() + "'")
		first = False
	else:
		js.write(",\n\t'" + line.rstrip() + "'")
js.write('\n\t]')
js.close()