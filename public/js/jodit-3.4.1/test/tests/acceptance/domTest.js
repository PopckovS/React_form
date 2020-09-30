describe('Check Dom module', function() {
	const Dom = Jodit.modules.Dom;

	describe('Method each', function() {
		it('Should pass through all child nodes', function() {
			const node = document.createElement('div');

			node.innerHTML = '<ul>' +
				'<li>1</li>' +
				'<li>2</li>' +
				'<li><img> text</li>' +
				'</ul>';

			const names = [];
			Dom.each(node, function(elm) {
				names.push(elm.nodeName);
			});
			expect('UL,LI,#text,LI,#text,LI,IMG,#text').equals(names.toString());
		});
	});

	describe('Method isBlock', function() {
		it('Should return true then it gets BLOCK element', function() {
			expect(true).equals(Dom.isBlock(document.documentElement, window));
			expect(true).equals(Dom.isBlock(document.createElement('div'), window));
			expect(true).equals(Dom.isBlock(document.createElement('table'), window));
			expect(true).equals(Dom.isBlock(document.createElement('dt'), window));
			expect(true).equals(Dom.isBlock(document.createElement('dd'), window));
		});
		it('Should return false then it gets not BLOCK element', function() {
			expect(false).equals(Dom.isBlock(document.createTextNode('test'), window));
			expect(false).equals(Dom.isBlock(document.createElement('span'), window));
		});
	});

	describe('Method isInlineBlock', function() {
		it('Should return true then it gets inline or inline-block element', function() {
			const box = document.createElement('div');
			box.innerHTML = '<p>' +
				'<span>test</span>' +
				'<strong>test</strong>' +
				'<span style="display: block">test</span>' +
				'</p>';
			document.body.appendChild(box);

			expect(true).equals(Dom.isInlineBlock(box.firstChild.childNodes[0]));
			expect(true).equals(Dom.isInlineBlock(box.firstChild.childNodes[1]));
			expect(false).equals(Dom.isInlineBlock(box.firstChild.childNodes[2]));
			expect(false).equals(Dom.isInlineBlock(box.firstChild));

			document.body.removeChild(box);
		});
	});

	describe('Method isEmpty', function() {
		it('Should return true then element is empty', function() {
			expect(true).equals(Dom.isEmpty(document.createElement('div')));
			expect(true).equals(Dom.isEmpty(document.createElement('table')));
			expect(true).equals(Dom.isEmpty(document.createTextNode('\uFEFF')));
			expect(true).equals(Dom.isEmpty(document.createTextNode(' ')));

			const node = document.createElement('div');
			node.innerHTML = '<ul>' +
				'<li></li>' +
				'<li></li>' +
				'<li></li>' +
				'</ul>';

			expect(true).equals(Dom.isEmpty(node));
		});
		it('Should return false then element is not empty', function() {
			expect(false).equals(Dom.isEmpty(document.documentElement));
			expect(false).equals(Dom.isEmpty(document.createTextNode('test')));

			const node = document.createElement('div');
			node.innerHTML = '<ul>' +
				'<li>1</li>' +
				'<li>2</li>' +
				'<li><img> text</li>' +
				'</ul>';

			expect(false).equals(Dom.isEmpty(node));
		});
	});

	describe('Method isOrContains', function() {
		it('Should return true if element inside root', function() {
			const node = document.createElement('div');
			const node2 = document.createElement('div');
			const node3 = document.createElement('div');
			const node4 = document.createElement('div');
			const text = document.createTextNode('div');
			const text2 = document.createTextNode('div');

			node.appendChild(node2)
			node2.appendChild(node3)
			node3.appendChild(node4)
			node4.appendChild(text)

			document.body.appendChild(text2);

			expect(true).equals(Dom.isOrContains(node, node));
			expect(true).equals(Dom.isOrContains(node, node2));
			expect(true).equals(Dom.isOrContains(node, node3));
			expect(true).equals(Dom.isOrContains(node, node4));
			expect(true).equals(Dom.isOrContains(node, text));

			expect(false).equals(Dom.isOrContains(node, node, true));
			expect(false).equals(Dom.isOrContains(node, text2));

			document.body.removeChild(text2);
		});
	});

	describe('Method up', function() {
		it('Should return node if element inside root', function() {
			const node = document.createElement('div');
			const node2 = document.createElement('div');
			const node3 = document.createElement('div');
			const node4 = document.createElement('div');
			const text = document.createTextNode('div');
			const text2 = document.createTextNode('div');

			node.appendChild(node2)
			node2.appendChild(node3)
			node3.appendChild(node4)
			node4.appendChild(text)

			document.body.appendChild(text2);

			expect(node2).equals(Dom.up(text, function (nd) {
				return nd === node2;
			}, node));

			expect(text).equals(Dom.up(text, function (nd) {
				return nd === text;
			}, node));

			expect(null).equals(Dom.up(text, function (nd) {
				return nd === text2;
			}, node));

			expect(null).equals(Dom.up(text, function (nd) {
				return nd === node;
			}, node));

			expect(node).equals(Dom.up(text, function (nd) {
				return nd === node;
			}, node, true));

			document.body.removeChild(text2);
		});
	});
});
