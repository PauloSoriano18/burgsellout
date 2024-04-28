<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Resumenfact;

use Illuminate\Http\Request;

class ResumenfactController extends Controller
{
    //
    public function index($canal)
    {
        $data = Resumenfact::where('Canal_vta', $canal)->get();
        return response()->json($data, 200);
    }
}
