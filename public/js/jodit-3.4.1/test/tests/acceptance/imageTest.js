describe('Test image', function() {
	describe('Image properties dialog', function() {
		describe('Double click on image', function() {
			it('should open image properties dialog', function() {
				const editor = getJodit();

				editor.value = '<img src="tests/artio.jpg"/>';

				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				expect(dialog).is.not.null;
			});

			describe('Disable by image.openOnDblClick', function() {
				it('should not open image properties dialog', function() {
					const editor = getJodit({
						image: {
							openOnDblClick: false
						}
					});

					editor.value = '<img src="tests/artio.jpg"/>';
					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					expect(dialog).is.null;
				});
			});
		});

		describe('Change border radius', function() {
			it('should change image border radius', function() {
				const editor = getJodit();

				editor.value =
					'<img style="width:100px; height: 100px; border-radius: 10px;" src="tests/artio.jpg"/>';

				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				expect(dialog).is.not.null;

				simulateEvent(
					'click',
					0,
					dialog.querySelectorAll('.jodit-tabs__buttons button')[1]
				);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');
				expect(tab).is.not.null;

				const input = tab.querySelector('[data-ref="borderRadius"]');
				expect(input).is.not.null;

				expect(input.value.toString()).equals('10');

				input.value = 100;

				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><img src="tests/artio.jpg" style="border-radius:100px;height:100px;width:100px"></p>'
				);
			});
		});

		describe('Change classes', function() {
			it('should change image classlist', function() {
				const editor = getJodit();

				editor.value =
					'<img class="images123" style="width:100px; height: 100px;" src="tests/artio.jpg"/>';

				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				expect(dialog).is.not.null;

				simulateEvent(
					'click',
					0,
					dialog.querySelectorAll('.jodit-tabs__buttons button')[1]
				);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');
				expect(tab).is.not.null;

				const input = tab.querySelector('[data-ref="classes"]');
				expect(input).is.not.null;

				expect(input.value.toString()).equals('images123');

				input.value = 'tavble ';
				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><img class="tavble " src="tests/artio.jpg" style="height:100px;width:100px"></p>'
				);
			});
		});

		describe('Change styles', function() {
			it('should change image styles', function() {
				const editor = getJodit();

				editor.value =
					'<img style="padding:10px;width:100px; height: 100px;" src="tests/artio.jpg"/>';
				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				expect(dialog).is.not.null;

				simulateEvent(
					'click',
					0,
					dialog.querySelectorAll('.jodit-tabs__buttons button')[1]
				);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');
				expect(tab).is.not.null;

				const input = tab.querySelector('[data-ref="style"]');
				expect(input).is.not.null;

				expect(sortStyles(input.value.toString())).equals(
					'height:100px;padding:10px;width:100px'
				);

				input.value = 'padding:20px;background-color: #ff0000;';
				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><img src="tests/artio.jpg" style="background-color:#FF0000;height:100px;padding:20px;width:100px"></p>'
				);
			});
		});

		describe('Change id', function() {
			it('should change image id', function() {
				const editor = getJodit();

				editor.value =
					'<img id="stop123"  style="width:100px; height: 100px;"  src="tests/artio.jpg"/>';

				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				expect(dialog).is.not.null;

				simulateEvent(
					'click',
					0,
					dialog.querySelectorAll('.jodit-tabs__buttons button')[1]
				);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');
				expect(tab).is.not.null;

				const input = tab.querySelector('[data-ref="id"]');
				expect(input).is.not.null;

				expect(input.value.toString()).equals('stop123');

				input.value = 'fast12';
				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><img id="fast12" src="tests/artio.jpg" style="height:100px;width:100px"></p>'
				);
			});
		});

		describe('Change align', function() {
			describe('left', function() {
				it('should change image horizontal align', function() {
					const editor = getJodit();

					editor.value =
						'<img  style="width:100px; height: 100px;"  src="tests/artio.jpg"/>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);
					expect(tab).is.not.null;

					const input = tab.querySelector('[data-ref="align"]');
					expect(input).is.not.null;

					expect(input.value.toString()).equals('');

					input.value = 'left';
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="float:left;height:100px;width:100px"></p>'
					);
				});
			});

			describe('right', function() {
				it('should change image horizontal align', function() {
					const editor = getJodit();

					editor.value =
						'<img  style="width:100px; height: 100px;"  src="tests/artio.jpg"/>';
					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);
					expect(tab).is.not.null;

					const input = tab.querySelector('[data-ref="align"]');
					expect(input).is.not.null;

					expect(input.value.toString()).equals('');

					input.value = 'right';
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="float:right;height:100px;width:100px"></p>'
					);
				});
			});

			describe('center', function() {
				it('should change image horizontal align', function() {
					const editor = getJodit();

					editor.value =
						'<img style="float:left;width:100px; height: 100px;" src="tests/artio.jpg"/>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);
					expect(tab).is.not.null;

					const input = tab.querySelector('[data-ref="align"]');
					expect(input).is.not.null;
					expect(input.value.toString()).equals('left');

					input.value = 'center';
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="display:block;height:100px;margin-left:auto;margin-right:auto;width:100px"></p>'
					);
				});
			});

			describe('Clear align', function() {
				it('should clear some align', function() {
					const editor = getJodit();

					editor.value =
						'<img src="tests/artio.jpg" style="width:100px; height: 100px;display:block;margin-left:auto;margin-right:auto">';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);
					expect(tab).is.not.null;

					const input = tab.querySelector('[data-ref="align"]');
					expect(input).is.not.null;

					expect(input.value.toString()).equals('center');

					input.value = '';
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="height:100px;width:100px"></p>'
					);
				});
			});
		});

		describe('Change margins', function() {
			describe('Change marginTop with lock', function() {
				it('should change all margins', function() {
					const editor = getJodit();

					editor.value =
						'<img style="margin: 10px;width:100px; height: 100px;" src="tests/artio.jpg"/>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					const marginTop = tab.querySelector(
						'[data-ref="marginTop"]'
					);

					expect(marginTop).is.not.null;

					const marginBottom = tab.querySelector(
						'[data-ref="marginBottom"]'
					);
					expect(marginBottom).is.not.null;

					expect(marginTop.value).equals('10');

					expect(marginBottom.hasAttribute('disabled')).is.true;

					marginTop.value = 100;
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="height:100px;margin:100px;width:100px"></p>'
					);
				});
			});

			describe('Change marginTop with unlock', function() {
				it('should change only marginTop', function() {
					const editor = getJodit();

					editor.value =
						'<img style="margin: 10px;width:100px; height: 100px;" src="tests/artio.jpg"/>';
					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					simulateEvent(
						'click',
						0,
						dialog.querySelectorAll(
							'.jodit-tabs__buttons button'
						)[1]
					);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					const locker = tab.querySelector('[data-ref="lockMargin"]');
					expect(locker).is.not.null;
					const lockerimg = locker.innerHTML;
					simulateEvent('click', 0, locker);
					expect(locker.innerHTML).does.not.equal(lockerimg);

					expect(
						tab
							.querySelector('[data-ref="marginTop"]')
							.value.toString()
					).equals('10');
					expect(
						tab
							.querySelector('[data-ref="marginBottom"]')
							.value.toString()
					).equals('10');
					expect(
						tab
							.querySelector('[data-ref="marginLeft"]')
							.value.toString()
					).equals('10');
					expect(
						tab
							.querySelector('[data-ref="marginRight"]')
							.value.toString()
					).equals('10');
					expect(
						tab
							.querySelector('[data-ref="marginBottom"]')
							.hasAttribute('disabled')
					).is.false;

					tab.querySelector('[data-ref="marginTop"]').value = 100;
					tab.querySelector('[data-ref="marginBottom"]').value = 10;
					tab.querySelector('[data-ref="marginRight"]').value = 20;
					tab.querySelector('[data-ref="marginLeft"]').value = 220;
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="height:100px;margin:100px 20px 10px 220px;width:100px"></p>'
					);
				});
			});
		});

		describe('Change title', function() {
			it('should change image title', function() {
				const editor = getJodit();

				editor.value =
					'<img title="sting" style="width:100px; height: 100px;" src="tests/artio.jpg"/>';
				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');

				expect(tab).is.not.null;
				expect(tab.querySelector('[data-ref="imageTitle"]')).is.not
					.null;
				expect(
					tab.querySelector('[data-ref="imageTitle"]').value
				).equals('sting');

				dialog.querySelector('[data-ref="imageTitle"]').value = 'Stop';
				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><img src="tests/artio.jpg" style="height:100px;width:100px" title="Stop"></p>'
				);
			});
		});

		describe('Change alt', function() {
			it('should change image alt', function(done) {
				const editor = getJodit();
				const image = new Image();
				const doTest = function() {
					editor.value =
						'<img alt="test" style="width:100px; height: 100px;" src="tests/artio.jpg"/>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					expect(tab).is.not.null;
					expect(
						tab.querySelector('[data-ref="imageAlt"]')
					).does.not.equal(null);
					expect(
						tab.querySelector('[data-ref="imageAlt"]').value
					).equals('test');

					dialog.querySelector('[data-ref="imageAlt"]').value =
						'Stop';
					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img alt="Stop" src="tests/artio.jpg" style="height:100px;width:100px"></p>'
					);
					done();
				};

				image.src = 'tests/artio.jpg';

				onLoadImage(image, doTest);
			});
		});

		describe('Change link', function() {
			it('should change image wrapper', function() {
				const editor = getJodit();

				editor.value =
					'<img  style="width:100px; height: 100px;"  src="tests/artio.jpg"/>';

				simulateEvent(
					'dblclick',
					0,
					editor.editor.querySelector('img')
				);

				const dialog = getOpenedDialog(editor);

				const tab = dialog.querySelector('.jodit-tab.jodit-tab_active');

				expect(tab).is.not.null;
				expect(tab.querySelector('[data-ref="imageLink"]')).is.not.null;
				expect(
					tab.querySelector('[data-ref="imageLink"]').value
				).equals('');

				dialog.querySelector('[data-ref="imageLink"]').value =
					'https://xdsoft.net/';

				clickButton('ok', dialog);

				expect(sortAttributes(editor.value)).equals(
					'<p><a href="https://xdsoft.net/"><img src="tests/artio.jpg" style="height:100px;width:100px"></a></p>'
				);
			});

			describe('open link in new tab', function() {
				it('should change image wrapper with target="_blank"', function() {
					const editor = getJodit();

					editor.value =
						'<img style="width:100px; height: 100px;" src="tests/artio.jpg"/>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);
					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					expect(tab).is.not.null;
					expect(tab.querySelector('[data-ref="imageLink"]')).is.not
						.null;
					expect(
						tab.querySelector('[data-ref="imageLink"]').value
					).equals('');

					dialog.querySelector('[data-ref="imageLink"]').value =
						'https://xdsoft.net/';
					dialog.querySelector(
						'[data-ref="imageLinkOpenInNewTab"]'
					).checked = true;

					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><a href="https://xdsoft.net/" target="_blank"><img src="tests/artio.jpg" style="height:100px;width:100px"></a></p>'
					);
				});
			});

			describe('Open dialog for image wrapped in link', function() {
				it('should change image wrapper', function() {
					const editor = getJodit();

					editor.value =
						'<a href="https://xdan.ru" target="_blank"><img  style="width:100px; height: 100px;"  src="tests/artio.jpg"/></a>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);
					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					expect(tab).is.not.null;
					expect(tab.querySelector('[data-ref="imageLink"]')).is.not
						.null;
					expect(
						tab.querySelector('[data-ref="imageLink"]').value
					).equals('https://xdan.ru');
					expect(
						tab.querySelector('[data-ref="imageLinkOpenInNewTab"]')
							.checked
					).is.true;

					dialog.querySelector('[data-ref="imageLink"]').value =
						'https://xdsoft.net/';
					dialog.querySelector(
						'[data-ref="imageLinkOpenInNewTab"]'
					).checked = false;

					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><a href="https://xdsoft.net/"><img src="tests/artio.jpg" style="height:100px;width:100px"></a></p>'
					);
				});
			});

			describe('Unlink', function() {
				it('should remove image wrapper', function() {
					const editor = getJodit();

					editor.value =
						'<a href="https://xdan.ru" target="_blank"><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></a>';

					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);
					const tab = dialog.querySelector(
						'.jodit-tab.jodit-tab_active'
					);

					expect(tab).is.not.null;
					expect(tab.querySelector('[data-ref="imageLink"]')).is.not
						.null;
					expect(
						tab.querySelector('[data-ref="imageLink"]').value
					).equals('https://xdan.ru');
					expect(
						tab.querySelector('[data-ref="imageLinkOpenInNewTab"]')
							.checked
					).is.true;

					dialog.querySelector('[data-ref="imageLink"]').value = '';
					dialog.querySelector(
						'[data-ref="imageLinkOpenInNewTab"]'
					).checked = false;

					clickButton('ok', dialog);

					expect(sortAttributes(editor.value)).equals(
						'<p><img src="tests/artio.jpg" style="height:100px;width:100px"></p>'
					);
				});
			});
		});

		describe('Change size', function() {
			describe('dblclick on image and open dialog', function() {
				it('should create inputs contains width and height', function(done) {
					const area = appendTestArea();
					const editor = new Jodit(area);

					editor.value = '<img src="tests/artio.jpg"/>';
					const img = editor.editor.querySelector('img');

					const callback = function() {
						simulateEvent('dblclick', 0, img);

						expect(area.id).equals(editor.id);

						const dialog = getOpenedDialog(editor);
						expect(dialog).is.not.null;

						const imageWidth = dialog.querySelector(
							'[data-ref="imageWidth"]'
						);
						const imageHeight = dialog.querySelector(
							'[data-ref="imageHeight"]'
						);

						expect(imageWidth).is.not.null;
						expect(imageHeight).is.not.null;

						expect(imageWidth.value).equals(
							img.offsetWidth.toString()
						);
						expect(imageHeight.value).equals(
							img.offsetHeight.toString()
						);

						imageWidth.value = 100;
						simulateEvent('change', 0, imageWidth);
						expect(imageHeight.value).does.not.equal(
							img.offsetHeight.toString()
						);

						imageHeight.value = 200;
						simulateEvent('change', 0, imageHeight);
						expect(imageWidth.value).does.not.equal('100');

						clickButton('ok', dialog);

						expect(sortAttributes(editor.value)).equals(
							'<p><img src="tests/artio.jpg" style="height:200px;width:356px"></p>'
						);

						done();
					};

					onLoadImage(img, callback);
				});
			});

			describe('unlock ratio', function() {
				it('should create inputs with width and height', function(done) {
					const editor = getJodit();

					editor.value = '<img src="tests/artio.jpg"/>';
					const img = editor.editor.querySelector('img');

					const callback = function() {
						simulateEvent('dblclick', 0, img);

						const dialog = getOpenedDialog(editor);

						expect(dialog).is.not.null;

						const imageWidth = dialog.querySelector(
							'[data-ref="imageWidth"]'
						);
						const imageHeight = dialog.querySelector(
							'[data-ref="imageHeight"]'
						);
						const locker = dialog.querySelector(
							'[data-ref="lockSize"]'
						);

						expect(locker).is.not.null;
						expect(imageWidth).is.not.null;
						expect(imageHeight).is.not.null;

						expect(imageWidth.value).equals(
							img.offsetWidth.toString()
						);
						expect(imageHeight.value).equals(
							img.offsetHeight.toString()
						);

						simulateEvent('click', 0, locker);

						imageWidth.value = 100;
						simulateEvent('change', 0, imageWidth);
						expect(imageHeight.value).equals(
							img.offsetHeight.toString()
						);

						imageHeight.value = 200;
						simulateEvent('change', 0, imageHeight);
						expect(imageWidth.value).equals('100');

						clickButton('ok', dialog);

						expect(sortAttributes(editor.value)).equals(
							'<p><img src="tests/artio.jpg" style="height:200px;width:100px"></p>'
						);

						done();
					};

					onLoadImage(img, callback);
				});

				describe('Toggle ratio again', function() {
					it('should create connected inputs with width and height', function(done) {
						const editor = getJodit();

						editor.value = '<img src="tests/artio.jpg"/>';
						const img = editor.editor.querySelector('img');

						const callback = function() {
							simulateEvent('dblclick', 0, img);

							const dialog = getOpenedDialog(editor);
							expect(dialog).is.not.null;

							const imageWidth = dialog.querySelector(
								'[data-ref="imageWidth"]'
							);
							const imageHeight = dialog.querySelector(
								'[data-ref="imageHeight"]'
							);
							const locker = dialog.querySelector(
								'[data-ref="lockSize"]'
							);
							const lockerimg = locker.innerHTML;

							simulateEvent('click', 0, locker);
							expect(locker.innerHTML).does.not.equal(lockerimg);
							simulateEvent('click', 0, locker);
							expect(locker.innerHTML).equals(lockerimg);

							imageWidth.value = 100;
							simulateEvent('change', 0, imageWidth);
							expect(imageHeight.value).does.not.equal(
								img.offsetHeight.toString()
							);

							imageHeight.value = 200;
							simulateEvent('change', 0, imageHeight);
							expect(imageWidth.value).does.not.equal('100');

							clickButton('ok', dialog);

							expect(sortAttributes(editor.value)).equals(
								'<p><img src="tests/artio.jpg" style="height:200px;width:356px"></p>'
							);

							done();
						};

						onLoadImage(img, callback);
					});
				});
			});
		});

		describe('Show filebrowser buttons and edit image button', function() {
			describe("If uploader or filebrowser settings don't setted", function() {
				it('should not show buttons', function() {
					const editor = getJodit();

					editor.value = '<img src="tests/artio.jpg"/>';
					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					expect(dialog).is.not.null;

					const fb = dialog.querySelector('[data-ref="changeImage"]');
					expect(fb).is.not.null;

					const edit = dialog.querySelector(
						'[data-ref="changeImage"]'
					);
					expect(edit).is.not.null;

					expect(edit.parentNode.style.display).equals('none');
				});
			});

			describe('Uploader and filebrowser settings set', function() {
				const settings = {
					uploader: {
						url:
							'https://xdsoft.net/jodit/connector/index.php?action=fileUpload'
					},

					filebrowser: {
						// buttons: ['list', 'tiles', 'sort'],
						ajax: {
							url: 'https://xdsoft.net/jodit/connector/index.php'
						}
					}
				};

				it('should not show buttons', function() {
					const editor = new Jodit(appendTestArea(), settings);

					editor.value = '<img src="tests/artio.jpg"/>';
					simulateEvent(
						'dblclick',
						0,
						editor.editor.querySelector('img')
					);

					const dialog = getOpenedDialog(editor);

					expect(dialog.querySelector('[data-ref="changeImage"]')).is
						.not.null;

					expect(dialog.querySelector('[data-ref="changeImage"]')).is
						.not.null;
				});

				describe('Click on filebrowser button', function() {
					it('should open popup', function() {
						const editor = new Jodit(appendTestArea(), settings);

						editor.value = '<img src="tests/artio.jpg"/>';

						simulateEvent(
							'dblclick',
							0,
							editor.editor.querySelector('img')
						);

						const dialog = getOpenedDialog(editor);

						const rechange = dialog.querySelector(
							'[data-ref="changeImage"]'
						);

						expect(rechange).is.not.null;
						simulateEvent('click', 0, rechange);

						expect(getOpenedPopup(editor)).is.not.null;
					});
				});

				describe('Click on edit button', function() {
					describe('When photo it is not my', function() {
						it('should open image editor', function(done) {
							const editor = new Jodit(
								appendTestArea(),
								settings
							);

							editor.value =
								'<img src="https://xdsoft.net/jodit/build/images/artio.jpg"/>';
							simulateEvent(
								'dblclick',
								0,
								editor.editor.querySelector('img')
							);

							const dialog = getOpenedDialog(editor);

							expect(dialog).is.not.null;

							const edi = dialog.querySelector(
								'[data-ref="editImage"]'
							);
							expect(edi).is.not.null;

							simulateEvent('click', 0, edi);

							const dialog2 = getOpenedDialog(editor);
							expect(dialog2).is.not.null;
							expect(dialog2).does.not.equal(dialog);

							clickButton('ok', dialog2);

							const dialog3 = getOpenedDialog(editor);

							expect(dialog3).is.not.null;
							expect(dialog3).does.not.equal(dialog2);

							clickButton('ok', dialog3);

							const dialog4 = getOpenedDialog(editor);

							expect(dialog4).is.not.null;
							expect(dialog4).does.not.equal(dialog3);

							clickButton('ok', dialog4);

							expect(
								dialog.querySelector('[data-ref="imageSrc"]')
									.value
							).equals(
								'https://xdsoft.net/jodit/files/artio.jpg'
							);

							done();
						});
					});
				});
			});
		});
	});

	it('Double click on image then openOnDblClick=false should select image', function() {
		const editor = getJodit({
			image: { openOnDblClick: false }
		});
		editor.value = '<img src="tests/artio.jpg"/>';

		simulateEvent('dblclick', 0, editor.editor.querySelector('img'));
		const dialog = getOpenedDialog(editor);

		expect(dialog).is.null;

		expect(editor.s.current().tagName).equals('IMG');
	});

	describe('One click on image', function() {
		it('should show resizer', function() {
			const editor = getJodit();
			editor.value = '<img src="tests/artio.jpg"/>';

			const img = editor.editor.querySelector('img');

			simulateEvent('click', 0, img);

			const resizer = editor.ownerDocument.querySelector(
				'.jodit-resizer[data-editor_id=' + editor.id + ']'
			);

			expect(resizer).is.not.null;
		});

		describe('in full size mode', function() {
			it('should show resizer and set mmaximum zIndex', function() {
				const editor = getJodit({
					fullsize: true
				});
				editor.value = '<img src="tests/artio.jpg"/>';

				const img = editor.editor.querySelector('img');

				simulateEvent('click', 0, img);

				const resizer = document.querySelector(
					'.jodit-resizer[data-editor_id=' + editor.id + ']'
				);

				expect(resizer).is.not.null;
				expect(resizer.style.zIndex).equals(
					window.getComputedStyle(editor.container).zIndex
				);
			});
		});
	});

	it('One click inside table cell should show resizer', function() {
		const editor = getJodit();
		editor.value = '<table><tr><td>1</td></tr></table>';

		const td = editor.editor.querySelector('td');

		simulateEvent('click', 0, td);

		const resizer = document.querySelector(
			'.jodit-resizer[data-editor_id=' + editor.id + ']'
		);

		expect(resizer).is.not.null;
	});

	describe('Popup box', function() {
		describe('In relative object', function() {
			it('should be under image', function() {
				const div = document.createElement('div');
				div.innerHTML =
					'<div style="width:800px; margin:auto; border:1px solid red;">\n' +
					'        wrong image selection\n' +
					'        <div style="position:relative;text-align: left">\n' +
					'            <textarea id="text__area0"> <img src="https://xdsoft.net/jodit/build/images/artio.jpg" style="border:1px solid red;width:100px;height:100px;"/><br/><br/><br/><br/><br/><br/></textarea>\n' +
					'        </div>\n' +
					'    </div>';

				document.body.appendChild(div);
				const editor = new Jodit('#text__area0', {
					observer: {
						timeout: 0
					}
				});
				window.scrollTo(0, offset(div).top);
				simulateEvent('click', 0, editor.editor.querySelector('img'));

				const popup = getOpenedPopup(editor);

				expect(popup.parentNode.parentNode !== null).is.true;

				const positionPopup = Jodit.modules.Helpers.position(popup);
				const positionImg = Jodit.modules.Helpers.position(
					editor.editor.querySelector('img')
				);

				expect(Math.abs(positionPopup.left - positionImg.left) < 20).is
					.true;

				expect(
					Math.abs(
						positionPopup.top -
							(positionImg.top + positionImg.height)
					) < 20
				).is.true;

				editor.destruct();
				document.body.removeChild(div);
			});
		});

		describe('Click on button', function() {
			describe('H Align', function() {
				describe('Right', function() {
					it('Should change img H align to right', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);
						clickTrigger('left', popup);
						const list = getOpenedPopup(editor);

						clickButton('Right', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="float:right;height:100px;width:100px"></p>');
					});
				});

				describe('Left', function() {
					it('Should change img H align to left', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);
						clickTrigger('left', popup);
						const list = getOpenedPopup(editor);

						clickButton('Left', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="float:left;height:100px;width:100px"></p>');
					});
				});

				describe('Center', function() {
					it('Should change img H align to center', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);
						clickTrigger('left', popup);
						const list = getOpenedPopup(editor);

						clickButton('Center', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="display:block;height:100px;margin-left:auto;margin-right:auto;width:100px"></p>');
					});
				});

				describe('Normal', function() {
					it('Should change img H align to center', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px; float: right" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);
						clickTrigger('left', popup);
						const list = getOpenedPopup(editor);

						clickButton('Normal', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="height:100px;width:100px"></p>');
					});
				});
			});

			describe('V Align', function() {
				describe('Top', function() {
					it('Should change img V align to top', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);

						clickTrigger('valign', popup);
						const list = getOpenedPopup(editor);

						clickButton('Top', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="height:100px;vertical-align:top;width:100px"></p>');
					});
				});

				describe('Bottom', function() {
					it('Should change img V align to bottom', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);

						clickTrigger('valign', popup);
						const list = getOpenedPopup(editor);

						clickButton('Bottom', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="height:100px;vertical-align:bottom;width:100px"></p>');
					});
				});

				describe('Middle', function() {
					it('Should change img V align to Middle', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);

						clickTrigger('valign', popup);
						const list = getOpenedPopup(editor);

						clickButton('Middle', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="height:100px;vertical-align:middle;width:100px"></p>');
					});
				});

				describe('Normal', function() {
					it('Should change img V align to Normal', function() {
						const editor = getJodit();
						editor.value =
							'<p><img style="width:100px; vertical-align:middle; height: 100px;" src="tests/artio.jpg"/></p>';

						simulateEvent('click', editor.editor.querySelector('img'));

						const popup = getOpenedPopup(editor);

						clickTrigger('valign', popup);
						const list = getOpenedPopup(editor);

						clickButton('Normal', list);

						expect(sortAttributes(editor.value)).equals('<p><img src="tests/artio.jpg" style="height:100px;width:100px"></p>');
					});
				});
			});
		});
	});

	describe('Resize box', function() {
		describe('In relative object', function() {
			it('should be in front of image', function() {
				const div = document.createElement('div');
				div.innerHTML =
					'<div style="width:800px; margin:auto; border:1px solid red;">\n' +
					'        wrong image selection\n' +
					'        <div style="position:relative;text-align: left">\n' +
					'            <textarea id="text__area0"> <img src="https://xdsoft.net/jodit/build/images/artio.jpg" style="border:1px solid red;width:100px;height:100px;"/></textarea>\n' +
					'        </div>\n' +
					'    </div>';

				document.body.appendChild(div);

				const editor = new Jodit('#text__area0');
				simulateEvent('click', 0, editor.editor.querySelector('img'));

				const resizer = document.querySelector(
					'.jodit-resizer[data-editor_id=text__area0]'
				);
				expect(resizer).is.not.null;

				const positionResizer = offset(resizer);
				const positionImg = offset(editor.editor.querySelector('img'));

				expect(Math.abs(positionResizer.left - positionImg.left) < 2).is
					.true;
				expect(Math.abs(positionResizer.top - positionImg.top) < 2).is
					.true;

				editor.destruct();
				document.body.removeChild(div);
			});
		});

		describe('After resize - popup', function() {
			it('should be hidden and after this should be shown', function() {
				const div = document.createElement('div');
				div.innerHTML =
					'<div style="width:800px; margin:auto; border:1px solid red;">\n' +
					'        wrong image selection\n' +
					'        <div style="position:relative;text-align: left">\n' +
					'            <textarea id="text__area1"> &lt;img src="https://xdsoft.net/jodit/build/images/artio.jpg" style="border:1px solid red;width:100px;height:100px;"/&gt;</textarea>\n' +
					'        </div>\n' +
					'    </div>';

				document.body.appendChild(div);

				const editor = new Jodit(
					document.getElementById('text__area1')
				);
				simulateEvent(
					['mousedown', 'mouseup', 'click'],
					0,
					editor.editor.querySelector('img')
				);
				//
				const popup = getOpenedPopup(editor);
				//
				expect(popup).is.not.null;
				//
				const resizer = editor.ownerDocument.querySelector(
					'.jodit-resizer[data-editor_id=text__area1]'
				);
				expect(resizer).is.not.null;
				//
				const positionResizer = offset(resizer);
				//
				simulateEvent(
					'mousedown',
					0,
					resizer.getElementsByTagName('i')[0]
				);
				simulateEvent('mousemove', 0, editor.ownerWindow, function(
					data
				) {
					data.clientX = positionResizer.left - 10;
					data.clientY = positionResizer.top - 10;
				});
				//
				expect(popup.parentNode).is.null;

				simulateEvent('mouseup', 0, editor.ownerWindow, function(data) {
					data.clientX = positionResizer.left - 10;
					data.clientY = positionResizer.top - 10;
				});

				expect(popup.parentNode).is.null;
				//
				editor.destruct();
				div.parentNode && div.parentNode.removeChild(div);
			});
		});

		describe('Resize image', function() {
			describe('Size box', function() {
				it('Should show size for image', function(done) {
					const editor = getJodit({
						observer: {
							timeout: 0
						},
						resizer: {
							hideSizeTimeout: 400
						}
					});
					editor.value =
						'<img src="tests/artio.jpg" style="width:500px;height: 281px;"/>';

					simulateEvent(
						['mousedown', 'mouseup', 'click'],
						editor.editor.querySelector('img')
					);

					const resizer = document.querySelector(
						'.jodit-resizer[data-editor_id=' + editor.id + ']'
					);
					expect(resizer).is.not.null;

					const sizer = resizer.querySelector('span');
					expect(sizer).is.not.null;
					expect(
						editor.ownerWindow.getComputedStyle(sizer).opacity
					).equals('0');

					const positionResizer = offset(
						resizer.getElementsByTagName('i')[1]
					);

					simulateEvent(
						'mousedown',
						0,
						resizer.getElementsByTagName('i')[1]
					);

					simulateEvent('mousemove', 0, editor.ownerWindow, function(
						data
					) {
						data.clientX = positionResizer.left + 10;
						data.clientY = positionResizer.top + 10;
					});

					simulateEvent('mouseup', 0, editor.ownerWindow, function(
						data
					) {
						data.clientX = positionResizer.left + 10;
						data.clientY = positionResizer.top + 10;
					});

					expect(sizer.style.opacity).equals('1');

					setTimeout(function() {
						expect(sizer.style.opacity).equals('0');
						done();
					}, 500);
				});

				describe('For small state', function() {
					it('Should hide size', function() {
						const editor = getJodit({
							observer: {
								timeout: 0
							},
							resizer: {
								hideSizeTimeout: 400
							}
						});

						editor.value =
							'<img src="tests/artio.jpg" style="width:500px;height: 281px;"/>';

						simulateEvent(
							['mousedown', 'mouseup', 'click'],
							editor.editor.querySelector('img')
						);

						const resizer = document.querySelector(
							'.jodit-resizer[data-editor_id=' + editor.id + ']'
						);
						expect(resizer).is.not.null;

						const sizer = resizer.querySelector('span');
						expect(sizer).is.not.null;
						expect(
							editor.ownerWindow.getComputedStyle(sizer).opacity
						).equals('0');

						const positionResizer = offset(
							resizer.getElementsByTagName('i')[2]
						);

						simulateEvent(
							'mousedown',
							resizer.getElementsByTagName('i')[2]
						);

						simulateEvent('mousemove', editor.ownerWindow, function(
							data
						) {
							data.clientX = positionResizer.left - 480;
							data.clientY = positionResizer.top - 200;
						});

						simulateEvent('mouseup', editor.ownerWindow, function(
							data
						) {
							data.clientX = positionResizer.left - 480;
							data.clientY = positionResizer.top - 200;
						});

						expect(sizer.style.opacity).equals('0');
					});
				});
			});

			it('Should not allow to resize image more then width of editor', function(done) {
				box.style.width = '600px';
				const editor = getJodit();
				const image = new Image();
				image.src = 'tests/artio.jpg';

				const callback = function() {
					const ratio = image.naturalWidth / image.naturalHeight;

					editor.value =
						'<img src="tests/artio.jpg" style="width:500px;height: 281px;"/>';
					const img = editor.editor.querySelector('img');
					simulateEvent(['mousedown', 'mouseup', 'click'], 0, img);
					const resizer = document.querySelector(
						'.jodit-resizer[data-editor_id=' + editor.id + ']'
					);
					expect(resizer).is.not.null;

					const positionResizer = offset(resizer);
					//

					simulateEvent(
						'mousedown',
						0,
						resizer.getElementsByTagName('i')[1]
					);
					simulateEvent('mousemove', 0, editor.ownerWindow, function(
						data
					) {
						data.clientX = positionResizer.left + 1000;
						data.clientY = positionResizer.top + 1000;
					});

					simulateEvent('mouseup', 0, editor.ownerWindow, function(
						data
					) {
						data.clientX = positionResizer.left + 1000;
						data.clientY = positionResizer.top + 1000;
					});
					const newratio = img.offsetWidth / img.offsetHeight;

					expect(img.offsetWidth).equals(
						editor.editor.offsetWidth - 16
					);

					expect(Math.abs(newratio - ratio) < 0.003).is.true;
					done();
				};

				onLoadImage(image, callback);
			});
		});
	});
});
