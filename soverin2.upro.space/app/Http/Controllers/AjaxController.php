<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Statamic\Facades\Entry;

class AjaxController extends Controller
{
    public function handleAjax(Request $request)
    {
        $data = $request->input('data');

        $entries = Entry::query()
            ->where('collection', 'blog')
            ->limit(9)
            ->get();

        return view('blog.index', ['entries' => $entries]);


//        return Response::json([
//            'status' => 'success',
//            'message' => 'Данные получены успешно',
//            'received_data' => $data
//        ]);
    }
}

