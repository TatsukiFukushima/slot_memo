// スロット機種データ
const slotData = [
    {
      name: "北斗の拳",
      features: ["優遇 450", "冷遇 600"]
    },
    {
      name: "甲鉄城のカバネリ",
      features: ["0,1スルー: 520", "2スルー: 430", "短縮: 150"]
    },
    {
      name: "革命機ヴァルヴレイヴ",
      features: [
        "ボナ間850G",
        "0,1スルー: 500",
        "2スルー: 350",
        "3スルー: 200",
        "4~: 150",
        "ミミズ: 0スルー280",
        "1スルー: 140",
        "2スルー: 40",
        "液晶170〜200前兆終わり",
        "白マス前兆"
      ]
    },
    {
      name: "戦国乙女4",
      features: ["ゾーン300、天井500~(液晶)"]
    },
    {
      name: "ラブ嬢3",
      features: ["450~"]
    },
    {
      name: "モンキーターンⅤ",
      features: [
        "天井400G~, 短縮150~(リセ、青島後。液晶とデータカウンターのG数が12Gほどズレる)",
        "不問5周期",
        "1,4周期80p~, 2周以降500p~",
        "黒背景、ヘルメットロゴ+a"
      ]
    },
    {
      name: "とある魔術の禁書目録",
      features: [
        "ゾーン 150~(200), 390~(400)",
        "AT1000枚以上後280~",
        "魔神(200までに当たり続けている台)",
        "赤背景キャラ、キャラ3獲得"
      ]
    },
    {
      name: "転生したらスライムでした",
      features: [
        "天井320G(液晶480PT)",
        "ゾーン80pt",
        "画面下が常時黒発光で全ツ、モンスターランク赤、白、虹でボーダー下げ",
        "転生ループ、黒発光以外は即やめ"
      ]
    },
    {
      name: "パチスロ吉宗",
      features: ["天井640, 短縮240(AT単発)", "3スルー", "ゾーン80~250", "2人同行"]
    },
    {
      name: "ガールズ&パンツァー 最終章",
      features: [
        "AT間天井600,リセ後200",
        "0スルー180G,1スルー90G, 2スルー130G~",
        "前回AT単発後の1スルーは不問",
        "継続高校敗北後4スルー0G",
        "区間差枚2000近く"
      ]
    },
    {
      name: "SAO",
      features: [
        "cz間300",
        "ボナ間",
        "0ス300, 1ス累計600,2ス490,3ス450, 4ス不問",
        "短縮時　0ス320, 1ス不問(AT単発後)"
      ]
    },
    {
      name: "からくりサーカス",
      features: [
        "天井800G",
        "3スルー不問",
        "液晶1100Gハマり後",
        "運命後の天国フォロー(5G以内のczが2つある履歴。60G付近で前兆が無ければやめ)",
        "鳴海ステ200まで"
      ]
    },
    {
      name: "ハーデス",
      features: ["ゾーン185~210", "天井375~"]
    },
    {
      name: "主役は銭形",
      features: ["天井約400G(600ガッツ)", "メニュー赤帯で不問、キャラ表示で-100"]
    },
    {
      name: "キン肉マン",
      features: ["天井450万パワー", "メニュー画面悪魔大将軍"]
    },
    {
      name: "南国育ち",
      features: ["0ス650~3ス400", "(スルーは1ゲーム連していないボーナスの数)"]
    },
    {
      name: "コードギアス",
      features: [
        "ボーナス済 液晶150G~(400G以内にボナ引いたらやめ)？ 500G~ ただし前回当選200・400台は厳しい",
        "ボーナス無 液晶150G、液晶400G~",
        "やめ時",
        "ボナ後: 前兆ステージ消化後",
        "AT後: 紫ランプ消灯",
        "上部赤点灯→cz 後やめ"
      ]
    },
    {
      name: "キングパルサー",
      features: ["天井480G~", "やめ時 128Gで泡占い確認"]
    },
    {
      name: "沖ドキGOLD",
      features: [
        "0スルー650G~3スルー400G、4スルー100G",
        "合計1スルー1300G~4スルー1000G",
        "やめ時 ボナ後32G",
        "(スルーは32G以上のBB,RB回数)"
      ]
    },
    {
      name: "鏡",
      features: [
        "天井 620G",
        "4〜5スルー",
        "ゾーン200手前〜269G",
        "短縮判別: 液晶のゲーム数カウンターのHEYエフェクトが緑・赤 →不問",
        "やめ時: 即やめ、短縮なら続行"
      ]
    },
    {
      name: "バイオヴィレッジ",
      features: ["天井380G", "ゾーン80G~(100G)", "やめ時: ATorクライマックスバトル後即やめ"]
    },
    {
      name: "グランベルム",
      features: ["180G~(ゾーン200G), 320G~"]
    },
    {
      name: "忍魂",
      features: [
        "580G~",
        "3周期40pt以下、4周期不問",
        "通常15pt以下、緑35pt以下、赤不問",
        "高確札黄色"
      ]
    },
    {
      name: "エウレカ4",
      features: ["リセ150G~, 通常500G", "ゾーン404G", "即やめ"]
    },
    {
      name: "チバリヨ2",
      features: ["640G~", "350G仮天井前", "32Gやめ"]
    },
    {
      name: "マクロス",
      features: ["液晶900G~or実600G~", "5スルー", "15Gで天国確認してやめ"]
    },
    {
      name: "防振り",
      features: ["リセ 230G~", "通常 670G~", "ゾーン 260G~", "50Gやめ？"]
    },
    {
      name: "ToLOVEる トラブル",
      features: ["リセ 80G~", "通常 650G", "天井駆け抜け後"]
    },
    {
      name: "シンフォギア",
      features: [
        "以下は不問の条件",
        "cz間300G(朝一、前回100枚以下なら50Gほど調整)",
        "天井間800G",
        "cz 3スルー",
        "前回100枚以下30~97G",
        "絶唱後(データカウンタと液晶Gズレ) ~250G",
        "AT後は引き戻し消化でやめ？即？"
      ]
    },
    {
      name: "ゴッドイーター",
      features: [
        "ST駆け抜け、リセット後 250G~",
        "上位AT後 350G~",
        "通常 580G~",
        "ゾーン40~100, 240~300",
        "逆鱗ハンニバル敗北後 ~100G",
        "(データカウンタ000000→1000枚くらい出ている台)",
        "切断狙い 差枚1600~(2200)",
        "即やめ"
      ]
    },
    {
      name: "北斗無双",
      features: [
        "700宿命~",
        "リセ 150宿命~",
        "前回600G以上ハマり単発 不問",
        "上位後は打たない(ラッシュG77G以上、350枚以上獲得)",
        "即やめor256宿命"
      ]
    },
    {
      name: "バンドリ",
      features: ["2周期ハロハピ"]
    },
    {
      name: "ワンパンマン",
      features: [
        "0~4ス 200G (ただし朝一は0ス優遇)",
        "朝一5ス、通常4ス",
        "100Gゾーン狙い",
        "前回193~256G当選(チャンスモード？)後: 朝一不問、通常50G",
        "それ以外: 80G"
      ]
    },
    {
      name: "ゲゲゲの鬼太郎",
      features: [
        "朝一280G",
        "通常650G",
        "55G～ゾーン抜けまで",
        "AT後ボイスを聞いてやめ ※覚醒経由のAT後は40Gまでフォロー"
      ]
    },
    {
      name: "黄門ちゃま",
      features: [
        "リセ",
        "310G以下: データGと提灯がズレているなら不問、同じなら200G~ 初当たりまで",
        "ゾーン200G~310G(提灯で微調整)",
        "通常600G~, 前回天井で不問",
        "提灯200~点灯、前回天井で不問〜点灯",
        "前回100枚以下:32G以降の演出無し時まで。液晶左上のダブルちゃんを初当たりまで"
      ]
    },
    {
      name: "花の慶次",
      features: ["REG後•REG経由AT後 ~100G、220G~"]
    },
    {
      name: "東京喰種",
      features: [
        "有馬ジャッジ失敗後(液晶6Gズレ) czまで",
        "AT間700(駆け抜け後600) 確認十時ボタン",
        "即前兆確認でやめ(16G)、駆け抜けのみでいい？"
      ]
    },
    {
      name: "スーパーブラックジャック SBJ",
      features: ["450G~, 単発後150？(BBまたはAT1回)"]
    },
    {
      name: "モンスターハンターライズ モンハン",
      features: [
        "650G, 4スルー+カムラ300pt, カムラ上が天",
        "500pt手前？",
        "朝一250G以上当選後を一周期まで",
        "マガイマガドモード狙い（単発4連以降。前回が60G以上かつ220枚以上なら紫7の可能性高い）",
        "差枚1600枚以上(ボーナス300枚以上は切断している)"
      ]
    },
    {
      name: "ダンベル何キロ持てる",
      features: ["CZ間370G, AT間650G", "強AT(100G以上) 後1スルー、cz3回目以降当選。スクショ参照"]
    },
    {
      name: "かぐや様は告らせたい",
      features: [
        "REG後450G~, 4スルー, チャンス目19, 5の倍数-1?, REG2連後0~130?, czやrb3回程度失敗",
        "REG3連以下、BIG2連以下後は即やめ",
        "新丸子207は全部reg",
        "BB34Gで引き戻しは切断"
      ]
    },
    {
      name: "リゼロ2",
      features: [
        "420pt, 100の位が奇数の後半？, 単発後170pt",
        "(前回800G未満の方がいい)",
        "前回800G以上、600枚以下なら100G",
        "33Gやめ"
      ]
    },
    {
      name: "スマスロ吉宗",
      features: ["BB1g連後465Gまで？", "193Gやめ, REG後は前兆消化やめ？"]
    },
    {
      name: "マギアレコード",
      features: [
        "270G~, 4ス50G~, ゾーン180pt,380pt",
        "前回がAT駆け抜け(0Gから100%over、ボーナスのみとはまた別)・天井当選・REGだと期待値+",
        "1Gやめ"
      ]
    },
    {
      name: "バイオハザード5",
      features: ["天井後0G, 上位cz失敗後？"]
    },
    {
      name: "ありふれた職業で世界最強",
      features: ["ゾーン40G, 270G?"]
    },
    {
      name: "ガンダムSEED",
      features: ["駆け抜け後不問、リセ後200", "(単発はBBが一回のみの履歴)", "天国50~100", "ステチェン背景を確認して即"]
    },
    {
      name: "ようこそ実力主義の世界へ よう実",
      features: [
        "cz間340G, AT間600G(リセ後150G)",
        "駆け抜け後一周期40G~",
        "天井後不問で102%",
        "駆け抜け以外は高確を消化してやめ"
      ]
    },
    {
      name: "アイドルマスター アイマス",
      features: ["ボナ単発後200G~"]
    },
    {
      name: "ルパン",
      features: ["リセ300G不問", "ゾーン180G~, 370G~", "差枚1500~"]
    },
    {
      name: "ゴジラ対エヴァンゲリオン ゴジエヴァ",
      features: [
        "リセ 330G, 3スルー",
        "ゾーン 100G, 250G, 400G 手前",
        "メニュー画面背景赤",
        "上位AT後かつ差枚1300枚以上 ~70G",
        "スルー回数はAT間の1G以外の数"
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const slotList = document.getElementById('slot-list');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');

    // 初期表示
    renderSlotList(slotData);

    // 検索機能
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredData = slotData.filter(slot => 
            slot.name.toLowerCase().includes(searchTerm)
        );
        
        renderSlotList(filteredData);
        
        // 検索結果がない場合のメッセージ表示
        if (filteredData.length === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });

    // スロットリストを描画する関数
    function renderSlotList(data) {
        slotList.innerHTML = '';
        
        data.forEach(slot => {
            // スロット項目の作成
            const slotItem = document.createElement('li');
            slotItem.className = 'slot-item';
            
            // 機種名ヘッダー部分
            const slotName = document.createElement('div');
            slotName.className = 'slot-name';
            slotName.textContent = slot.name;
            
            // 詳細部分（アコーディオン）
            const slotDetails = document.createElement('div');
            slotDetails.className = 'slot-details';
            
            // 特徴リスト
            const featureList = document.createElement('ul');
            featureList.className = 'feature-list';
            
            slot.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.className = 'feature-item';
                featureItem.textContent = feature;
                featureList.appendChild(featureItem);
            });
            
            slotDetails.appendChild(featureList);
            slotItem.appendChild(slotName);
            slotItem.appendChild(slotDetails);
            slotList.appendChild(slotItem);
            
            // アコーディオン機能
            slotName.addEventListener('click', function() {
                this.classList.toggle('active');
                slotDetails.classList.toggle('active');
            });
        });
    }
});