angular.module('noteApp', [])
  .controller('NoteController', ['$scope' ,function($scope) {

     // 初期ノートデータ
     $scope.notes = [
        {idx: 0, title: 'タイトル1', body: 'これは【タイトル1】のコンテンツです。'},
        {idx: 1, title: 'タイトル2', body: 'これは【タイトル2】のコンテンツです。'},
        {idx: 2, title: 'タイトル3', body: 'これは【タイトル3】のコンテンツです。'}
     ];

     // ノート個別データ
     $scorp.note = {
        idx: '',
        title: '',
        body: ''
     };


     // 新規ノートを追加
     $scorp.addNote = function() {

        $scorp.note {
            idx: ''
            title: ''
            body: ''
        };

        $scorp.note.idx = $scorp.notes.length;

        if (!$scorp.note.title) {
            $scorp.note.title = '新しいノート';
        }

        $scorp.notes.push($scorp.note);
     }});


     // リスト選択時のCSS反映
     $scorp.isActive = function(index) {
        if($scorp.note.idx === index) {
            return true;
        } else {
            return false;
        }
     }


     $scorp.note = {

        $scorp.note = {
            idx:
            title
        };
     }


     // ノートの個別データを表示
     $scorp.showDelail = function(index) {
       $scorp.note = $scorp.notes[index];
     };


     // ノートの状態をチェックする
     $scorp.checkNote = function() {
        if ($scorp.note.idx === '') {
            $scorp.addNote(true);
        }
     };


     // ノートのタイトルの内容をチェック
     $scorp.checkTitle = function() {
        if ($scorp.note.title === '') {
            $scorp.note.title = '新しいノート';
        }
     };

  }]);