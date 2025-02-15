// 列挙体としてのType定義
const LicenseItemType = {
    CLAUSE: "clause",
    NESTED_CLAUSE: "nestedClause",
    TIPS: "tips",
    FREE_TEXT: "freeText"
};

// LicenseGeneratorItem クラス定義
class LicenseGeneratorItem {
    constructor(type, data) {
        if (!Object.values(LicenseItemType).includes(type)) {
            throw new Error(`Invalid type: ${type}`);
        }

        this.type = type;

        switch (type) {
            case LicenseItemType.CLAUSE: // 条項
                this.visibility = data.visibility || false;
                this.icon = data.icon || "";
                this.term = data.term || "";
                this.termID = data.termID || "";
                this.options = data.options || [];
                break;

            case LicenseItemType.NESTED_CLAUSE: // ネスト条項
                this.visibility = data.visibility || false;
                this.icon = data.icon || "";
                this.term = data.term || "";
                this.termID = data.termID || "";
                this.nestedItems = data.nestedItems || []; // 複数のネスト項目をサポート
                break;

            case LicenseItemType.TIPS: // Tips
                this.content = data.content || "";
                break;

            case LicenseItemType.FREE_TEXT: // 自由記述タイプ
                this.visibility = data.visibility || false;
                this.icon = data.icon || "";
                this.term = data.term || "";
                this.termID = data.termID || "";
                this.defaultText = data.defaultText || ""; // defaultTextを追加
                break;

            default:
                throw new Error(`Unhandled type: ${type}`);
        }
    }

    // データを表示する
    display() {
        switch (this.type) {
            case LicenseItemType.CLAUSE:
                return {
                    type: LicenseItemType.CLAUSE,
                    visibility: this.visibility,
                    icon: this.icon,
                    term: this.term,
                    options: this.options
                };
            case LicenseItemType.NESTED_CLAUSE:
                return {
                    type: LicenseItemType.NESTED_CLAUSE,
                    visibility: this.visibility,
                    icon: this.icon,
                    term: this.term,
                    nestedItems: this.nestedItems
                };
            case LicenseItemType.TIPS:
                return { type: LicenseItemType.TIPS, content: this.content };
            case LicenseItemType.FREE_TEXT:
                return {
                    type: LicenseItemType.FREE_TEXT,
                    visibility: this.visibility,
                    icon: this.icon,
                    term: this.term,
                    defaultText: this.defaultText
                };
            default:
                throw new Error("Unknown type");
        }
    }
}

// LicenseCategory クラス定義
class LicenseCategory {
    constructor(name, items) {
        if (!name || typeof name !== "string") {
            throw new Error("Category name must be a non-empty string");
        }
        if (!Array.isArray(items) || !items.every(item => item instanceof LicenseGeneratorItem)) {
            throw new Error("Items must be an array of LicenseGeneratorItem instances");
        }

        this.name = name;
        this.items = items;
    }

    // カテゴリーを表示する
    display() {
        return {
            name: this.name,
            items: this.items.map(item => item.display())
        };
    }
}

// 使用例
try {
    // 条項アイテム
    const clause = new LicenseGeneratorItem(LicenseItemType.CLAUSE, {
        visibility: true,
        icon: "example-icon",
        term: "Example Clause",
        options: ["Option 1", "Option 2"]
    });

    // ネスト条項アイテム
    const nestedClause = new LicenseGeneratorItem(LicenseItemType.NESTED_CLAUSE, {
        visibility: false,
        icon: "example-icon-2",
        term: "Nested Clause Example",
        nestedItems: [
            {
                term: "Nested Term 1",
                options: ["Nested Option 1", "Nested Option 2"]
            },
            {
                term: "Nested Term 2",
                options: ["Nested Option 3", "Nested Option 4"]
            }
        ]
    });

    // Tipsアイテム
    const tips = new LicenseGeneratorItem(LicenseItemType.TIPS, {
        content: "This is a helpful tip"
    });

    // 自由記述アイテム
    const freeText = new LicenseGeneratorItem(LicenseItemType.FREE_TEXT, {
        visibility: true,
        icon: "example-icon",
        term: "自由記述の説明",
        defaultText: "ここに自由記述を入力してください"
    });

    // カテゴリーを作成
    const licenseCategory = new LicenseCategory("Sample Category", [
        clause,
        nestedClause,
        tips,
        freeText
    ]);

    // カテゴリーを表示
    console.log(licenseCategory.display());
} catch (error) {
    console.error(error.message);
}
