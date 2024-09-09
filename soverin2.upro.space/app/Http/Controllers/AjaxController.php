<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Statamic\Facades\Entry;

class AjaxController extends Controller
{
    public function handleAjax(Request $request)
    {
        $data = $request->input('tag');
        $search = $request->input('search');
        $html = '';

        $query = Entry::query()->where('collection', 'blog');

        if (!empty($search)) {

            $query->where('content', 'like', "%{$search}%")
                  ->orWhere('title', 'like', "%{$search}%");

        }

        if ($data !== 'all') {
            $query->whereTaxonomyIn($data);
        }

        $entries = $query->limit(9)->get();


        foreach ($entries as $entry) {
            $html .= view('partials._post', $entry->toAugmentedArray())->render();
        }
        return $html;

        //return view('blog.index', ['entries' => $entries]);


        return Response::json([
            'status' => 'success',
            'message' => 'Данные получены успешно',
            'received_data' => $data
        ]);
    }
}

