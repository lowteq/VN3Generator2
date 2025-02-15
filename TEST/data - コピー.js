const appData = {
    LicenseItemType,
    licenseCategories: [
        {
            name: "A 利用主体",
            items: [
                {
                    type: LicenseItemType.NESTED_CLAUSE,
                    visibility: true,
                    icon: "icons2/A-1.png",
                    term: "A-1 個人による利用",
                    termID: "a-1",
                    nestedItems: [
                        {
                            term: "非営利利用",
                            termID: "a-1-1",
                            options: ["許可します", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        },
                        {
                            term: "非営利有償利用",
                            termID: "a-1-2",
                            options: ["許可します", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        },
                        {
                            term: "営利利用",
                            termID: "a-1-3",
                            options: ["許可します", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        }
                    ]
                },
                {
                    type: LicenseItemType.NESTED_CLAUSE,
                    visibility: true,
                    icon: "icons2/A-2.png",
                    term: "A-2 法人による利用",
                    termID: "a-2",
                    nestedItems: [
                        {
                            term: "非営利利用",
                            termID: "a-2-1",
                            options: ["許可します", "法人内での利用に限り許可します（第三者が関わる利用は権利者に個別に問い合わせて下さい）", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        },
                        {
                            term: "非営利有償利用",
                            termID: "a-2-2",
                            options: ["許可します", "法人内での利用に限り許可します（第三者が関わる利用は権利者に個別に問い合わせて下さい）", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        },
                        {
                            term: "営利利用",
                            termID: "a-2-3",
                            options: ["許可します", "法人内での利用に限り許可します（第三者が関わる利用は権利者に個別に問い合わせて下さい）", "禁止します", "権利者に個別に問い合わせてください"],
                            visibility: true
                        }
                    ]
                },
                {
                    type: LicenseItemType.TIPS,
                    content: "上記の利用の許可には、自ら利用すること（アバターやその他のオブジェクトとしての利用を含みます）、および私生活を営む上で当然に行われる表現活動（記念写真や記念動画の撮影、これらのWEB上への投稿や印刷、私的な配信、社会通念上私的な範囲とみなされる範囲でのメディア応対等を含みます）に用いることへの許可が含まれます。"
                }
            ]
        },
        {
            name: "B オンラインサービスへのアップロード・ウェブでの展示",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-1.png",
                    term: "B-1 自ら利用する目的で、ソーシャルコミュニケーションプラットフォーム（VRChat、Virtual Cast、Resonite等を含みます）へアップロードすること",
                    termID: "b-1",
                    options: ["許可します", "法人内での利用に限り許可します（第三者が関わる利用は権利者に個別に問い合わせて下さい）", "禁止します", "権利者に個別に問い合わせてください"],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-2.png",
                    term: "B-2 自ら利用する目的で、オンラインゲームプラットフォームへアップロードすること",
                    termID: "b-2",
                    options: ["許可します", "オリジナルと異なることが分かる程度に改変した場合は許可します（公式活動と誤解されないため）", "禁止します", "権利者に個別に問い合わせて下さい"],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-3.png",
                    term: "B-3 第三者にアバターとして利用させる目的で、ソーシャルコミュニケーションプラットフォームにアップロードすること",
                    termID: "b-3",
                    options: [
                        "許可します（例えばVRChatにてPublicでの公開の許可を含みます）",
                        "対象を限定しての公開を許可します（例えばVRChatにてPrivateでの公開の許可を含みます）",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します（例えばVRChatにてPublicでの公開を含みます）",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）対象を限定しての公開を許可します（例えばVRChatにてPrivateでの公開を含みます）",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-4.png",
                    term: "B-4 第三者にアバターとして利用させる目的で、オンラインゲームプラットフォームにアップロードすること",
                    termID: "b-4",
                    options: [
                        "許可します",
                        "対象を限定しての公開を許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）対象を限定しての公開を許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-5.png",
                    term: "B-5 第三者にアバターとして利用させず、NPC（ノンプレイヤーキャラクター）、配置されたオブジェクト、ワールド、その他の展示物として鑑賞させる目的で、ソーシャルコミュニケーションプラットフォームへアップロードすること",
                    termID: "b-5",
                    options: [
                        "許可します（例えばVRChatにてPublicでの公開の許可を含みます）",
                        "対象を限定しての公開を許可します（例えばVRChatにてPrivateでの公開の許可を含みます）",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します（例えばVRChatにてPublicでの公開の許可を含みます）",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）対象を限定しての公開を許可します（例えばVRChatにてPrivateでの公開の許可を含みます）",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-6.png",
                    term: "B-6 第三者にアバターとして利用させず、NPC（ノンプレイヤーキャラクター）、配置されたオブジェクト、ワールド、その他の展示物として鑑賞させる目的で、オンラインゲームプラットフォームへアップロードすること",
                    termID: "b-6",
                    options: [
                        "許可します",
                        "対象を限定しての公開を許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）対象を限定しての公開を許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/B-7.png",
                    term: "B-7 第三者に鑑賞させる目的のウェブサイト・ウェブサービスへ、容易に取り出せない状態にしてアップロードし、展示すること",
                    termID: "b-7",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します",
                        "自身のサイトに限り許可します",
                        "自身のサイトに限りオリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                }
            ]
        },
        {
            name: "C センシティブな表現",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/C-1.png",
                    term: "C-1 性的表現への利用",
                    termID: "c-1",
                    options: [
                        "許可します",
                        "許可します（ただし棲み分けはおこなうこと）",
                        "禁止します（ただし私的使用（プライベートな範囲での利用）については許容します）",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/C-2.png",
                    term: "C-2 暴力的表現への利用",
                    termID: "c-2",
                    options: [
                        "許可します",
                        "許可します（ただし棲み分けはおこなうこと）",
                        "禁止します（ただし私的使用（プライベートな範囲での利用）については許容します）",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/C-3.png",
                    term: "C-3 政治活動への利用および、宗教活動への利用",
                    termID: "c-3",
                    options: [
                        "許可します",
                        "禁止します",
                        "禁止します（ただし私的使用（プライベートな範囲での利用）については許容します）",
                        "権利者に個別に問い合わせて下さい"
                    ],
                }
            ]
        },
        {
            name: "D 加工",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/D-1.png",
                    term: "D-1 調整、外観を損なわない範囲でのポリゴン数削減、およびファイル形式を変換すること",
                    termID: "d-1",
                    options: [
                        "許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/D-2.png",
                    term: "D-2 本データまたはパーツを改変することおよび、改変したデータを本データと同じ条件で利用すること（本データまたはパーツを主たる素体として、改変を行う場合を含みます）",
                    termID: "d-2",
                    options: [
                        "許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/D-3.png",
                    term: "D-3 他のデータを改変する目的で、本データまたはパーツを用いること（本データまたはパーツを従たる素体として、他のモデルを主たる素体として改変を行う場合を含みます）",
                    termID: "d-3",
                    options: [
                        "許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                }
            ]
        },
        {
            name: "E 加工の外部委託",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/E-1.png",
                    term: "E-1 本データを貸与することなく調整または改変を委託すること（リモートデスクトップでの操作代行を含みます）",
                    termID: "e-1",
                    options: [
                        "許可します",
                        "正規ユーザー間で行うことを許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/E-2.png",
                    term: "E-2 委託のために本データを貸与して、調整または改変を委託すること",
                    termID: "e-2",
                    options: [
                        "許可します",
                        "正規ユーザー間で行うことを許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                }
            ]
        }, ,
        {
            name: "F 再配布・再販売",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/F-1.png",
                    term: "F-1 未改変状態での再配布（再販売を含む）",
                    options: [
                        "許可します",
                        "無償に限り許可します",
                        "本利用規約に従わせることを条件に許可します",
                        "無償に限り本利用規約に従わせることを条件に許可します",
                        "正規ユーザー間で行うことを許可します",
                        "無償に限り正規ユーザー間で行うことを許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/F-2.png",
                    term: "F-2 改変した本データを配布（販売を含む）すること",
                    options: [
                        "許可します",
                        "無償に限り許可します",
                        "本利用規約に従わせることを条件に許可します",
                        "無償に限り本利用規約に従わせることを条件に許可します",
                        "正規ユーザー間で行うことを許可します",
                        "無償に限り正規ユーザー間で行うことを許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
            ]
        },
        {
            name: "G 芸能・広告／宣伝への利用",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/G-1.png",
                    term: "G-1 VTuber・タレント活動等の芸能活動への利用（第三者から芸能活動における業務を受託する場合を含みます）",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式活動と誤解されないため）",
                        "法人から業務を受託しない場合に限り許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）法人から業務を受託しない場合に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.TIPS,
                    content: "営利を目的としていなくとも、インフルエンサーのような活動を実質的に行っている場合や状況、配信等に主体的に参加して演者として振る舞う場合は、芸能活動に含まれる場合があります。"
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/G-2.png",
                    term: "G-2 商品やサービスの広告・宣伝に用いること",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式活動と誤解されないため）",
                        "法人から業務を受託しない場合に限り許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）法人から業務を受託しない場合に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
            ]
        },
        {
            name: "H メディア・プロダクトへの利用",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/H-1.png",
                    term: "H-1 映像作品、配信（YouTubeを含みます）、放送への利用",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式配信と誤解されないため）",
                        "私的かつ本人のみによる利用に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/H-2.png",
                    term: "H-2 出版物および電子出版物への利用（スクリーンショットを出版・電子出版に用いる場合を含みます）",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式書籍と誤解されないため）",
                        "私的かつ本人のみによる利用に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/H-3.png",
                    term: "H-3 立体物（グッズ）への利用（3Dプリンターでの出力を含みます）",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式グッズと誤解されないため）",
                        "私的かつ本人のみによる利用に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/H-4.png",
                    term: "H-4 製品・サービス（ゲームを含みます）開発等のために、ソフトウェアやウェブサービスへ組み込み、容易に取り出せない状態にして配布または公開すること",
                    options: [
                        "許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は許可します（公式ソフトと誤解されないため）",
                        "私的かつ本人のみによる利用に限り許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ],
                },
            ]
        },
        {
            name: "I 衣装／ギミック作成・二次創作への利用",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/I-1.png",
                    term: "I-1 本データのための衣装・ギミック等の作成",
                    options: [
                        "私的かつ本人のみによる利用に限り許可します",
                        "非営利目的での配布等（頒布、送信を含む）を許可します",
                        "非営利および非営利有償目的での配布等（頒布、送信を含む）を許可します",
                        "営利・非営利の目的問わず配布等（頒布、送信を含む）を許可します",
                        "作成を禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ]
                },
                {
                    type: LicenseItemType.NESTED_CLAUSE,
                    visibility: true,
                    icon: "icons2/I-2.png",
                    term: "I-2 本データのための衣装・ギミック等を作成するにあたっての本データの転用",
                    nestedItems: [
                        {
                            term: "ボーン・ウェイト・メッシュ",
                            options: [
                                "許可します",
                                "禁止します",
                                "私的かつ本人のみによる利用に限り許可します",
                                "権利者に個別に問い合わせて下さい"
                            ],
                            visibility: true
                        },
                        {
                            term: "テクスチャ",
                            options: [
                                "許可します",
                                "禁止します",
                                "私的かつ本人のみによる利用に限り許可します",
                                "権利者に個別に問い合わせて下さい"
                            ],
                            visibility: true
                        }
                    ]
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/I-3.png",
                    term: "I-3 本データをそのまま利用しないで、本データをモチーフにした二次的著作物（いわゆる二次創作）を作成すること",
                    options: [
                        "非営利目的での配布等（頒布、送信を含む）を許可します",
                        "非営利および非営利有償目的での配布等（頒布、送信を含む）を許可します",
                        "営利・非営利の目的問わず配布等（頒布、送信を含む）を許可します",
                        "3Dデータ・立体物を除き非営利目的での配布等（頒布、送信を含む）を許可します",
                        "3Dデータ・立体物を除き非営利および非営利有償目的での配布等（頒布、送信を含む）を許可します",
                        "3Dデータ・立体物を除き営利・非営利の目的問わず配布等（頒布、送信を含む）を許可します",
                        "配布等（頒布、送信を含む）を禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ]
                }
            ]
        },
        {
            name: "J その他",
            items: [
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/J-1.png",
                    term: "J-1 利用時のクレジット表記",
                    options: [
                        "不要です",
                        "不要ですがあると嬉しいです",
                        "営利目的での利用の場合は必要です",
                        "営利目的での利用の場合は必要ですが、それ以外の場合でもあると嬉しいです",
                        "必要です",
                        "権利者に個別に問い合わせて下さい"
                    ]
                },
                {
                    type: LicenseItemType.TIPS,
                    content: "クレジット表記が必要と定められている場合について、ソーシャルコミュニケーションプラットフォームまたはオンラインゲームプラットフォームでの利用に関しては、表記をすることが困難または不適当な場合は、クレジット表記を省略できるものとします。"
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/J-2.png",
                    term: "J-2 本データを法人に私物として持ち込み、自らの個人のアバターとして利用すること",
                    options: [
                        "許可します",
                        "法人を代表せず、また法人の広報・広告に利用しない場合に限り許可します",
                        "オリジナルと異なることが分かる程度に改変した場合は（公式活動と誤解されないため）許可します",
                        "法人内での利用に限り許可します（第三者が関わる利用は権利者に個別に問い合わせて下さい）",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ]
                },
                {
                    type: LicenseItemType.CLAUSE,
                    visibility: true,
                    icon: "icons2/J-3.png",
                    term: "J-3 権利義務の譲渡等",
                    options: [
                        "許可します",
                        "禁止します",
                        "権利者に個別に問い合わせて下さい"
                    ]
                }
            ]
        },
        {
            name: "K 特記事項",
            items: [
                {
                    type: LicenseItemType.FREE_TEXT,
                    visibility: true,
                    icon: "icons2/K-1.png",
                    term: "K-1 特記事項",
                    defaultText: "なし"
                }
            ]
        }








    ]
};
new Vue({
    el: "#app",
    data: appData,
    methods: {

        // Function to find and log unselected terms
        findUnselectedTerms() {
            const unselectedTerms = [];
            if (!this.licenseCategories) return unselectedTerms; // Check if licenseCategories exist
            this.licenseCategories.forEach(category => {
                if (category.items) {
                    category.items.forEach(item => {
                        if (item.type === LicenseItemType.CLAUSE && item.visibility && !item.selectedOption) {
                            unselectedTerms.push({ termID: item.termID, term: item.term });
                        }
                        if (item.type === LicenseItemType.NESTED_CLAUSE) {
                            if (item.nestedItems) {
                                item.nestedItems.forEach(nestedItem => {
                                    if (nestedItem.visibility && !nestedItem.selectedOption) {
                                        unselectedTerms.push({
                                            parentTermID: item.termID,
                                            parentTerm: item.term,
                                            termID: nestedItem.termID,
                                            term: nestedItem.term
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            });
            console.log(unselectedTerms);
            return unselectedTerms;
        },

        // Function to get selected options
        getSelectedOptions() {
            const selectedOptions = [];
            if (!this.licenseCategories) return selectedOptions; // Check if licenseCategories exist
            this.licenseCategories.forEach(category => {
                if (category.items) {
                    category.items.forEach(item => {
                        if (item.type === LicenseItemType.CLAUSE && item.selectedOption) {
                            selectedOptions.push({ termID: item.termID, selectedOption: item.selectedOption });
                        }
                        if (item.type === LicenseItemType.NESTED_CLAUSE) {
                            if (item.nestedItems) {
                                item.nestedItems.forEach(nestedItem => {
                                    if (nestedItem.selectedOption) {
                                        selectedOptions.push({ termID: nestedItem.termID, selectedOption: nestedItem.selectedOption });
                                    }
                                });
                            }
                        }
                    });
                }
            });
            console.log(selectedOptions);
            return selectedOptions;
        },

        // Function to check if all terms or nested terms are selected
        checkAllOptionsSelected() {
            let allSelected = true;
            if (!this.licenseCategories) return false; // Check if licenseCategories exist
            this.licenseCategories.forEach(category => {
                if (category.items) {
                    category.items.forEach(item => {
                        if (item.type === LicenseItemType.CLAUSE && item.visibility) {
                            if (!item.selectedOption) {
                                allSelected = false;
                            }
                        }
                        if (item.type === LicenseItemType.NESTED_CLAUSE) {
                            if (item.nestedItems) {
                                item.nestedItems.forEach(nestedItem => {
                                    if (nestedItem.visibility && !nestedItem.selectedOption) {
                                        allSelected = false;
                                    }
                                });
                            }
                        }
                    });
                }
            });
            console.log(`All terms selected: ${allSelected}`);
            return allSelected;
        }
    }
});
