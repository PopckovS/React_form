describe('Iframe mode', function() {
	describe('Create editor with iframe node', function() {
		it('Should create editable area in another document', function(done) {
			unmockPromise();
			Jodit.make(appendTestArea(), {
				iframe: true,
				events: {
					afterConstructor: function(editor) {
						expect(editor.ownerDocument).does.not.equal(
							editor.ed
						);
						expect('true').equals(
							editor.ed.body.getAttribute(
								'contenteditable'
							)
						);
						done();
					}
				}
			});
		});

		describe('And exec command', function() {
			it('Should use body like editor area', function(done) {
				unmockPromise();
				Jodit.make(appendTestArea(), {
					iframe: true,
					events: {
						afterConstructor: function(editor) {
							mockPromise();
							editor.value = 'test test stop';

							expect(editor.ed.body.innerHTML).equals(
								'<p>test test stop</p>'
							);

							const range = editor.s.createRange();
							range.selectNodeContents(
								editor.ed.body
							);
							editor.s.selectRange(range);

							editor.execCommand('bold');

							expect(editor.ed.body.innerHTML).equals(
								'<p><strong>test test stop</strong></p>'
							);

							done();
						}
					}
				});
			});
		});

		describe('Set value right after construct', function() {
			it('Should set/get value without some trouble', function() {
				const area = appendTestArea();

				area.value = 'stop';

				const editor = new Jodit(area, {
					iframe: true
				});

				expect(editor.value).equals('<p>stop</p>');
				editor.value = 'test1';
				expect(editor.value).equals('<p>test1</p>');
			});
		});

		describe('Enable editHTMLDocumentMode', function() {
			describe('With DIV source element', function() {
				it('Should throw error', function() {
					const div = appendTestDiv();

					expect(function() {
						Jodit.make(div, {
							iframe: true,
							editHTMLDocumentMode: true
						});
					}).throws(TypeError);
				});
			});

			describe('With AREA source element', function() {
				const opt = {
					iframe: true,
					iframeTitle: 'Hi',
					disablePlugins: ['size'],
					height: 300,
					iframeStyle: '',
					iframeCSSLinks: [],
					editHTMLDocumentMode: true
				};

				it('Should work fine', function() {
					const area = appendTestArea();

					expect(function() {
						Jodit.make(area, opt);
					}).does.not.throws(TypeError);
				});

				describe('editor.value', function() {
					it('Should return entire HTML', function() {
						const editor = Jodit.make(appendTestArea(), opt);

						expect(
							sortAttributes(
								editor.value
									.replace(/[\t\n]/g, '')
									.replace(/<br>/g, '')
							)
						).equals(
							'<!DOCTYPE html><html lang="en">' +
								'<head><title>Hi</title></head>' +
								'<body spellcheck="true" ></body>' +
								'</html>'
						);
					});

					describe('Set some part of HTML', function() {
						it('Should insert this part inside BODY', function() {
							const editor = Jodit.make(appendTestArea(), opt);
							editor.value = '<strong>Test</strong>';

							expect(
								sortAttributes(
									editor.value
										.replace(/[\t\n]/g, '')
										.replace(/<br>/g, '')
								)
							).equals(
								'<!DOCTYPE html><html lang="en">' +
									'<head><title>Hi</title></head>' +
									'<body spellcheck="true" >' +
									'<p><strong>Test</strong></p></body></html>'
							);
						});
					});

					describe('Set entire HTML', function() {
						it('Should replace entire document', function() {
							const editor = Jodit.make(appendTestArea(), opt);
							editor.value =
								'<!DOCTYPE html><html lang="en"><head><title>Hi</title></head><body><strong>Test1</strong></body></html>';

							expect(
								sortAttributes(
									editor.value.replace(/[\t\n]/g, '')
								)
							).equals(
								'<!DOCTYPE html><html lang="en"><head><title>Hi</title></head><body ><p><strong>Test1</strong></p></body></html>'
							);
						});
					});
				});
			});
		});
	});

	describe('Define document for iframe from some site', function() {
		it('Should work perfect', function(done) {
			unmockPromise();
			const area = appendTestArea();

			area.value = '<p>start value</p>';

			Jodit.make(area, {
				iframe: true,
				events: {
					afterConstructor: function(jodit) {
						expect(
							jodit.editor.getAttribute('secret-attribute')
						).equals('435'); // loaded from index.html
						expect(Jodit.ns.Helpers.trim(jodit.value)).equals(
							'<p>test 435</p>'
						); // loaded from index.html
						done();
					},
					beforeSetValueToEditor: function() {
						return false;
					},
					['generateDocumentStructure.iframe']: function(doc, jodit) {
						jodit.events.stopPropagation(
							'generateDocumentStructure.iframe'
						);
						return new Promise(resolve => {
							jodit.iframe.onload = function() {
								resolve();
							};

							setTimeout(function() {
								resolve();
							}, 4000);

							jodit.iframe.src = 'test.index.html';
						});
					}
				}
			});
		}).timeout(5000);
	});

	afterEach(removeStuff);
});

describe('Editor inside iframe', function() {
	describe('In creator doc field', function() {
		it('Should be iframe.contentDocument', function() {
			const iframe = document.createElement('iframe');
			iframe.style.width = '900px';
			box.appendChild(iframe);

			const win = iframe.contentWindow;
			const doc = win.document;
			doc.open();
			doc.write(
				'<html lang="en"><body><textarea id="editor"></textarea><' +
					'script src="./build/jodit.js"><' +
					'/script></body></html>'
			);
			doc.close();

			const editor = new Jodit('#editor', {
				ownerWindow: win,
				ownerDocument: doc
			});

			expect(editor.create.doc).does.not.equal(document);
			expect(editor.create.doc).equals(doc);
			expect(editor.createInside.doc).equals(doc);

			editor.destruct();
			Jodit.modules.Dom.safeRemove(iframe);
		});
	});
});
