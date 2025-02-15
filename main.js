var app = new Vue({
    el: "#app",
    data: {
        currentLanguage: 'ja',
        licenseCategories: licenseCategories,
        standardTerms: standardTerms,
        licenseText: licenseText,
        placeholders: {
            agreement: false,
            email: '',
            termsTitle: '',
            permittedData: '',
            rightsName: '',
            rightsEmail: '',
            rightsX: '',
            rightsWebsite: '',
            credit: '',
            hashtags: '',
            permissionPeriodKey: '',
            permissionPeriodCustom: '',
            version: '',
            vn3version: '2.00',
            vn3generatorversion: '2.00'
        },
        permissionPeriodOptions: {
            A: "許諾期間は正規ユーザーとなった日から開始され、期間の定めはありません。権利者が、権利者の管理するウェブサイトやブログ等に本利用規約に関する条件の変更（追加、変更または削除を含みますがこれに限られません）を掲示し合理的な方法で周知した場合において、その効力発生日以降に正規ユーザーが本データを利用した場合は、当該変更に同意したものとみなします。従って、正規ユーザーは、合理的な範囲内で定期的に権利者の発信する情報を確認しなければなりません。",
            B: "許諾期間は正規ユーザーとなった日から開始され、権利者によって利用の終了が指示されるまでとします。また、権利者から別途指示がある場合、当該指示は他の定めに優先するものとし、正規ユーザーはこれに従うか、または利用を終了しなければなりません。指示には本利用規約に関する条件の、追加、変更もしくは削除、または利用の中止が含まれます。権利者が、権利者の管理するウェブサイトやブログ等に指示を掲示し、合理的な方法で周知した場合も同様とします。従って、正規ユーザーは、合理的な範囲内で定期的に権利者の発信する情報を確認しなければなりません。",
            C: "許諾期間は正規ユーザーとなった日から開始され、期間の定めはありません。本許諾または本利用規約は本データのバージョンアップには適用されません。バージョンアップ後のデータには、新たな利用規約が適用されます。"
        },
        permissionPeriodSimpleOptions: {
            A: "許諾期間の定めはなし。条件の変更は権利者の指示（ウェブサイトやブログ等で周知した場合も含まれ得る）の後、効力発生日以降の利用による。そのため、合理的な範囲内で定期的に権利者の発信する情報を確認してください。",
            B: "許諾期間は正規ユーザーとなった日から権利者によって利用の終了が指示されるまで。条件の変更は権利者の指示（ウェブサイトやブログ等で周知した場合も含まれ得る）による。そのため、合理的な範囲内で定期的に権利者の発信する情報を確認してください。",
            C: "許諾期間の定めはなし。条件の変更は新たな利用規約に正式に同意した場合に限られる。"
        },
        translations: translations // translations.js から取得
    },
    computed: {
        getItemClass() {
            const visibleItems = this.category.items.filter(i => i.type !== LicenseItemType.TIPS).length;
            return {
                'easy-term-item': true,
                'easy-2column-item': visibleItems === 2,
                'easy-1column-item': visibleItems === 1
            };
        },
        permissionPeriodText() {
            return this.permissionPeriodOptions[this.placeholders.permissionPeriodKey] || '';
        },
        permissionPeriodSimpleText() {
            return this.permissionPeriodSimpleOptions[this.placeholders.permissionPeriodKey] || '';
        }
    },
    methods: {

        translate(key) {
            if (!key) {
                return "";
            }


            console.log("key:", key);
            // 日本語キーが存在しない場合
            if (!translations[key]) {
                console.error(`Translation key not found: "${key}"`);
                return this.replacePlaceholders(key); // プレースホルダーを置き換えてキーを返す
            }

            // 翻訳を取得（現在言語）
            const translation = translations[key][this.currentLanguage];

            // 翻訳値が存在しない場合
            if (!translation) {
                console.warn(`Translation value not found for key "${key}" in language "${this.currentLanguage}"`);
                return "Translation not found";
            }

            // 翻訳後にプレースホルダーを置き換えて返す
            return this.replacePlaceholders(translation);
        },

        replacePlaceholders(text) {
            // [[ ]] プレースホルダーを置き換え
            return text.replace(/\[\[\s*(\w+)\s*\]\]/g, (match, placeholder) => {
                return this.placeholders[placeholder] !== undefined
                    ? this.placeholders[placeholder]
                    : match; // 値が存在しない場合はそのまま返す
            });
        },


        // Function to find and log unselected terms
        findUnselectedTerms() {
            const unselectedTerms = [];
            this.licenseCategories.forEach(category => {
                category.items.forEach(item => {
                    if (item.type === LicenseItemType.CLAUSE && item.visibility && !item.selectedOption) {
                        unselectedTerms.push({ termID: item.termID, termIDText: item.termID, term: item.term });
                    }
                    if (item.type === LicenseItemType.NESTED_CLAUSE) {
                        item.nestedItems.forEach(nestedItem => {
                            if (item.visibility && nestedItem.visibility && !nestedItem.selectedOption) {
                                unselectedTerms.push({
                                    termID: nestedItem.termID,
                                    termIDText: item.termID + " " + nestedItem.term,
                                    term: item.term + " " + nestedItem.term
                                });
                            }
                        });
                    }
                });
            });
            console.log(unselectedTerms);
            return unselectedTerms;
        },

        // Function to get selected options
        getSelectedOptions() {
            const selectedOptions = [];
            this.licenseCategories.forEach(category => {
                category.items.forEach(item => {
                    if (item.type === LicenseItemType.CLAUSE && item.visibility && item.selectedOption) {
                        selectedOptions.push({ termID: item.termID, selectedOption: item.selectedOption });
                    }
                    if (item.type === LicenseItemType.NESTED_CLAUSE) {
                        item.nestedItems.forEach(nestedItem => {
                            if (item.visibility && nestedItem.visibility && nestedItem.selectedOption) {
                                selectedOptions.push({ termID: nestedItem.termID, selectedOption: nestedItem.selectedOption });
                            }
                        });
                    }
                });
            });
            console.log(selectedOptions);
            return selectedOptions;
        },

        // Function to check if all terms or nested terms are selected
        checkAllOptionsSelected() {
            let allSelected = this.findUnselectedTerms().length == 0;
            console.log(`All terms selected: ${allSelected}`);
            return allSelected;
        },
        /**
        * 必須項目の入力チェックを行います
        * @returns {Boolean} エラーがなければ true、エラーがあれば false を返します
        */
        validateForm() {
            const errors = [];

            // 利用確認（チェックボックス）
            if (!this.placeholders.agreement) {
                errors.push("【利用確認】記載事項を確認し、同意してください。");
            }
            // 利用規約のバージョン
            if (!this.placeholders.version.trim()) {
                errors.push("【利用規約のバージョン】入力してください。");
            }
            // 利用規約タイトル
            if (!this.placeholders.termsTitle.trim()) {
                errors.push("【利用規約タイトル】入力してください。");
            }
            // 許諾対象データ
            if (!this.placeholders.permittedData.trim()) {
                errors.push("【許諾対象データ】入力してください。");
            }
            // 権利者
            if (!this.placeholders.rightsName.trim()) {
                errors.push("【権利者】入力してください。");
            }
            // 許諾期間が「自由記述(D)」の場合、入力チェック
            if (this.placeholders.permissionPeriodKey === 'D' && !this.placeholders.permissionPeriodCustom.trim()) {
                errors.push("【許諾期間】自由記述の場合、内容を入力してください。");
            }

            // エラーがあればエラーメッセージを表示し、false を返す
            if (errors.length > 0) {
                console.log(errors.join("\n"));
                return [false, errors];
            }
            return [true, ""];
        },
        handleVisibilityChange(item, nestedItem = null) {
            if (item.type === LicenseItemType.CLAUSE) {
                // visibility が OFF の場合、選択をリセット
                item.selectedOption = null;
                console.log('変更されたVisibility', item.term, item.visibility);
            }
            if (item.type === LicenseItemType.NESTED_CLAUSE) {
                if (nestedItem) {
                    nestedItem.selectedOption = null;
                    console.log("変更されたVisibility", item.term, nestedItem.term, nestedItem.visibility);
                } else {
                    item.nestedItems.forEach(nestedItem => {
                        nestedItem.selectedOption = null;
                    });
                    console.log("変更されたVisibility", item.term, item.visibility);
                }
            }
            this.handleLicenseChange();
        },
        handleOptionChange(option) {
            console.log('選択されたオプション:', option);
            this.handleLicenseChange();
        },
        handleLicenseChange() {
            console.log("LicenseChange");
        },
        getSelectedPDFTitle() {
            const select = this.$refs.languageSelect;
            if (select && select.options) {
                const selectedIndex = select.selectedIndex;
                const selectedOption = select.options[selectedIndex];
                if (selectedOption) {
                    return selectedOption.text;
                }
            }
            return '';
        },
        downloadPDF() {
            // .sectionクラスの要素を取得
            const sections = document.querySelectorAll('.section');

            // 印刷用のHTMLを準備
            let printContent = '';
            sections.forEach(section => {
                printContent += section.outerHTML; // .section要素をHTML文字列として取得
            });

            // 一時的な印刷用ウィンドウを作成
            const printWindow = window.open('', '_blank');
            printWindow.document.title = this.getSelectedPDFTitle();
            printWindow.document.write('<!DOCTYPE html>');
            printWindow.document.write(`
                <html>
                  <head>
                    <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="styles.css">
                    <title>${this.getSelectedPDFTitle()}</title>
                  </head>
                  <body>
              `);
            printWindow.document.write('<style>@media print { .section { page-break-after: always; } }</style>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(printContent);
            printWindow.document.write('</bo' + 'dy></ht' + 'ml>');//LiveServerでこのタグが置換されるのを防ぐ　本番環境では発生しない
            printWindow.document.close();
            // ページの完全な読み込みを待つ
            printWindow.onload = () => {
                printWindow.focus();

                // 印刷ダイアログを開く
                printWindow.print();

                // 印刷後にウィンドウを閉じる
                //printWindow.close();
            };
        }
    }
});